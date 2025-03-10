import wikipediagame from "../assets/projects/wikipediagame.png";
import portfolio from "../assets/projects/portfolio.png";
import calendar from "../assets/projects/calendar.png";
import spellcast from "../assets/projects/spellcast.png";
import todolist from "../assets/projects/todolist.png";
import mudaetracker from "../assets/projects/mudaetracker.png";

export const HERO_CONTENT = `Hi! I am a Computer Science student at Monash University. I am passionate about software development and computer science, with a focus on web development and Python programming. I am always eager to learn new technologies and improve my skills.
<br><br>
ADD MORE CONTENT`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly applications. My journey in programming began with a deep curiosity for how things work, and it has led me to studying computer science. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies, playing games, and spending time with my family and friends.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Dec 2026",
    role: "Bachelor of Computer Science",
    company: "Monash University",
    description: `Specialising in Advanced Computer Science, minoring in Web Development. Gained a solid foundation in computer science theory and practical skills in software development. Learnt to work effectively in teams and communicate technical concepts effectively.`,
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "Jan 2022 - Nov 2022",
    role: "VCE Software Development",
    company: "Mazenod College",
    description: `Created a software solution tracking industrial properties for a real client. Utilised the Agile development model for tracking tasks and deadlines. Gained experience in software development methodologies and project management. Achieved top 1% in Victoria (47 ss).`,
    technologies: ["Visual Basic", "Visual Studio", "GanttProject"],
  },
  {
    year: "Before 2021",
    role: "Python Fundamentals",
    company: "Online",
    description: `Self-taught Python programming language. Learnt the basics of Python programming, including data types, control structures, functions, and file handling. Developed a strong basis in programming and problem-solving skills.`,
    technologies: ["Python"],
  },
  {
    year: "Before 2019",
    role: "Introduction to Programming, Robotics, Microcontrollers",
    company: "Mazenod College; others",
    description: `Introduced to programming concepts and robotics. Learnt to program in Scratch and Mindstorms EV3. Developed problem-solving skills and logical thinking. Gained experience in working with hardware and software. Created games using the Micro:bit and Raspberry Pi.`,
    technologies: ["Scratch", "Mindstorms EV3", "Micro:bit", "Raspberry Pi"],
  },
];

export const PROJECTS = [
  {
    title: "Wikipedia Game for AniList",
    image: wikipediagame,
    description:
      "An online game challenging players to navigate AniList pages in the fewest clicks possible. Built with React and TailwindCSS, using GraphQL for real-time API retrieval.",
    technologies: ["React", "React Router", "TailwindCSS", "Vite", "GraphQL"],
  },
  {
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A webpage (this one!) showcasing my portfolio and personal projects; built with Vite, React and TailwindCSS. Utilises animations and transitions using Framer Motion.",
    technologies: ["React", "TailwindCSS", "Vite", "Framer Motion"],
  },
  {
    title: "Calendar Modifier",
    image: calendar,
    description:
      "A FastAPI web service to process .ics calendar files, dynamically rewriting event names for seamless Google Calendar integration via custom URLs. Hosted 24/7 on Vercel.",
    technologies: ["Python", "FastAPI", "Vercel"],
  },
  {
    title: "Spellcast Solver",
    image: spellcast,
    description:
      "A Python script to find the longest word in a 5x5 grid of letters, using image recognition and OCR from OpenCV and Pytesseract. Utilises FFmpeg to generate an animated video solution.",
    technologies: ["Python", "OpenCV", "Tesseract"],
  },
  {
    title: "Mudae Tracker Bot",
    image: mudaetracker,
    description:
      "A Discord bot that provides utility commands for a popular Discord game, serving 11,000+ users across multiple communities. Features include game statistics, reminders and generation of colours.",
    technologies: ["Python", "Discord.py"],
  },
  {
    title: "Todo List",
    image: todolist,
    description:
      "A basic todo list application with features like task creation, deletion, and completion tracking.",
    technologies: ["HTML", "CSS", "React"],
  },
];