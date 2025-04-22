import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaClipboardList,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
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
      <div className="m-6 mx-0 sm:mx-10 flex items-center justify-center gap-1 sm:gap-4 text-xl md:text-3xl text-dutch_white-700">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2"
          href="https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/preview"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaClipboardList />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2"
          href="https://www.linkedin.com/in/jared-wigley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2"
          href="https://github.com/jaredabw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2"
          href="https://www.instagram.com/jared_abw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          className="p-2"
          href="mailto:jabwigley@gmail.com"
        >
          <FaRegEnvelope />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
