"use client";

import { useState } from "react";

export default function OpenSourceContributions() {
  const [activeTab, setActiveTab] = useState("merged"); // Changed from "open" to "merged"

  const contributions = {
    merged: [
      {
        repo: "PostHog/posthog",
        title:
          "feat(surveys): Enable filtering survey responses by group property",
        description:
          "Allows filtering survey responses by group properties, enabling segmentation similar to feature flags and insights for better analysis",
        type: "Feature",
        date: "2025-07-12",
        url: "https://github.com/PostHog/posthog/pull/34946",
      },

      {
        repo: "google-gemini/gemini-cli",
        title: "fix: Clear previous thoughts when starting new prompts",
        description:
          "Fixed bug where previous thoughts persisted when entering new prompts. Added setThought(null) in three places: new prompt start, user cancellation, and error handling.",
        type: "Bug Fix",
        date: "2025-07-27",
        url: "https://github.com/google-gemini/gemini-cli/pull/4966",
      },

      {
        repo: "outline/outline",
        title: "fix: extract domain from user email in Slack authentication ",
        description:
          "Issue: Slack authentication fails with 'Invalid authentication' error when both OIDC and Slack are enabled simultaneously.",
        type: "Bug Fix",
        date: "2025-07-27",
        url: "https://github.com/outline/outline/pull/9742",
      },

      {
        repo: "run-llama/LlamaIndexTS",
        title: "feat: multi-turn image generation support",
        description:
          "Added image_id parameter to image generation tools for multi-turn support",
        type: "Feature",
        date: "2025-07-15",
        url: "https://github.com/run-llama/LlamaIndexTS/pull/2106",
      },

      {
        repo: "go-gitea/gitea",
        title:
          "fix: improve english grammar and readability in locale_en-US.ini",
        description:
          "Improved English grammar and readability in locale_en-US.ini",
        type: "Bug Fix",
        date: "2025-07-06",
        url: "https://github.com/go-gitea/gitea/pull/35017",
      },
      {
        repo: "All PRs Open and Merged Here",
        title: "Click on the link to see all my PRs",
        description: "Click on the link to see all my PRs",
        type: "All PRs",

        url: "https://github.com/naaa760/naaa760/blob/main/contributions.md",
      },
    ],
    open: [
      {
        repo: "calcom/cal.com",
        title: "feat: disable recording emails for guests",
        description:
          "A new Cal Video setting disable recording emails for guests lets organizers choose whether guests get recording download emails.",
        type: "Feature",
        date: "2025-07-13",
        url: "https://github.com/calcom/cal.com/pull/22457",
      },
      {
        repo: "PostHog/posthog",
        title:
          "feat(surveys): Enable filtering survey responses by group property",
        description:
          "Allows filtering survey responses by group properties, enabling segmentation similar to feature flags and insights for better analysis",
        type: "Feature",
        date: "2025-07-12",
        url: "https://github.com/PostHog/posthog/pull/34955",
      },

      {
        repo: "Vercel/ai",
        title: "fix: fixed the Google Gemini provider's generateObject",
        description:
          "generateObject wasn't working with Gemini models - type validation was failing.",
        type: "Bug Fix",
        date: "2025-07-15",
        url: "https://github.com/vercel/ai/pull/7342",
      },

      {
        repo: "supabase/supabase",
        title: "fix: Allow auth config changes with hooks on Free/Pro plans.",
        description:
          "Auth config updates now skip hook fields, allowing other settings to be saved without plan restriction errors.",
        type: "Bug Fix",
        date: "2025-07-09",
        url: "https://github.com/supabase/supabase/pull/37070",
      },

      {
        repo: "google-gemini/gemini-cli",
        title:
          "fix: keep command help text visible when full command name is typed",
        description:
          "his PR fixes a UX issue where command help text disappears when typing the full command name. Previously, typing /bu ",
        type: "Bug Fix",
        date: "2025-07-18",
        url: "https://github.com/google-gemini/gemini-cli/pull/4375",
      },

      {
        repo: "All PRs Open and Merged Here",
        title: "Click on the link to see all my PRs",
        description: "Click on the link to see all my PRs",
        type: "All PRs",

        url: "https://github.com/naaa760/naaa760/blob/main/contributions.md",
      },
    ],
  };

  return (
    <section className="open-source-section" id="open-source">
      <h2 className="section-title">OPEN SOURCE CONTRIBUTIONS</h2>

      <div className="contributions-container">
        <div className="contributions-header">
          <div className="contributions-intro">
            <h3 className="contributions-title">
              Building the Future, One PR at a Time
            </h3>
            <p className="contributions-description">
              Contributing to open source projects that power the modern web.
              From bug fixes to new features, I believe in giving back to the
              developer community that has given so much to me.
            </p>
          </div>

          <div className="contributions-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Total PRs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Repositories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Merged</div>
            </div>
          </div>
        </div>

        <div className="contributions-tabs">
          <button
            className={`tab-button ${activeTab === "merged" ? "active" : ""}`}
            onClick={() => setActiveTab("merged")}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Merged Contributions
          </button>
          <button
            className={`tab-button ${activeTab === "open" ? "active" : ""}`}
            onClick={() => setActiveTab("open")}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Open Pull Requests
          </button>
        </div>

        <div className="contributions-grid">
          {contributions[activeTab].map((contribution, index) => (
            <div key={index} className="contribution-card">
              <div className="contribution-header">
                <div className="contribution-repo">
                  <svg
                    className="repo-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {contribution.repo}
                </div>
                <div
                  className={`contribution-type ${contribution.type
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {contribution.type}
                </div>
              </div>

              <h4 className="contribution-title">{contribution.title}</h4>
              <p className="contribution-description">
                {contribution.description}
              </p>

              <div className="contribution-footer">
                <span className="contribution-date">{contribution.date}</span>
                <a
                  href={contribution.url}
                  className="contribution-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PRs
                  <svg
                    className="link-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="contributions-cta">
          <p className="cta-text">
            Want to see more of my contributions or collaborate on open source?
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/naaa760"
              className="cta-button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="button-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
            <a
              href="mailto:nehaaa06@gmail.com"
              className="cta-button secondary"
            >
              <svg
                className="button-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
