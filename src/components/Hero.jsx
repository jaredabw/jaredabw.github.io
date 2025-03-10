import { HERO_CONTENT } from "../constants/";
import profile from "../assets/profile.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  const [showArrow, setShowArrow] = useState(true);

  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 xl:text-8xl "
            >
              Jared Wigley
            </motion.h1>
            <motion.div
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag={true}
              dragConstraints={{ left: -100, right: 100, top: -20, bottom: 20 }}
              onMouseOver={() => setShowArrow(false)}
              className="pt-10 pr-20 pl-20 lg:pl-0 bg-gradient-to-r from-dutch_white-500 from-5% to-95% to-dark_purple-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent relative"
            >
              Eager to learn
              <AnimatePresence>
                {showArrow && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-dutch_white-500 scale-[0.15] -top-[32rem] -left-80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1080"
                      height="1080"
                      className="fill-dutch_white-700"
                    >
                      <path d="M280.594 374.715c3.239 2.653 6.33 5.445 9.406 8.285l2.012 1.766C305.226 396.963 312.118 413.797 319 430l3.375-.656c19.495-3.627 37.067-4.04 54.625 6.656 11.55 8.225 19.424 21.255 27 33 5.983-.6 11.172-2.35 16.813-4.375 23.097-7.94 48.628-10.468 71.457-.055 12.818 6.712 23.185 17.141 30.73 29.43l1.348 2.191c1.813 3.24 2.642 5.3 2.715 9.059-1.323 3.423-3.173 4.58-6.063 6.75l-1.504-3.184c-3.789-7.887-7.47-15.362-13.496-21.816l-1.91-2.07c-6.35-6.244-13.911-9.73-22.09-12.93l-2.79-1.102c-18.844-5.948-40.667-2.459-57.96 6.227A512.867 512.867 0 0 0 414 481c-1.331.67-2.664 1.339-4 2l.656 3.75c3.09 18.739 6.774 42.373-3.633 59.504-2.515 3.414-5.224 5.847-9.023 7.746-4.796.47-8.25.028-12.367-2.621-6.442-5.44-9.04-14.174-9.818-22.308-1.105-16.809 3.319-32.8 14.478-45.727L392 481c-1.86-10.658-10.62-23.665-18.918-30.352-11.308-7.862-21.666-12.157-35.707-9.96-4.507.937-8.48 2.467-12.598 4.507C323 446 323 446 321 446l.176 3.348c.61 17.254-1.491 42.842-13.176 56.652-4.123 3.416-8.757 4.13-14 4-4.588-1.412-7.277-3.756-9.895-7.805-4.92-9.77-4.997-20.402-2.453-30.882 3.823-10.994 12.49-19.745 20.38-28.036 2.154-2.2 2.154-2.2 2.968-5.277-2.851-14.767-9.751-26.391-19-38l-2.375-3.188c-14.457-15.489-33.43-24.395-54.484-26.035-22.79-.708-45.416 8.866-62.078 24.16-5.215 4.964-9.869 10.201-14.063 16.063l-2.32 3.219c-21.566 30.717-35.671 69.067-35.883 106.855l-.021 2.543c-.017 2.69-.023 5.38-.026 8.07l-.005 2.768c-.002 13.574-.001 27.28 3.255 40.545l2 1c1.612-3.455 3.214-6.914 4.813-10.375l1.49-3.224c2.674-5.829 5.257-11.68 7.7-17.608.483-1.167.964-2.334 1.46-3.536a740.15 740.15 0 0 0 2.743-6.788c4.042-9.86 4.042-9.86 8.794-13.469 3.313-.813 3.313-.813 6-1-.507 7.579-2.455 14.054-5 21.188l-1.288 3.658c-1.255 3.55-2.529 7.095-3.806 10.638a3997.03 3997.03 0 0 0-2.963 8.268 3138.784 3138.784 0 0 1-5.621 15.563 1783.97 1783.97 0 0 0-2.249 6.226c-1.06 2.948-2.137 5.89-3.218 8.83l-.952 2.677c-2.118 5.693-4.46 11.277-10.216 14.077-6.403-.298-11.377-4.33-15.555-8.895l-1.57-1.793-1.694-1.88a314.74 314.74 0 0 1-11.614-13.784 168.175 168.175 0 0 0-5.04-5.921C76.173 572.036 71.58 565.482 68 557l-1.133-2.594c-1.695-4.703-1.57-8.874.508-13.406L69 539h2c1.306 1.49 1.306 1.49 2.8 3.594l1.694 2.35 1.819 2.556c4.744 6.546 9.55 13.017 14.624 19.313l1.535 1.933c3.465 4.26 7.25 7.815 11.528 11.254 1.46-2.92.631-4.892.04-8.082-.225-1.243-.45-2.487-.68-3.768l-.735-3.962c-9.872-53.241 1.267-109.467 31.569-154.657 17.866-25.782 42.358-46.03 73.681-52.344 24.861-4.463 51.713 1.87 71.719 17.528zm21.531 87.723c-5.754 5.973-8.3 11.288-8.563 19.625.168 5.237 1.25 9.198 3.438 13.937h3c6.983-12.583 8.375-22.714 8-37-2.93 0-3.798 1.427-5.875 3.438zM397 496c-6.832 8.221-9.598 16.05-9.363 26.672.724 6.63 3.347 12.445 6.363 18.328h2c6.26-15.08 5.386-29.217 3-45h-2z" />
                      <path d="M631.04 554.07c10.597 7.264 13.049 18.097 15.651 30.125 2.64 14.727 2.676 27.812-4.504 41.18-4.698 5.638-10.3 9.13-17.69 9.879-6.585.284-11.937-.577-17.497-4.254-1.978-1.9-3.41-3.743-5-6l2-5c3.86-.368 5.562-.302 8.813 1.938 4.016 2.598 7.422 3.326 12.187 3.062 2.89-1.298 2.89-1.298 5-3h2l.813-1.625C634 618 634 618 635.563 615.437c2.578-6.165 2.497-12.82 2.437-19.437l-1.645 1.059-2.168 1.379-2.144 1.37c-4.2 2.45-8.297 2.671-13.043 2.192-5.468-1.859-8.886-5.25-12-10-3.414-7.121-4.052-13.859-1.938-21.438 2.475-6.684 6.616-12.638 12.938-16.125 4.544-1.878 8.473-2.763 13.04-.367zM617 568c-2.972 5.33-3.806 10.017-3 16 1.502 4.055 3 7.111 7 9 4.116 0 6.212-.297 9.313-3.063 3.421-5.956 4.188-10.023 2.562-16.625-1.302-4.112-2.513-7.444-5.875-10.312-4.936-1.266-7.007 1.298-10 5zM459.688 544.625l2.413.03c10.196.268 19.126 2.39 26.899 9.345 9.287 10.79 10.97 24.243 10 38-1.482 7.378-3.951 14.244-10 19-10.229 6.58-22.815 10.199-35 9-3.55-2.69-3.826-5.629-4.562-9.825-.919-6.66-1.451-13.352-2-20.05l-.381-4.473c-.246-2.887-.488-5.775-.726-8.664-.205-2.493-.42-4.984-.64-7.476-.466-5.276-.811-10.465-.753-15.762l.027-3.328L445 548c5.065-3.044 8.953-3.48 14.688-3.375zM454 555c-.273 9.34.418 18.342 1.6 27.585a950.9 950.9 0 0 1 .802 6.528c.867 7.052 1.88 13.983 3.598 20.887 8.299-.65 18.757-1.824 24.625-8.25 1.318-1.825 1.318-1.825 2.375-3.75l1.016-1.738c3.788-8.041 3.04-18.119.234-26.324-2.755-6.523-5.664-10.15-12.117-13.09-6.431-2.556-15.614-5.108-22.133-1.848zM737.93 542.281c8.598 7.823 11.447 20.76 12.227 31.974.096 2.334.143 4.66.155 6.995l.017 2.24c-.071 5.252-.071 5.252-2.329 7.51-2.5-.125-2.5-.125-5-1-1.879-2.94-2.357-5.599-2.71-9.035-.11-.97-.218-1.94-.33-2.939l-.335-3.088c-.877-7.47-1.838-14.218-4.855-21.145C734 552 734 552 734 550l-7 1c-3.385 8.056-3.258 15.224-3 23.875.076 2.601.14 5.203.188 7.805l.105 3.46C724 589 724 589 722.617 590.903 721 592 721 592 718.937 591.875 717 591 717 591 715 588a160.98 160.98 0 0 1-.938-8.438c-.85-13.803-.85-13.803-7.062-25.562-2.049-.48-2.049-.48-4.188-.25L699 554c-4.582 8.366-4.775 16.371-3 25.563 2.062 10.711 2.062 10.711-.5 14.875L694 596c-2.867-.573-3.861-.861-6-3-.506-2.313-.906-4.65-1.254-6.992l-.32-2.125a872.36 872.36 0 0 1-.658-4.474c-.324-2.242-.661-4.482-1-6.721-3.477-23.27-3.477-23.27-1.768-26.688 2.875-.125 2.875-.125 6 0l2 2 1.813-1.438c4.404-3.146 8.975-3.064 14.187-2.562 3.703 1.093 6.787 2.858 10 5l1.137-1.46c5.276-6.513 11.791-10.571 19.793-5.259z" />
                      <path d="M582 558.688c9.418 7.259 10.018 18.047 12.188 29.125l.542 2.75c1.766 9.336 1.766 9.336 1.27 13.437-3 2-3 2-5.047 1.879-2.593-1.167-3.062-2.374-4.203-4.942l-1.016-2.222L585 597l-1.39 1.46-1.86 1.915-1.828 1.898c-4.242 3.812-7.892 4.162-13.445 4.047-4.39-.567-7.167-2.653-9.852-6.07-1.686-6.071-.972-10.947 2.043-16.36 3.6-5.11 8.16-8.604 14.332-9.89 2.332-.075 4.669-.093 7 0-.27-2.437-.27-2.437-1-5-3.73-2.487-5.576-2.3-10-2-3.294.541-3.294.541-6 2-1.247 2.41-1.247 2.41-2 5-1.313 1.813-1.313 1.813-3 3-2.563.375-2.563.375-5 0-2-3-2-3-2-5.75 1.759-5.717 5.5-9.66 10.625-12.688 6.265-2.777 14.23-3.112 20.375.125zm-15.438 29.125c-2.037 2.852-1.873 4.76-1.562 8.187 2.17 1.32 2.17 1.32 5 2 3.341-.955 5.28-2.008 7.34-4.848 1.641-2.954 1.641-2.954 2.66-6.152-.82-2.23-.82-2.23-2-4-4.261 0-8.108 2.336-11.438 4.813z" />
                      <path d="M791.25 538.063c4.509 2.538 8.354 5.248 10.75 9.937.738 3.185.812 5.826 0 9-5.05 5.968-13.409 6.326-20.75 7.063-5.704.55-5.704.55-11.25 1.937 1.268 5.453 3.256 8.013 8 11 7.587 1.101 12.589-1.674 18.75-5.875L799 570c2.313.813 2.313.813 4 2 .29 2.766.29 2.766 0 6-5.688 5.89-12.925 9-21 9.313-6.725-.152-11.043-2.928-16-7.313-5.019-7.573-8.19-15.537-6.516-24.633 2.241-8.34 6.024-14.004 13.516-18.367 6.308-2.103 12.215-1.722 18.25 1.063zM773 549c-2.277 2.815-2.277 2.815-2 6 7.227.24 13.903-.655 21-2-.516-3.94-.516-3.94-3.125-6.813-6.404-2.645-10.61-1.472-15.875 2.813z" />
                      <path d="M535 563c4.277 3.382 6.311 6.844 8 12 .313 3.813.313 3.813 0 7l-2 2c-2.5-.188-2.5-.188-5-1-2.458-3.687-3.012-6.697-4-11-1.931-.043-1.931-.043-4 1-3.388 5.692-3.399 10.877-3.25 17.375l.016 2.71c.059 5.107.422 9.995 1.317 15.027C526 610 526 610 524.679 611.752 523 613 523 613 520.438 613c-2.438-1-2.438-1-3.504-2.973-1.267-4.106-1.76-8.21-2.309-12.465-1.025-7.478-2.603-14.344-4.836-21.554-1.098-4.186-1.153-7.709-.789-12.008 1-1 1-1 3.313-1.438 2.687.438 2.687.438 5 3.438l1.687 3 1.426-1.277 1.886-1.66 1.864-1.653c3.683-2.847 6.504-2.62 10.824-1.41zM818.125 506.125C820 507 820 507 822 509c.487 2.667.487 2.667.816 6.047.125 1.239.25 2.477.377 3.754l.37 3.949.38 3.809c1.116 11.37 2.188 22.76 2.245 34.191l.037 2.07c.005 1.728-.101 3.456-.225 5.18-2 2-2 2-5.125 2.125L818 570c-2.243-3.624-2.36-6.845-2.563-11.055l-.11-2.091c-.117-2.243-.222-4.486-.327-6.729-.153-3.084-.313-6.167-.477-9.25l-.121-2.31A250.587 250.587 0 0 0 813.289 525l-.336-3.055a269.462 269.462 0 0 0-.695-5.495c-.675-5.862-.675-5.862 1.57-9.028C816 506 816 506 818.125 506.125z" />
                      <path d="M821.313 576.75c3.687.25 3.687.25 6.125 1.438C829 580 829 580 829.5 582.5c-.5 2.5-.5 2.5-2.188 4.375-2.312 1.125-2.312 1.125-4.875 1-2.687-.965-3.872-1.486-5.437-3.875-.25-3.125-.25-3.125 0-6 1-1 1-1 4.313-1.25z" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
              dangerouslySetInnerHTML={{ __html: HERO_CONTENT }}
            ></motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center "
          >
            <img
              className="rounded-3xl"
              src={profile}
              alt="Picture of Jared Wigley"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
