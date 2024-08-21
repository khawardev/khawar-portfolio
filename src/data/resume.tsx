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
      title: "Vendra Ecommerce MERN App",
      href: "https://github.com/khawarsultan/vendra-react-app",
      dates: "Jan 2023 - Feb 2024",
      active: true,
      description:
        "The Vendra Ecommerce app features comprehensive product management, including display, search, add, edit, and delete options. It offers dynamic category, order, and contact management while highlighting best-selling and discounted products. The app integrates advanced search functionality, wishlist, cart, and coupon systems with a smooth checkout process. With pages like Home, Shop, About, Contact, Compare, and Discount, users can explore products with filters and layout options. Other features include single product reviews, user profile management, currency conversion, image uploads via Uploadcare, and robust admin, vendor, and user management systems.",
      technologies: [
        "React JS",
        "Mongo DB",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/khawarsultan/vendra-react-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/1150b2c1-0a7e-4f86-86df-c503c5514a8d/743_3x_shots_so.png",
      video:
        "",
    },
    {
      title: "Netflix Verse Next app",
      href: "https://netflix-verse.vercel.app/",
      dates: "Sep 2023 - Oct 2023",
      active: true,
      description:
        "Created the Netflix-verse React app featuring dynamic background images on the home page, powered by the TMDB API. Developed dynamic components showcasing trending and popular movies and TV shows with daily and weekly trend highlights. Integrated React Select for efficient filtering of content. The app includes comprehensive movie details pages with trailer playback, cast information, official videos, and recommendations for similar movies or TV shows, delivering an engaging and seamless user experience.",
      technologies: [
        "React JS",
        "Api Integration",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://netflix-verse.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/KhawarSultan/Netflix-verse-React-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/f8bc2b44-cf5c-4765-9f31-5e124f3fbbf9/571_2x_shots_so.png",
      video: "",
    },
  ],

} as const;
