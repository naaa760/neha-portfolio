"use client";

export default function RepositoryLink({ href, children }) {
  return (
    <a
      href={href}
      className="repository-link"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </a>
  );
}
