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
    hash: "/resume",
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
    title: "2024 - MR. CABEZA LAPIZ",
    position: "React Developer.",
    location: "/ Madrid - Spain",
  },
  {
    title: "2022 - 2023 - ECC SL",
    position: "Head Manager.",
    location: "/ Madrid - Spain",
  },
  {
    title: "2019 - 2020 - DET VIDE HUS",
    position: "Manager.",
    location: "/ Copenhagen - Denmark",
  },
  {
    title: "2013 - 2018 - GEA GRUPO SALUD",
    position: "RR.HH.",
    location: "/ Cordoba - Argentina",
  },
] as const;

export const educationData = [
  {
    title: "REACT DEVELOPER.",
    location: "MADRID, SPAIN",
    site:
      "UNIR - UNIVERSIDAD INTERNACIONAL DE LA RIOJA.",
    date: "2024",
  },
  {
    title: "BACHELOR OF PSYCOLOGY.",
    location: "CORDOBA, ARGENTINA",
    site:
      "UNC - UNIVERSIDAD NACIONAL DE CORDOBA.",
    date: "2016 - 2018",
  },
  {
    title: "FULL-STACK DEVELOPER.",
    location: "BSAS - ARGENTINA",
    site:
      "CODO A CODO 2.0.",
    date: "2023",
  },
]

export const projectsData = [
  {
    title: "RUN THE CODE",
    description:
      "I worked as a full-stack developer on this startup project for 2 months. A sneaker store e-commerce.",
    tags: ["React", "Typescript", "TailwindCSS", "Node.js", "Express", "MongoDB"],
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

export const colors = [
  "#DBACFF",
  "#DAE5E8",
  "#008F64",
  "#FFFFFF",
  "#E24848",
  "#FFBABA",
  "#620FCB",
  "#0047FF",
  "#FFFFFF",
  "#DAE5E8",
  "#DBACFF",
  "#E24848",
  "#008F64",
  "#7DCDFA",
  "#620FCB",
  "#DAE5E8",
  "#DAF67C",
  "#C49F55",
  "#ADEBB2",
  "#7E6EEE",
];

export const textToRender = [
  { text: "I'VE", hover: "hover:text-white" },
  { text: "WORK", hover: "hover:text-white" },
  { text: "WITH", hover: "hover:text-white" },
  { text: "REACT", hover: "hover:text-green" },
  { text: "/", hover: "" },
  { text: "NEXT.JS", hover: "hover:text-pink" },
  { text: "/", hover: "" },
  { text: "LIT", hover: "hover:text-cyan" },
  { text: "ELEMENTS", hover: "hover:text-cyan" },
  { text: "/", hover: "" },
  { text: "WEB", hover: "hover:text-[#E24848]" },
  { text: "COMPONENTS", hover: "hover:text-[#E24848]" },
  { text: "/", hover: "" },
  { text: "TYPESCRIPT", hover: "hover:text-[#620fcb]" },
  { text: "/", hover: "" },
  { text: "TAILWINDCSS", hover: "hover:text-blue-400" },
  { text: "/", hover: "" },
  { text: "SASS", hover: "hover:text-yellow-400" },
  { text: "/", hover: "" },
  { text: "NODE.JS", hover: "hover:text-fuchsia-600" },
  { text: "/", hover: "" },
  { text: "EXPRESS", hover: "hover:text-green" },
  { text: "/", hover: "" },
  { text: "MONGODB", hover: "hover:text-cyan" },
  { text: "/", hover: "" },
  { text: "FRAMER", hover: "hover:text-lime-500" },
  { text: "MOTION", hover: "hover:text-lime-500" },
  { text: "/", hover: "" },
  { text: "GIT", hover: "hover:text-violet-600" }
];