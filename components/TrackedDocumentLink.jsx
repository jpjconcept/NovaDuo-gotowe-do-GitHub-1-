"use client";

export default function TrackedDocumentLink({
  href,
  documentName,
  documentCategory,
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}) {
  const handleClick = () => {
    if (typeof window === "undefined") return;

    const consent = window.localStorage.getItem(
      "novaduo-analytics-consent"
    );

    if (consent !== "granted") return;

    if (typeof window.gtag !== "function") return;

    window.gtag("event", "open_document", {
      document_name: documentName,
      document_category: documentCategory,
      document_path: href,
      page_path: window.location.pathname,
    });
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
