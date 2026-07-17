/* eslint-disable no-console */

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function stripMarkdown(value) {
  const trimmed = String(value || "").trim();
  const linked = trimmed.match(/^\[[^\]]+\]\((https?:\/\/[^)]+)\)$/);
  if (linked) return linked[1];
  return trimmed.replace(/^`|`$/g, "").replace(/^<|>$/g, "").trim();
}

function readBodyValue(body, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(body || "").match(
    new RegExp(`^[ \\t]*(?:-[ \\t]*)?${escaped}:[ \\t]*(.*)/* eslint-disable no-console */

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function stripMarkdown(value) {
  const trimmed = String(value || "").trim();
  const linked = trimmed.match(/^\[[^\]]+\]\((https?:\/\/[^)]+)\)$/);
  if (linked) return linked[1];
  return trimmed.replace(/^`|`$/g, "").replace(/^<|>$/g, "").trim();
}

function readBodyValue(body, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(body || "").match(
    , "im"),
  );
  return match ? stripMarkdown(match[1]) : "";
}

function labelSuffix(labels, prefix) {
  const matches = labels
    .map((label) => (typeof label === "string" ? label : label.name))
    .filter(Boolean)
    .filter((name) => name.toLowerCase().startsWith(prefix.toLowerCase()))
    .map((name) => name.slice(prefix.length));

  if (matches.length !== 1) {
    throw new Error(`Expected exactly one ${prefix} label, found ${matches.length}.`);
  }

  return matches[0];
}

function parseIssueMetadata(issue) {
  const labels = issue.labels || [];
  const pagePath = readBodyValue(issue.body, "Pfad");
  const gitBookUrl = readBodyValue(issue.body, "GitBook URL");
  const sprachreviewCr = readBodyValue(issue.body, "DE Sprache");
  const optimierungsCr = readBodyValue(issue.body, "Optimierung");
  const fachcheckCr = readBodyValue(issue.body, "Fachcheck");
  const enSyncCr = readBodyValue(issue.body, "EN Sync");

  if (!pagePath) throw new Error("Issue body is missing 'Pfad'.");
  if (!gitBookUrl) throw new Error("Issue body is missing 'GitBook URL'.");

  return {
    stage: labelSuffix(labels, "stage:"),
    language: labelSuffix(labels, "lang:"),
    area: labelSuffix(labels, "area:"),
    pagePath,
    gitBookUrl,
    sprachreviewCr,
    optimierungsCr,
    fachcheckCr,
    enSyncCr,
  };
}

function findField(fields, name) {
  const field = fields.find((candidate) => normalize(candidate.name) === normalize(name));
  if (!field) throw new Error(`Project field '${name}' was not found.`);
  return field;
}

function findOption(field, value) {
  const option = (field.options || []).find(
    (candidate) => normalize(candidate.name) === normalize(value),
  );
  if (!option) {
    throw new Error(`Option '${value}' was not found in project field '${field.name}'.`);
  }
  return option;
}

async function getProject(github, organization, projectNumber) {
  const result = await github.graphql(
    `query($organization: String!, $projectNumber: Int!) {
      organization(login: $organization) {
        projectV2(number: $projectNumber) {
          id
          title
          fields(first: 100) {
            nodes {
              __typename
              ... on ProjectV2Field { id name dataType }
              ... on ProjectV2SingleSelectField {
                id
                name
                dataType
                options { id name }
              }
              ... on ProjectV2IterationField { id name dataType }
            }
          }
        }
      }
    }`,
    { organization, projectNumber },
  );

  const project = result.organization?.projectV2;
  if (!project) throw new Error(`Project ${organization}/${projectNumber} was not found.`);
  return { ...project, fields: project.fields.nodes.filter(Boolean) };
}

async function findProjectItem(github, projectId, issueNodeId) {
  let after = null;

  do {
    const result = await github.graphql(
      `query($projectId: ID!, $after: String) {
        node(id: $projectId) {
          ... on ProjectV2 {
            items(first: 100, after: $after) {
              nodes {
                id
                content { ... on Issue { id } }
              }
              pageInfo { hasNextPage endCursor }
            }
          }
        }
      }`,
      { projectId, after },
    );

    const items = result.node.items;
    const match = items.nodes.find((item) => item.content?.id === issueNodeId);
    if (match) return match.id;
    after = items.pageInfo.hasNextPage ? items.pageInfo.endCursor : null;
  } while (after);

  const added = await github.graphql(
    `mutation($projectId: ID!, $contentId: ID!) {
      addProjectV2ItemById(input: { projectId: $projectId, contentId: $contentId }) {
        item { id }
      }
    }`,
    { projectId, contentId: issueNodeId },
  );

  return added.addProjectV2ItemById.item.id;
}

async function setFieldValue(github, projectId, itemId, fieldId, value) {
  await github.graphql(
    `mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $value: ProjectV2FieldValue!) {
      updateProjectV2ItemFieldValue(
        input: { projectId: $projectId, itemId: $itemId, fieldId: $fieldId, value: $value }
      ) { projectV2Item { id } }
    }`,
    { projectId, itemId, fieldId, value },
  );
}

async function clearFieldValue(github, projectId, itemId, fieldId) {
  await github.graphql(
    `mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!) {
      clearProjectV2ItemFieldValue(
        input: { projectId: $projectId, itemId: $itemId, fieldId: $fieldId }
      ) { projectV2Item { id } }
    }`,
    { projectId, itemId, fieldId },
  );
}

function buildFieldUpdates(project, metadata) {
  const singleSelect = [
    ["Stage", metadata.stage],
    ["Sprache", metadata.language],
    ["Area", metadata.area],
  ].map(([fieldName, sourceValue]) => {
    const field = findField(project.fields, fieldName);
    const option = findOption(field, sourceValue);
    return { field, option };
  });

  const text = [
    ["Page Path", metadata.pagePath, true],
    ["GitBook URL", metadata.gitBookUrl, true],
    ["Sprachreview-CR", metadata.sprachreviewCr, false],
    ["Optimierungs-CR", metadata.optimierungsCr, false],
    ["Fachcheck-CR", metadata.fachcheckCr, false],
    ["EN-Sync-CR", metadata.enSyncCr, false],
  ].map(([fieldName, value, required]) => ({
    field: findField(project.fields, fieldName),
    value,
    required,
  }));

  return { singleSelect, text };
}

async function run({ github, context, core, issueNumber, organization, projectNumber }) {
  if (!Number.isInteger(issueNumber) || issueNumber < 1) {
    throw new Error("issue_number must be a positive integer.");
  }

  const { owner, repo } = context.repo;
  const { data: issue } = await github.rest.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  });

  const labelNames = issue.labels.map((label) =>
    typeof label === "string" ? label : label.name,
  );
  if (!labelNames.includes("docs-overhaul")) {
    throw new Error(`Issue #${issueNumber} is missing the docs-overhaul label.`);
  }

  const metadata = parseIssueMetadata(issue);
  const project = await getProject(github, organization, projectNumber);
  const updates = buildFieldUpdates(project, metadata);
  const itemId = await findProjectItem(github, project.id, issue.node_id);

  for (const { field, option } of updates.singleSelect) {
    await setFieldValue(github, project.id, itemId, field.id, {
      singleSelectOptionId: option.id,
    });
  }

  for (const { field, value, required } of updates.text) {
    if (value) {
      await setFieldValue(github, project.id, itemId, field.id, { text: value });
    } else if (!required) {
      await clearFieldValue(github, project.id, itemId, field.id);
    }
  }

  core.summary
    .addHeading("Docs project sync")
    .addTable([
      [{ data: "Field", header: true }, { data: "Value", header: true }],
      ["Issue", `#${issueNumber}`],
      ["Project", `${organization}/${project.title}`],
      ["Stage", metadata.stage],
      ["Sprache", metadata.language],
      ["Area", metadata.area],
      ["Page Path", metadata.pagePath],
      ["GitBook URL", metadata.gitBookUrl],
      ["Sprachreview-CR", metadata.sprachreviewCr || "(empty)"],
      ["Optimierungs-CR", metadata.optimierungsCr || "(empty)"],
      ["Fachcheck-CR", metadata.fachcheckCr || "(empty)"],
      ["EN-Sync-CR", metadata.enSyncCr || "(empty)"],
    ]);
  await core.summary.write();

  console.log(`Synchronized issue #${issueNumber} to project ${organization}/${projectNumber}.`);
}

module.exports = {
  buildFieldUpdates,
  findField,
  findOption,
  normalize,
  parseIssueMetadata,
  readBodyValue,
  run,
  stripMarkdown,
};
