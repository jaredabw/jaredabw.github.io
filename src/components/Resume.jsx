const Resume = () => {
    return (
      <div className="mx-auto mb-14 w-full xl:w-2/3 h-[600px] md:h-[800px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1200px]">
        <iframe
          src="https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/preview"
          className="w-full h-full border-none"
          title="Resume"
        />
        <p className="mt-4 text-sm text-center font-thin text-dutch_white-800">
          <a
            href="https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/export?format=pdf"
            className="hover:underline"
          >
            If the resume doesn&apos;t load, click here to download it.
          </a>
        </p>
      </div>
    );
  };
  
  export default Resume;
  