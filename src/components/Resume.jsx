import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="mb-4 text-center text-4xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      <div className="mx-auto mb-12 w-full xl:w-2/3 h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1200px]">
        <motion.p
          className="mb-8 text-center font-thin text-dutch_white-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/export?format=pdf"
            className="hover:underline"
          >
            Click here to download.
          </a>
        </motion.p>

        <iframe
          src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/export?format=pdf"
          className="w-full h-full border-none"
          title="Resume"
        />
      </div>
    </div>
  );
};

export default Resume;
