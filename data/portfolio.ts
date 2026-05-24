export const profile = {
  name: "Chai Qi Qian",
  title: "Software Engineer",
  subtitle: "Full Stack Developer",
  location: "Kelantan, Malaysia",
  email: "qichaiqian27@outlook.com",
  phone: "+60129687207",
  resumeHref: "/ChaiQiQian.pdf",
  linkedInHref: "https://www.linkedin.com/in/chai-qi-qian-a5094520a/",
  instagramHref: "https://www.instagram.com/qiqian1227/",
  facebookHref: "https://www.facebook.com/qiqianchai/",
  summary:
    "I build reliable fintech products across frontend, backend, mobile, and cloud-supported delivery. My Data Science and AI background helps me debug carefully, reason through systems, and deliver maintainable software with strong quality habits.",
  heroPoints: [
    "Full stack fintech development with Spring Boot, Spring Batch, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, and Gradle.",
    "First-level support for live issues, including debugging, root-cause analysis, and practical solution proposals for the team.",
    "Deployment automation and access-control improvements that reduce repeated manual work and strengthen security awareness.",
    "AI-assisted engineering workflow for code review, debugging, documentation, and delivery confidence.",
  ],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const impactStats = [
  { value: "2024-now", label: "Fintech full stack developer" },
  { value: "3.81/4", label: "Computer Science CGPA" },
  { value: "1st Class", label: "Honours graduate" },
  { value: "3", label: "University hackathon builds" },
];

export const strengths = [
  "Reliable full stack delivery",
  "Live-issue debugging",
  "First-level support",
  "Spring Batch jobs",
  "Deployment automation",
  "Security awareness",
  "Project coordination",
  "CI/CD awareness",
  "AI-assisted quality checks",
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "iFast Capital Sdn. Bhd.",
    location: "Selangor, Malaysia",
    period: "Jun 2024 - Present",
    summary:
      "Building and maintaining fintech applications with privacy-safe full stack delivery across user interfaces, backend services, batch jobs, mobile support, security-aware repository access, and release workflows.",
    points: [
      "Develop and maintain fintech application features and Spring Batch jobs with Spring Boot, Angular, React Native, REST APIs, MySQL, Azure, Jenkins, Gradle, and Lombok.",
      "Enhance deployment workflows to automate repeated manual steps, reduce release friction, and improve consistency across delivery processes.",
      "Provide first-level support for live issues, debug problems under pressure, identify root causes, and propose practical solutions to the team.",
      "Improve security awareness around shared repositories by identifying public exposure risks, moving sensitive forked repositories to private access, and supporting token-based access control.",
      "Use AI-assisted engineering practices to strengthen code review, debugging, documentation, and quality checks while keeping developer judgment central.",
    ],
    stack: [
      "Spring Boot",
      "Spring Batch",
      "Angular",
      "React Native",
      "REST APIs",
      "MySQL",
      "Azure",
      "Jenkins",
      "Gradle",
      "Lombok",
      "Token-based access",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Salient Information Sdn. Bhd.",
    location: "Selangor, Malaysia",
    period: "Aug 2023 - Dec 2023",
    summary:
      "Delivered brand microsites and interactive experiences with responsive interfaces, accessibility improvements, and cross-device polish.",
    points: [
      "Developed brand microsites with Next.js and Node.js, improving accessibility and user engagement.",
      "Designed system flows and implemented responsive UI/UX in collaboration with product and design needs.",
      "Optimized microsite functionality and performance across devices.",
    ],
    stack: ["Next.js", "Node.js", "Figma", "Firebase", "Meta Spark Studio"],
  },
];

export const universityProjects = [
  {
    slug: "odyssey",
    title: "Odyssey Hackfest 2022",
    eyebrow: "University & Hackathon Project",
    result: "Special Award",
    route: "/Odessey",
    repoHref: "https://github.com/xuan0505/HealMe",
    image: "/c1.png",
    summary:
      "A mental health mobile app concept with community interaction, resources, meditation timer, and mood tracking.",
    problem:
      "Students and young adults need a gentle, accessible way to reflect on mental wellbeing and connect with supportive resources.",
    contribution:
      "Built the Flutter mobile experience and connected key application flows with Firebase-backed features.",
    stack: ["Flutter", "Dart", "Firebase"],
    highlights: [
      "Community interaction",
      "Mood tracking",
      "Meditation timer",
      "Mental health resources",
    ],
    screenshots: [
      "/o1.jpg",
      "/o2.jpg",
      "/o3.jpg",
      "/o4.jpg",
      "/o5.jpg",
      "/o6.jpg",
      "/o7.jpg",
      "/o8.jpg",
      "/o9.jpg",
      "/o10.jpg",
      "/o11.jpg",
      "/o12.jpg",
      "/o13.jpg",
      "/o14.jpg",
      "/o15.jpg",
      "/o16.jpg",
      "/o17.jpg",
    ],
  },
  {
    slug: "hilti",
    title: "HILTI IT Competition",
    eyebrow: "University & Hackathon Project",
    result: "First Runner-Up",
    route: "/Hilti",
    repoHref: "https://github.com/zerox555/Hilti_XXX",
    image: "/c2.png",
    summary:
      "An AR/VR mobile commerce and training concept for safer equipment learning and product exploration.",
    problem:
      "Equipment users need safer and more engaging ways to understand tools, training, and product usage before real-world operation.",
    contribution:
      "Helped build the mobile prototype and shape the AR/VR product experience using Flutter, Blender, and Unity.",
    stack: ["Flutter", "Dart", "Blender", "Unity"],
    highlights: [
      "VR training",
      "AR product viewing",
      "Product commerce",
      "IR 4.0 concept",
    ],
    screenshots: [
      "/h1.png",
      "/h2.png",
      "/h3.png",
      "/h4.png",
      "/h5.png",
      "/h6.png",
      "/h7.png",
      "/h8.png",
      "/h9.png",
      "/h10.png",
    ],
  },
  {
    slug: "rhb",
    title: "RHB ASEAN Hackathon",
    eyebrow: "University & Hackathon Project",
    result: "Participation",
    route: "/Rhb",
    repoHref: "https://github.com/zerox555/rhb_Youth-master",
    image: "/c3.png",
    summary:
      "A financial literacy MVP for young adults with mock investment, savings, gamification, and avatar customization.",
    problem:
      "Young adults often need a more approachable way to learn financial habits and explore investment concepts.",
    contribution:
      "Developed a Flutter MVP prototype focused on financial education and motivating repeat engagement.",
    stack: ["Flutter", "Dart"],
    highlights: [
      "Mock investment",
      "Savings goals",
      "Gamification",
      "Custom avatars",
    ],
    screenshots: ["/r1.jpg", "/r2.jpg"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "Node.js",
      "REST APIs",
      "MySQL",
      "Lombok",
    ],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Flutter", "Dart"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Jenkins",
      "Gradle",
      "Azure",
      "Deployment automation",
      "GitHub",
      "GitLab",
    ],
  },
  {
    title: "Security Awareness",
    skills: [
      "Repository privacy",
      "Access control",
      "Token-based access",
      "Exposure risk review",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "Data Science",
      "Machine Learning",
      "NLP",
      "AI-assisted engineering",
    ],
  },
  {
    title: "Product & Support",
    skills: [
      "Agile",
      "Project coordination",
      "Live-issue debugging",
      "First-level support",
      "Solution proposal",
    ],
  },
];

export const education = [
  {
    school: "Taylor's University",
    qualification: "Bachelor of Computer Science",
    period: "Mar 2021 - Mar 2024",
    details: [
      "CGPA 3.81/4",
      "First Class Honours",
      "Dean's List every semester",
      "Data Science & Artificial Intelligence",
    ],
  },
  {
    school: "Taylor's College",
    qualification: "Foundation in Computing",
    period: "Mar 2020 - Mar 2021",
    details: [
      "CGPA 3.97/4",
      "Graduated as Top Achiever",
      "Dean's List every semester",
    ],
  },
];
