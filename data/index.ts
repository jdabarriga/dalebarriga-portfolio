export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently looking for new opportunities",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ShopZone - Ecommerce App",
    des: "a sleek eCommerce app that makes online shopping effortless with smart recommendations, secure checkout, and a seamless user experience using React.js",
    img: "/shopzone.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg","/mongodb.svg","/rapidapi.svg","/stripe.svg"],
    link: "/shopzone-app.netlify.app",
  },
  {
    id: 2,
    title: "Lyriks - Music App",
    des: "a music app that lets you search and play songs instantly, delivering a seamless listening experience powered by RapidAPI",
    img: "/lyriks.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/rapidapi.svg","/fm.svg"],
    link: "/https://lyrik-appv3.netlify.app/",
  },
  {
    id: 3,
    title: "Raven",
    des: "a Java code visualization tool created with React.js and custom lexer/parser, which provides a comprehensive overview of the project's structure and provide a high-level perspective on the codebase",
    img: "/raven.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/electron.svg"],
    link: "https://ravendemo-jdab.netlify.app/",
  }
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend/Backend Developer Raven",
    desc: "Developed front-end components using React.js and developed custom lexer and parser, enhancing interactivity and parsing.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web App Dev - ShopZone",
    desc: "Designed and developed web app, utilizing MongoDB and implemented fully usable checkout using Stripe.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/jdabarriga"
  },
  {
    id: 2,
    img: "/gmail.svg",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=jdabarriga@gmail.com&su=&body&tf=cm"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/dale-barriga-b7a1b626b/"
  },
];