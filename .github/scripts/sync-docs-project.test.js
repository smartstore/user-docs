const assert = require("node:assert/strict");
const test = require("node:test");

const {
  buildFieldUpdates,
  findOption,
  normalize,
  parseIssueMetadata,
  readBodyValue,
} = require("./sync-docs-project");

const issueBody = `## GitBook-Seite

Pfad: \`loslegen/readme\`
GitBook URL: https://app.gitbook.com/s/space/loslegen/readme

## Change Requests

- DE Sprache: https://app.gitbook.com/o/org/s/space/~/changes/change-id/
- Optimierung: https://app.gitbook.com/o/org/s/space/~/changes/optimization-id/
`;

test("parses documentation metadata from an issue", () => {
  const result = parseIssueMetadata({
    body: issueBody,
    labels: [
      { name: "docs-overhaul" },
      { name: "stage:de-sprachreview" },
      { name: "lang:de" },
      { name: "area:loslegen" },
    ],
  });

  assert.deepEqual(result, {
    stage: "de-sprachreview",
    language: "de",
    area: "loslegen",
    pagePath: "loslegen/readme",
    gitBookUrl: "https://app.gitbook.com/s/space/loslegen/readme",
    sprachreviewCr: "https://app.gitbook.com/o/org/s/space/~/changes/change-id/",
    optimierungsCr: "https://app.gitbook.com/o/org/s/space/~/changes/optimization-id/",
  });
});

test("reads markdown links and backtick values", () => {
  assert.equal(readBodyValue("Pfad: `a/b`", "Pfad"), "a/b");
  assert.equal(
    readBodyValue("GitBook URL: [Open](https://example.com/page)", "GitBook URL"),
    "https://example.com/page",
  );
});

test("matches labels to project options independent of punctuation and case", () => {
  assert.equal(normalize("DE Sprachreview"), normalize("de-sprachreview"));
  assert.equal(
    normalize("DE Optimierungsvorschläge"),
    normalize("de-optimierungsvorschlaege"),
  );
  assert.equal(normalize("Screenshots prüfen"), normalize("screenshots-pruefen"));
  assert.equal(
    findOption(
      { name: "Stage", options: [{ id: "option-id", name: "DE Sprachreview" }] },
      "de-sprachreview",
    ).id,
    "option-id",
  );
});

test("rejects ambiguous stage labels", () => {
  assert.throws(
    () =>
      parseIssueMetadata({
        body: issueBody,
        labels: [
          "stage:de-sprache",
          "stage:de-sprachreview",
          "lang:de",
          "area:loslegen",
        ],
      }),
    /exactly one stage:/,
  );
});

test("resolves the current project field names before synchronization", () => {
  const metadata = parseIssueMetadata({
    body: issueBody,
    labels: ["stage:de-sprachreview", "lang:de", "area:loslegen"],
  });
  const project = {
    fields: [
      { id: "stage", name: "Stage", options: [{ id: "review", name: "DE Sprachreview" }] },
      { id: "language", name: "Sprache", options: [{ id: "de", name: "DE" }] },
      { id: "area", name: "Area", options: [{ id: "start", name: "Loslegen" }] },
      { id: "path", name: "Page Path" },
      { id: "url", name: "GitBook URL" },
      { id: "language-cr", name: "Sprachreview-CR" },
      { id: "optimization-cr", name: "Optimierungs-CR" },
    ],
  };

  const updates = buildFieldUpdates(project, metadata);

  assert.deepEqual(
    updates.singleSelect.map(({ field }) => field.name),
    ["Stage", "Sprache", "Area"],
  );
  assert.deepEqual(
    updates.text.map(({ field }) => field.name),
    ["Page Path", "GitBook URL", "Sprachreview-CR", "Optimierungs-CR"],
  );
});

test("rejects stale project field names before synchronization", () => {
  const metadata = parseIssueMetadata({
    body: issueBody,
    labels: ["stage:de-sprachreview", "lang:de", "area:loslegen"],
  });
  assert.throws(
    () => buildFieldUpdates({ fields: [] }, metadata),
    /Project field 'Stage' was not found/,
  );
});
