import siteData from "../data/siteData.json";

export default function jsonLDGenerator({ type, article, url }) {
  if (type === "article") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${article.data.title}",
        "description": "${article.data.description}",
        "image": "${article.image.src}",
        "author": {
          "@type": "Person",
          "name": "${article.data.author}",
          "url": "/author/${article.data.author}",
        },
        "datePublished": "${article.data.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}
