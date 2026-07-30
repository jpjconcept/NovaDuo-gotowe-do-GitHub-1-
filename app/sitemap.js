export default function sitemap() {
  const baseUrl = "https://www.jpjconcept.pl";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/segmenty-pod-warszawa`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/segmenty-pogroszew`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blizniaki-pod-warszawa`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/historia-cen`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}
