const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    company: "Tata Technologies Ltd.",
    title: "Frontend Developer",
    date: "April 2025 – Present",
    review:
      "Vivek demonstrated exceptional technical ownership while developing the QRT Portal from scratch. His focus on performance, data security, and clean UI elevated the overall product quality.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    projects: [
      {
        name: "QRT Portal",
        techStack: ["React.js 17", "Redux", "ShadCN", "ContextAPI", "Gmaps", "Axios", "CryptoJS"],
        highlights: [
          "Architected and developed the QRT Portal from inception, improving rendering speed by 30% and UI consistency.",
          "Implemented global state management with Redux and Context API.",
          "Integrated Google Maps API to enhance geolocation accuracy and reduce user task time by 25%.",
          "Secured API communication with CryptoJS and Axios, reducing security vulnerabilities by 40%.",
        ],
      },
    ],
    responsibilities: [
      "Developed and maintained modular frontend architecture for scalable enterprise systems.",
      "Collaborated with design and backend teams for cohesive project delivery.",
      "Ensured high performance, secure communication, and efficient state management.",
    ],
  },
  {
    company: "Royal Cyber Pvt. Ltd.",
    title: "Software Engineer (Frontend Developer)",
    date: "June 2022 – March 2025",
    review:
      "Vivek’s work at Royal Cyber was instrumental in improving app performance and scalability across multiple projects. His deep understanding of React and Next.js helped deliver impactful results.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    projects: [
      {
        name: "Acima.com",
        techStack: ["Next.js 14.2.6", "Redux", "Material UI", "ContextAPI", "Git", "Jira", "Axios", "AOS"],
        highlights: [
          "Spearheaded the development of Acima.com, improving UI responsiveness by 30% and performance by 25%.",
          "Implemented Context API and Redux for efficient state management and session persistence.",
          "Enhanced SEO and site performance (40% faster loads) using next-sitemap and optimized images.",
          "Boosted code quality through Cypress/Jest testing, achieving 35% coverage gain and 20% fewer defects.",
        ],
      },
      {
        name: "Augusta Active",
        techStack: ["React.js", "Redux Toolkit", "Material UI", "Git", "Jira", "i18next", "GraphQL"],
        highlights: [
          "Developed a responsive e-commerce platform using React.js and Material UI, increasing efficiency by 40%.",
          "Integrated i18next for multilingual support and GraphQL for data fetching.",
          "Improved test coverage by 30% and reduced defects by 20% through Cypress/Jest testing.",
        ],
      },
    ],
    responsibilities: [
      "Developed and optimized multiple large-scale React and Next.js applications.",
      "Implemented localization, testing, and deployment pipelines for smoother CI/CD workflows.",
      "Collaborated with design teams to maintain pixel-perfect, accessible, and responsive UIs.",
    ],
  },
  {
    company: "Personal Projects",
    title: "Frontend Developer (Independent)",
    date: "2021 – 2022",
    review:
      "Vivek’s independent projects showcase a strong command of modern web technologies and UI/UX design. His consistent focus on optimization and user experience stands out.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    projects: [
      {
        name: "ReactEstate",
        techStack: ["React.js", "Firebase", "React Leaflet", "SwiperJs"],
        highlights: [
          "Developed a real estate platform with Firebase authentication and map integration.",
          "Implemented smooth image sliders and geolocation-based property listings.",
        ],
      },
      {
        name: "TrelloTask (Jira Clone)",
        techStack: ["Next.js", "NestJS", "MongoDB", "JWT", "TailwindCSS"],
        highlights: [
          "Built a full-stack task management app inspired by Jira, featuring drag-and-drop task boards.",
          "Used JWT authentication and MongoDB for secure and persistent user sessions.",
        ],
      },
      {
        name: "Mini Cart & Split Your Expense",
        techStack: ["React.js", "Redux Toolkit", "Lazy Loading", "React Router DOM"],
        highlights: [
          "Created interactive apps demonstrating complex state management and performance optimization.",
          "Implemented lazy loading and Redux Thunk for smooth user experience.",
        ],
      },
    ],
    responsibilities: [
      "Designed and deployed responsive, high-performance web apps.",
      "Experimented with new technologies and libraries to enhance frontend capabilities.",
      "Deployed apps on Vercel and Firebase for real-world performance testing.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};