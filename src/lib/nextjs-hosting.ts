export interface HowItWorksModel {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export const nextJsHowItWorks: HowItWorksModel[] = [
  {
    id: "fully-managed",
    title: "Fully managed (most common)",
    description:
      "Your project runs on the MTX Studio Vercel team. You keep shipping in Git; we configure deploys, preview URLs, env vars, and domains.",
    bullets: [
      "You do not need a Vercel account",
      "One invoice from MTX Hosting covers management and platform costs",
      "Ideal for MTX-built sites and agencies who want zero ops overhead",
    ],
  },
  {
    id: "your-vercel",
    title: "Your Vercel account",
    description:
      "You keep billing and ownership on your own Vercel team. We join as collaborators and run the same managed playbook.",
    bullets: [
      "You pay Vercel; we charge a management fee (or all-in per agreement)",
      "Best when compliance or finance requires your entity on the invoice",
      "We never ask for your Vercel password — only a team invite",
    ],
  },
];

export const nextJsWhatWeNeed = [
  "Repository access (GitHub/GitLab) or a handoff we import into a repo",
  "Domain DNS (or registrar access) for production and staging",
  "Environment secrets for staging and production (never committed to Git)",
];
