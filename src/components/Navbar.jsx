import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaClipboardList,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const tooltipStyle = {
    position: "absolute",
    bottom: "-35px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    padding: "1px 10px",
    borderRadius: "10px",
    fontSize: "14px",
    visibility: "hidden",
    opacity: "0",
    transition: "opacity 0.3s ease",
  };

  const showTooltipStyle = {
    visibility: "visible",
    opacity: "1",
  };

  return (
    <nav className="mb-8 flex items-center justify-between py-0 md:py-6">
      <div className="flex flex-shrink-0 items-center text-xl md:text-4xl font-extrabold">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="hidden md:flex py-2"
          href="/"
        >
          jaredabw.xyz
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="flex md:hidden py-2"
          href="/"
        >
          jaredabw
        </motion.a>
      </div>
      <div className="m-6 mx-0 sm:mx-10 flex items-center justify-center gap-1 sm:gap-4 text-xl md:text-3xl text-dutch_white-700 relative">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2 relative"
          href="https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/preview"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink("resume")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <FaClipboardList />
          <span
            style={{
              ...tooltipStyle,
              ...(hoveredLink === "resume" ? showTooltipStyle : {}),
            }}
          >
            Resume
          </span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2 relative"
          href="https://www.linkedin.com/in/jared-wigley"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink("linkedin")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <FaLinkedin />
          <span
            style={{
              ...tooltipStyle,
              ...(hoveredLink === "linkedin" ? showTooltipStyle : {}),
            }}
          >
            LinkedIn
          </span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2 relative"
          href="https://github.com/jaredabw"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink("github")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <FaGithub />
          <span
            style={{
              ...tooltipStyle,
              ...(hoveredLink === "github" ? showTooltipStyle : {}),
            }}
          >
            GitHub
          </span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2 relative"
          href="https://www.instagram.com/jared_abw"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink("instagram")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <FaInstagram />
          <span
            style={{
              ...tooltipStyle,
              ...(hoveredLink === "instagram" ? showTooltipStyle : {}),
            }}
          >
            Instagram
          </span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2 relative"
          href="mailto:jabwigley@gmail.com"
          onMouseEnter={() => setHoveredLink("email")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <FaRegEnvelope />
          <span
            style={{
              ...tooltipStyle,
              ...(hoveredLink === "email" ? showTooltipStyle : {}),
            }}
          >
            Email
          </span>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
