"use client";

import { useState } from "react";

export default function OpenSourceContributions() {
  const [activeTab, setActiveTab] = useState("merged");

  const contributions = {
    merged: [
      {
        repo: "reactjs/reactjs.org",
        title: "Updated documentation for React 18 features",
        description:
          "Enhanced the official React documentation with comprehensive examples for concurrent features and automatic batching.",
        type: "Documentation",
        date: "2024-12-15",
        url: "#",
      },
      {
        repo: "vercel/next.js",
        title: "Fixed image optimization in App Router",
        description:
          "Resolved edge case where Next.js Image component wasn't properly optimizing images in certain App Router configurations.",
        type: "Bug Fix",
        date: "2024-11-28",
        url: "#",
      },
      {
        repo: "tailwindlabs/tailwindcss",
        title: "Added new utility classes for grid layouts",
        description:
          "Contributed new CSS Grid utility classes to improve responsive design capabilities in Tailwind CSS.",
        type: "Feature",
        date: "2024-10-12",
        url: "#",
      },
    ],
    open: [
      {
        repo: "microsoft/vscode",
        title: "Enhanced TypeScript IntelliSense performance",
        description:
          "Optimized TypeScript language service to provide faster and more accurate IntelliSense suggestions.",
        type: "Performance",
        date: "2024-12-20",
        url: "#",
      },
      {
        repo: "nodejs/node",
        title: "Improved error handling in HTTP module",
        description:
          "Enhanced error handling and logging in Node.js HTTP module for better debugging capabilities.",
        type: "Enhancement",
        date: "2024-12-18",
        url: "#",
      },
      {
        repo: "facebook/react",
        title: "Add support for custom hooks in DevTools",
        description:
          "Extended React DevTools to provide better debugging support for custom hooks and their state management.",
        type: "Feature",
        date: "2024-12-10",
        url: "#",
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
              <div className="stat-number">12</div>
              <div className="stat-label">Merged PRs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Open PRs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Repositories</div>
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
                  View PR
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
