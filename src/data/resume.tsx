import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "khawar sultan",
  initials: "KS",
  url: "https://dillion.io",
  location: "Faislabad, Pakistan, PK",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer, I love building things.",
  summary:
    "Software Engineer with experience building web applications using Next.js, React JS, TypeScript, and Redux Toolkit. Proficient in delivering full- stack applications in collaboration with cross - functional teams.Improved web app responsiveness and increased user engagement by 25 % through effective interfaces.",
  avatarUrl: "https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "SASS",
    "Typescript",
    "Next.js",
    "React.js",
    "Jotai",
    "Redux Toolkit",
    "Drizzle ORM",
    "MongoDB",
    "NeonDB",
    "Clerk Auth",
    "Kinde Auth",
    "Next Auth",
    "REST API",
    "Strapi Headless CMS",
    "Git & GitHub",
    "Netlify",
    "Vercel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Khawarsultan.developer@gmail.com",
    tel: "+923000-230200",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KhawarSultan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/Khawar-Sultan",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "Khawarsultan.developer@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Traxim Technologies",
      href: "https://traximtech.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "https://ucarecdn.com/aaceefcc-642c-488f-9e2a-b54194984e7b/1631355153881.jpeg",
      start: "Sep 2023",
      end: "Jun 2024",
      description: "Developed and maintained web applications using Next.js and React.js, focusing on responsive design and functionalities.Collaborated closely with backend developers to integrate APIs, optimizing the overall performance of web applications by 30% through effective database implementation.",
      description2: "Implemented state management solutions with Redux Toolkit, significantly enhancing data handling and application performance while ensuring type safety with TypeScript.Leveraged modern CSS frameworks such as Tailwind CSS and Bootstrap, along with UI libraries like Shadcn and MUI, to create visually appealing interfaces.",
    },
  ],
  education: [
    {
      school: "COMSATS University",
      href: "http://www.sahiwal.comsats.edu.pk/",
      degree: "BS Software Engineering",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/COMSATS_new_logo.jpg/640px-COMSATS_new_logo.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Superior Group of colleges",
      href: "https://www.superiorcolleges.edu.pk/",
      degree: "FSC Pre Engineering",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLaTQFctvtXaUMvwi-3qNwgYtWUwfziiCPQ&s",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

} as const;
