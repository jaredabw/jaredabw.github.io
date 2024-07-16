import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi! I am a Computer Science student at Monash University. I am passionate about software development and computer science, with a focus on web development and Python programming. I am always eager to learn new technologies and improve my skills.`;

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
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website (this one!) showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Framer Motion"],
  },
  {
    title: "Discord Bot",
    image: project1,
    description:
      "A Discord bot that provides utility commands for a popular Discord game. Features include game statistics, logging events, reminders, generation of colours. Used by thousands of users.",
    technologies: ["Discord.py"],
  },
  {
    title: "Spellcast/Big Boggle Solver",
    image: project2,
    description:
      "A program to solve Discord's Spellcast or Big Boggle game. Finds the best possible word in a random 5x5 grid of letters. Uses computer vision and OCR. Generates a video demonstrating all solutions.",
    technologies: ["Python", "OpenCV"],
  },
  {
    title: "Todo List",
    image: project4,
    description:
      "A basic todo list application with features like task creation, deletion, and completion tracking.",
    technologies: ["HTML", "CSS", "React", "Vite"],
  },
  {
    title: "Sudoku",
    image: project2,
    description:
      "Implemented Sudoku in the Windows console using Python Curses.",
    technologies: ["Python", "Curses"],
  },
];