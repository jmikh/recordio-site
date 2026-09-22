const USE_CASES = [
  {
    slug: "product-walkthrough-video",
    label: "Product walkthrough videos",
    blurb: "Show how a feature works in two to four minutes, with a script template."
  },
  {
    slug: "software-demo-recording",
    label: "Software demo recording",
    blurb: "Record a demo once and send it to every prospect, with watch stats."
  },
  {
    slug: "customer-onboarding-videos",
    label: "Customer onboarding videos",
    blurb: "One short video per setup step, kept current and easy to measure."
  },
  {
    slug: "bug-report-screen-recording",
    label: "Bug report screen recordings",
    blurb: "Reproduce the bug on video, blur customer data, link it in the ticket."
  },
  {
    slug: "release-walkthrough-video",
    label: "Release walkthrough videos",
    blurb: "A two-minute update for every release, for customers and internal teams."
  }
];
const useCaseHref = (slug) => `/use-cases/${slug}/`;
const useCaseLink = (slug) => {
  const entry = USE_CASES.find((u) => u.slug === slug);
  if (!entry) throw new Error(`Unknown use case: ${slug}`);
  return { label: entry.label, href: useCaseHref(slug), blurb: entry.blurb };
};

export { USE_CASES as U, useCaseHref as a, useCaseLink as u };
