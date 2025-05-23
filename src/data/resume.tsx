import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "khawar sultan",
  initials: "https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx",
  url: "https://khawarsultan.vercel.app",
  location: "Islamabad, Pakistan, PK",
  locationLink: "",
  description:
    "Software Engineer, I love building applications.",
  summary:
    "Software Engineer with experience building web applications using Next.js, React JS, TypeScript, and Redux Toolkit. Proficient in delivering full- stack applications in collaboration with cross - functional teams.Improved web app responsiveness and increased user engagement by 25 % through effective interfaces.",
  avatarUrl: "https://i.postimg.cc/T3nHPLWt/e9cd7094-4d1d-4bfe-b9be-432f2d750e8c.png",
  skills: [
    "Next.js",
    "React.js",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "SASS",
    "Drizzle ORM",
    "NeonDB",
    "Node.js",
    "MongoDB",
    "MongoDB",
    "Supabase",
    "Pinecone DB",
    "Swr",
    "Redux Toolkit",
    "Jotai",
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
    { href: "#home", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Khawarsultan.developer@gmail.com",
    tel: "+923000-230200",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/khawardev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/Khawar-Sultan",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Khawarsultan.developer@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1PW3ckJ-La4pYxVM9KLBhEADS4CFLK-xg/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Traxim Technologies",
      href: "https://traximtech.com/",
      badges: [],
      location: "",
      title: "Frontend Engineer",
      logoUrl: "https://ucarecdn.com/aaceefcc-642c-488f-9e2a-b54194984e7b/1631355153881.jpeg",
      start: "",
      end: "",
      description: "Developed and maintained web applications using Next.js and React.js, focusing on responsive design and functionalities.Collaborated  with backend developers to integrate APIs, optimizing the overall performance of web applications by 30% through effective database implementation.",
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
      title: "Tech nod",
      href: "https://technod.store/",
      dates: "Apr 2025 - Present",
      active: true,
      description: "Technod Web Application is a modern computer-build eCommerce platform developed using Next.js, TypeScript, Supabase, and Drizzle ORM. The application features a robust Admin Panel where administrators can manage products, brands, users, and suppliers, along with a dashboard that provides analytics and insights. On the user side, customers can seamlessly browse and explore computer products, making it a user-friendly and efficient platform for both management and shopping.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Drizzle orm",
        "Shadcn UI",
        "Origin UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://technod.store/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://i.postimg.cc/y82RdPNh/382-1x-shots-so.png",
      video: ""
    },
    {
      title: "Next Blocks",
      href: "https://nextblocks.vercel.app/",
      dates: "Sep 2024 - Present",
      active: true,
      description: "Next Blocks is a UI components library built using Next.js, Tailwind CSS, and Shadcn UI. It includes ready-to-use categorized blocks, change logs, and developer documentation. Perfect for transforming your applications with reusable components and seamless integrations with third-party tools like Drizzle ORM, custom authentication systems, and database connections.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://nextblocks.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "https://ucarecdn.com/54002e2a-59bb-4320-9ea8-5db55d02655f/331_1x_shots_so.png",
      video: ""
    },
    {
      title: "Medium Blogs Next App",
      href: "https://mediumblogs.vercel.app/",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description: "Medium Blogs app allowing users to write, view stories. Features include story creation, tagging, filtering, Google authentication, and search functionality. Users can like, comment, reply, save, and share stories, with profile management for drafts, published stories, and saved content.",
      technologies: [
        "Next.js",
        "Neon Database",
        "Drizzle ORM",
        "TypeScript",
        "NextAuth",
        "Tailwind CSS",
        "Uploadcare",
        "SWR",
        "Jotai",
        "Shadcn UI",
        " Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mediumblogs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Khawardev/mediumblogs-next-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/a42ee8b5-ff23-4843-b01e-9ade48667b2b/115_3x_shots_so.png",
      video: "",
    },
    {
      title: "Groupe Mopakam Ecommerce Next App",
      href: "https://groupemopakam.vercel.app/en",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description: "The Groupe Mopakam Next.js eCommerce Application is a comprehensive platform designed for seamless online shopping. Built with Next.js, it incorporates Clerk authentication for secure logins via email magic links, ensuring user safety. The application features a modern, responsive design using Tailwind CSS and Shadcn UI. On the backend, it leverages Neon for a serverless PostgreSQL database, while Drizzle ORM manages the schema with the added benefits of TypeScript for type safety. Key functionalities include product display, a shopping cart, and checkout for customers, alongside an admin dashboard that enables efficient product, category, order, and customer management with full CRUD capabilities. This creates a robust and user-friendly eCommerce experience for both shoppers and administrators.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Clerk Authentication",
        "Neon DB",
        "Drizzle ORM",
        "Typescript",
        "Upload Thing"
      ],
      links: [
        {
          type: "Website",
          href: "https://groupemopakam.vercel.app/en",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "https://ucarecdn.com/7abb882d-8a8d-41e2-a015-a7fb157966ef/488_2x_shots_so.png",
      video: "",
    },
    // {
    //   title: "Onma Next App",
    //   href: "https://onma.vercel.app/",
    //   dates: "Jul 2024 - Aug 2024",
    //   active: true,
    //   description: "Onma web application using Next.js, focusing on server-side rendering for fast performance and SEO benefits. Integrated dynamic content with APIs and built responsive components using React.js and Tailwind CSS. Ensured a user-friendly interface with efficient navigation through Next.js’s routing system, while providing a seamless experience across devices.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://onma.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },

    //   ],
    //   image: "https://ucarecdn.com/82ca515e-c900-45de-9702-e7afb4ca58a0/284_2x_shots_so.png",
    //   video: "",
    // },
    {
      title: "Mikande Next App",
      href: "https://mikande.vercel.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description: "Mikande web application using Next.js, leveraging server-side rendering for improved performance and SEO optimization. Integrated real-time APIs to display dynamic content and built responsive, reusable components using React.js, Tailwind CSS, and Material UI. Ensured a smooth, mobile-friendly user experience with Next.js's file-based routing for efficient navigation and structure.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mikande.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/0f567744-3ddc-4eb6-a8e0-808326bdc4ad/876_2x_shots_so.png",
      video: "",
    },
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
          type: "Website",
          href: "https://vendra.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/1150b2c1-0a7e-4f86-86df-c503c5514a8d/743_3x_shots_so.png",
      video:
        "",
    },
    {
      title: "Netflix Verse React app",
      href: "https://netflix-verse.vercel.app/",
      dates: "Jun 2024 - Jul 2024",
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
          href: "https://github.com/khawardev/netflixverse-react-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/f8bc2b44-cf5c-4765-9f31-5e124f3fbbf9/571_2x_shots_so.png",
      video: "",
    },
    {
      title: "Weatherify React App",
      href: "https://weatherifypro.vercel.app/",
      dates: "May 2024 - Jun 2024",
      active: true,
      description:
        "Developed the Weatherify React app, integrating real-time weather data from a Weather API. The app features a responsive design with support for both dark and light modes, optimizing the user experience. It displays key weather conditions including date, day, sunrise, sunset, air quality, humidity, visibility, and atmospheric pressure. Additionally, a detailed forecast section provides temperature and wind speed information throughout the day, ensuring users have access to comprehensive weather updates.",
      technologies: [
        "React JS",
        "Api Integration",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://weatherifypro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khawardev/weatherify-react-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/244e963e-9404-4294-949f-68ef9469e4d9/128_3x_shots_so.png",
      video: "",
    },
    {
      title: "Docket React App",
      href: "https://docketnotes.vercel.app/",
      dates: "Feb 2024 - March 2024",
      active: true,
      description: "Developed the Docket React App, a platform for users to organize and manage their notes efficiently. Key features include the ability to create, update, and delete notes, as well as create and manage folders for better organization. Users can associate notes with specific folders, enhancing productivity. The app also incorporates a powerful search feature, allowing users to quickly locate notes or folders by keywords or phrases. State management is handled using Redux Toolkit, ensuring efficient and centralized data handling throughout the application.",
      technologies: [
        "React JS",
        "Typescript",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://docketnotes.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khawardev/docket-react-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/afdc39ea-504e-4827-8ba8-de3d5504d8cd/989_3x_shots_so.png",
      video: "",
    },
    {
      title: "Jsdvstore Ecommerce React App",
      href: "https://jsdvstore-ecommerce-react-app.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "Created the Jsdvstore Ecommerce React app to deliver a seamless shopping experience. The app integrates a custom API to display a wide range of products, with category-specific functionality to fetch and showcase related items. I developed dynamic search capabilities, allowing users to quickly locate desired products. Additionally, the app features a user-friendly product detail page with add to cart functionality, enabling users to adjust quantities while automatically updating the total and individual prices for a smooth and intuitive shopping experience.",
      technologies: [
        "React JS",
        "Api Integration",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jsdvstore-ecommerce-react-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khawardev/jsdvstore-react-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/3a1edfd2-47d3-40ab-b4f0-574873dc1ea6/105_3x_shots_so.png",
      video: "",
    },
    {
      title: "Seppo Landing Page Website",
      href: "https://seppoo.netlify.app/",
      dates: "March 2024 - April 2024",
      active: true,
      description: "Seppo Landing Page website is a professionally designed and responsive web page built using HTML, CSS, JavaScript, and Bootstrap CSS. It serves as a captivating and informative introduction to the Seppo brand or product.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://seppoo.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/9e01c454-73e6-472f-a018-425b88bc4284/457_2x_shots_so.png",
      video: "",
    },
    {
      title: "Apple iPhone 13 Clone",
      href: "https://applephone13.netlify.app/",
      dates: "April 2024 - May 2024",
      active: true,
      description: "Apple iPhone 13 Clone website using HTML, CSS, JavaScript, and Tailwind CSS. It showcases the iPhone 13's features, specifications, and visuals, allowing users to explore and compare models. The design closely emulates the official Apple website, offering a visually appealing and immersive experience.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://applephone13.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/e2c7e4eb-7a6f-4693-8ced-69bf655d0d82/322_3x_shots_so.png",
      video: "",
    },
    {
      title: "W3School Clone Website",
      href: "https://schoolw3.netlify.app/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description: "W3School Clone website to replicate the design and functionality of the popular W3Schools website. Built using HTML, CSS, and JavaScript, the site offers comprehensive tutorials, references, and examples for various web development technologies. Users can explore the site to learn and practice different programming languages, web development techniques, and frameworks, all within a familiar interface similar to the original site.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://schoolw3.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/e7d21cb8-6b5d-451f-b0f1-c10059e82adf/925_3x_shots_so.png",
      video: "",
    },
    {
      title: "Modern Apartment React app",
      href: "https://appartmentapp.vercel.app/",
      dates: "Sep 2023 - Oct 2023",
      active: true,
      description: "Developed The Modern Apartment static React app, a responsive web application. Utilized React.js for dynamic UI rendering, CSS for styling, JavaScript for interactivity, and Bootstrap CSS for a responsive design. The app allows users to explore various apartments and view detailed property information, offering a seamless browsing experience.",
      technologies: [
        "React JS",
        "CSS",
        "Bootstrap",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://appartmentapp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khawardev/appartment-react-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ucarecdn.com/0934c09f-dc1f-4ae1-b4ae-d8890ccb4d38/103_2x_shots_so.png",
      video: "",
    },

  ],

} as const;
