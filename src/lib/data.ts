// import runthecodeImg from "@/public/home-page.png";
// import carshowcaseImg from "@/public/carshowcase.jpg";
// import socialappImg from "@/public/img_project_socialApp_full.jpg";

export const links = [
  {
    name: "Home",
    hash: "/",
    active: "text-cyan-400",
    hover: "hover:text-cyan-400"
  },
  {
    name: "Work",
    hash: "/work",
    active: "text-red-600",
    hover: "hover:text-red-600"
  },
  {
    name: "Resume",
    hash: "#resume",
    active: "text-pink-300",
    hover: "hover:text-pink-300"
  },
  {
    name: "Contact",
    hash: "/contact",
    active: "text-green-600",
    hover: "hover:text-green-600"
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer bootcamp",
    location: "Madrid, Spain",
    description:
      "I graduated after 6 months of studying ( 900+ hs coding).",
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Madrid, Spain",
    description:
      "Developed a Next.js application, consuming data from two different APIs, including integrated pagination, filtering, and search functionality.",
    date: "2023 - 1 month",
  },
  {
    title: "Front-End Developer",
    location: "Madrid, Spain",
    description:
      "I worked as a full-stack developer leading a 3-member team responsible for the design, and front-end development of an e-commerce. I developed and implemented the backend for products with a MySQL database, including controllers and routes.",
    date: "2023 - 2 months",
  },
] as const;

export const projectsData = [
  {
    title: "RUN THE CODE",
    description:
      "I worked as a full-stack developer on this startup project for 2 months. A sneaker store e-commerce.",
    tags: ["React", "Typescript", "TailwindCSS" ,"Node.js", "Express", "MongoDB"],
    // imageUrl: runthecodeImg,
    url: "https://runthecode-ecommerce.onrender.com/"
  },
  {
    title: "Car Hub",
    description:
      "Developed a Next.js application, consuming data from two different APIs. It has features like integrated pagination, filtering, and search functionality.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    // imageUrl: carshowcaseImg,
    url: "https://jaguero-carshowcase.netlify.app/"
  },
  {
    title: "SocialApp",
    description:
      "A pinterest clone. I use Sanity.io as DB for user and pictures, login with Google OAuth 2.0. Fully functional.",
    tags: ["Next.js", "Sanity.io", "TailwindCSS"],
    // imageUrl: socialappImg,
    url: "https://jaguero-socialapp.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;

export const contactLinks = [
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/julianaguero/"
  },
  {
    name: "GITHUB",
    link: "https://github.com/Julianaguero"
  },
  {
    name: "INSTAGRAM",
    link: "https://www.instagram.com/j10928/"
  },
  {
    name: "EMAIL",
    link: "mailto:julianaguero@gmail.com"
  },
] as const;