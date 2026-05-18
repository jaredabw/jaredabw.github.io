import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const RESUME_URL =
  "https://docs.google.com/document/d/1CRExXupOF9tGGhMHh5IcRmaRqq3KzzHLHjNxjdQesOU/export?format=pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(null);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = (e) => setColumns(e.matches ? 2 : 1);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const pageWidth =
    columns === 2 && width ? Math.floor((width - 16) / 2) : width;

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

      <div className="mx-auto mb-12 flex flex-col items-center">
        <motion.p
          className="mb-8 text-center font-thin text-dutch_white-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href={RESUME_URL} className="hover:underline">
            Click here to download.
          </a>
        </motion.p>

        <div ref={containerRef} className="w-full max-w-[794px] lg:max-w-[1640px]">
          <Document
            file="https://resume.jabwigley.workers.dev"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex items-center justify-center gap-2 py-16">
                <div className="w-2 h-2 rounded-full bg-dutch_white-700 animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 rounded-full bg-dutch_white-700 animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 rounded-full bg-dutch_white-700 animate-bounce" />
              </div>
            }
            error={
              <p className="text-center font-thin text-dutch_white-800">
                Failed to load.{" "}
                <a href={RESUME_URL} className="hover:underline">
                  Download instead.
                </a>
              </p>
            }
          >
            {numPages && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {Array.from({ length: numPages }, (_, i) => (
                  <div
                    key={i + 1}
                    className={
                      i === numPages - 1 && numPages % 2 !== 0
                        ? "lg:col-span-2 lg:justify-self-center"
                        : ""
                    }
                  >
                    <Page
                      pageNumber={i + 1}
                      width={pageWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </Document>
        </div>
      </div>
    </div>
  );
};

export default Resume;
