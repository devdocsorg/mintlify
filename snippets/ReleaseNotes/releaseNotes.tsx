import React from "react";
import capReleaseJSON from "/snippets/private/cap-public.json";
import baseReleaseJSON from "/snippets/private/base-public.json";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IssueDetail {
  // Format is "Summer'24 - 12.0"
  sprint_name: string;
  issue_key: string;
  related_issues: string[];
  state: "Todo" | "Testing" | "Progress" | "Done";
  category:
    | "Fix"
    | "Improvement"
    | "Feature"
    | "Deprecated"
    | "Change"
    | "Other";
  title: string;
  description: string;
}

type ReleaseListingCode = keyof typeof RELEASE_LISTING;
type ReleaseNotesData = Array<[string, IssueDetail[]]>;

function reverse_slice<T>(arr: T[], n: number, m?: number): ReleaseNotesData {
  return arr.slice(n, m).reverse() as ReleaseNotesData;
}

const RELEASE_LISTING = {
  "BASE-current-and-past": reverse_slice(baseReleaseJSON, 0, -1),
  "BASE-future": reverse_slice(baseReleaseJSON, -1),
  "CAP-current-and-past": reverse_slice(capReleaseJSON, 0, -1),
  "CAP-future": reverse_slice(capReleaseJSON, -1),
} as const;

const slugify = (sprintName: string): string => {
  // replace any non-alphanumeric characters with a dash,
  // and then replace multiple dashes with a single dash
  // and remove any trailing dash
  return sprintName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/-$/, "");
};

// Example function to display release notes
const displayReleaseNotes = (
  data: ReleaseNotesData,
  listing: ReleaseListingCode,
) => {
  return data.map(([releaseName, issues], i) => {
    const id = slugify(releaseName);
    return (
      <div
        key={releaseName}
        className={`release-notes-container ${i === 0 ? "current" : ""}`}
      >
        <h2 id={id}>{releaseName}</h2>
        {issues.map((issue) => {
          const issues_pills = [issue.issue_key];

          return (
            <div key={issue.issue_key}>
              <div
                className={`docs-category-label ${issue.category.toLowerCase()}`}
              >
                {issue.category}
              </div>
              {listing.includes("future") && (
                <div
                  className={`docs-category-label ${issue.state.toLowerCase()}`}
                >
                  {issue.state}
                </div>
              )}
              {issues_pills.map((issue_key, ix) => {
                return (
                  <div key={ix} className={`docs-category-label issue-number`}>
                    {issue_key}
                  </div>
                );
              })}
              {issue.related_issues && (
                <div className="related-issues" style={{ marginTop: "0.5rem" }}>
                  {issue.related_issues.map((issue_key, ix) => {
                    return (
                      <div
                        key={ix}
                        className={`docs-category-label issue-number`}
                      >
                        + {issue_key}
                      </div>
                    );
                  })}
                </div>
              )}

              <h4>{issue.title}</h4>

              <ReactMarkdown
                children={issue.description}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          );
        })}
      </div>
    );
  });
};

// Function to generate TOC based on ReleaseListingCode
export const generateReleaseToc = (listing: ReleaseListingCode) => {
  const releases = RELEASE_LISTING[listing];
  return releases.map(([releaseName], ix) => {
    if (ix == 0 && listing.includes("current")) {
      releaseName += " (current)";
    }

    return {
      id: slugify(releaseName),
      level: 2,
      value: releaseName,
    };
  });
};

export const ReleaseNotes = (props: { listing: ReleaseListingCode }) => {
  const releases = RELEASE_LISTING[props.listing];
  return (
    <div>
      <h2
        style={{
          // position: "fixed",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          // marginTop: "0.5rem",
          marginBottom: "2rem",
          color: "rgb(239, 239, 239)",
        }}
      >
        {/*all uppercase*/}
        PLEASE NOTE: THIS IS PRE-REVIEW GENERATED EXAMPLE CONTENT <br />
      </h2>
      {displayReleaseNotes(releases, props.listing)}
    </div>
  );
};
