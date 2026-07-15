const assert = require("node:assert/strict");
const test = require("node:test");

const {
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
    gitBookCr: "https://app.gitbook.com/o/org/s/space/~/changes/change-id/",
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
