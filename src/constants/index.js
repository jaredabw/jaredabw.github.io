import wikipediagame from "../assets/projects/wikipediagame.png";
import portfolio from "../assets/projects/portfolio.png";
import calendar from "../assets/projects/calendar.png";
import spellcast from "../assets/projects/spellcast.png";
import todolist from "../assets/projects/todolist.png";
import mudaetracker from "../assets/projects/mudaetracker.png";

export const HERO_CONTENT = `Hey! Welcome to my personal webpage. There's not much here, but you can find my resume and other links above.`;
export const HERO_CONTENT_2 = `My journey in software engineering began with a deep curiosity for how things work, and how things could be made more efficient. This curiosity led me to study computer science, where I discovered my passion for creating innovative solutions. I thrive in collaborative environments and enjoy solving complex problems to deliver quality solutions. Outside of coding, I enjoy exploring nature, travelling, and spending time with my family and friends.`;

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