import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="mb-8 text-center text-4xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      <div className="mx-auto mb-14 w-full xl:w-2/3 h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1200px]">
        <iframe
          src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/export?format=pdf"
          className="w-full h-full border-none"
          title="Resume"
        />
        <p className="mt-4 text-sm text-center font-thin text-dutch_white-800">
          <a
            href="https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/export?format=pdf"
            className="hover:underline"
          >
            If the resume isn&apos;t formatted properly, click here to download
            it.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;
