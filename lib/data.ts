// All the site's content lives here. Edit this file to update text, links, and projects.
// Anything marked TODO needs a real link or value from you.

export const profile = {
  name: "Jarrett Nobles",
  title: "Full-Stack Web Developer & SQL Database Specialist",
  tagline:
    "I build fast, secure web applications, from the database all the way to the user interface.",
  email: "noblesjarrett035@gmail.com",
  github: "https://github.com/JarrettNobles",
  linkedin: "", // TODO: add your LinkedIn URL
  upwork: "", // TODO: add your Upwork profile URL
  resume: "/Jarrett_Nobles_Resume.pdf", // put your resume PDF in the /public folder with this name
};

export const about = [
  "I'm a full-stack web developer who works mainly in Next.js, React, and TypeScript. My day job is managing SQL databases for oil company logistics, so the apps I build are backed by data that's clean, secure, and built to scale.",
  "My path into software was hands-on: I started out installing fiber and CAT6 cabling, moved into network administration and IT support, and now design databases and build web applications. That background means I understand how a system works at every layer and can troubleshoot problems that cross those boundaries.",
  "I hold a Master of Science in Computer Information Systems from Bellevue University (3.9 GPA) and a B.S. in Information Science & Technology from Mercer University.",
];

export const highlights = [
  { value: "1st", label: "2025 NASA Space Apps Challenge" },
  { value: "M.S.", label: "Computer Information Systems" },
  { value: "SQL", label: "Oil & gas logistics databases" },
];

export type Project = {
  name: string;
  summary: string;
  bullets: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string; // e.g. "/projects/fairwayiq.png" in the /public folder
};

export const projects: Project[] = [
  {
    name: "FairwayIQ",
    summary: "Full-stack golf statistics and analytics platform.",
    bullets: [
      "Authenticated user dashboards, automated handicap calculation, course management, and hole-by-hole round tracking",
      "PostgreSQL backend on Supabase with Row-Level Security, triggers, and stored functions",
      "Deployed to production on Vercel, with a companion iOS app in progress in Swift",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Recharts", "Swift"],
    liveUrl: "", // TODO: FairwayIQ live URL
    repoUrl: "", // TODO: FairwayIQ GitHub repo (leave blank if private)
  },
  {
    name: "Mercer University Alumni Map",
    summary: "Alumni tracking web app built on the LAMP stack.",
    bullets: [
      "Integrates the Google Maps JavaScript API so alumni can register, create profiles, and drop location pins",
      "MySQL schema and front end supporting filtering by major, graduation year, and employer",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Google Maps API", "HTML5", "CSS3"],
    repoUrl: "https://github.com/JarrettNobles/Alumni-Map-Project",
  },
  {
    name: "Coral Olson Photography",
    summary: "Responsive portfolio website for a professional photographer.",
    bullets: [
      "Minimalist, mobile-optimized design with interactive galleries and smooth navigation",
      "SEO metadata and a custom domain, deployed on GitHub Pages",
    ],
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "GitHub Pages"],
    liveUrl: "", // TODO: Coral Olson Photography URL
  },
  {
    name: "Senior Design 4-Year Planner",
    summary: "Course-planning website for university students.",
    bullets: [
      "Lets students choose a major and minor, then map out their classes across four years",
    ],
    stack: ["PHP", "MySQL", "JavaScript"],
    repoUrl: "https://github.com/JarrettNobles/Senior-Design-4-Year-Planner",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"] },
  { group: "Backend & Databases", items: ["Node.js", "SQL", "PostgreSQL", "MySQL", "Supabase", "PHP", "LAMP Stack"] },
  { group: "Languages", items: ["Python", "Java", "C#", "C++", "C", "Go"] },
  { group: "Cloud & Tools", items: ["Vercel", "Microsoft Azure", "Git", "GitHub", "Cisco IOS", "Cisco Meraki"] },
];
