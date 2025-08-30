// File: constants/nav-items.tsx

const navigation = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
  },
  {
    title: "Introduction",
    href: "/docs/introduction",
  },
  {
    title: "Installation",
    href: "/docs/installation",
  },
  {
    title: "Installation Guide",
    children: [
      {
        title: "Manual Setup",
        href: "/docs/installation/manual",
      },
      {
        title: "With Next.js",
        href: "/docs/installation/nextjs",
      },
      {
        title: "With Vite",
        href: "/docs/installation/vite",
      },
      {
        title: "With Remix",
        href: "/docs/installation/remix",
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
      {
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
      },
      {
        title: "Animated Button",
        href: "/docs/components/animated-button",
        category: "new",
      },
      {
        title: "Animated Tabs",
        href: "/docs/components/animated-tabs",
      },
      {
        title: "Animated Testimonials",
        href: "/docs/components/animated-testimonials",
      },
      {
        title: "Animated TextGenerate",
        href: "/docs/components/animated-text-generate",
      },
      // add more components here...
    ],
  },
];

export default navigation;
