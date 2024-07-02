import { HERO_CONTENT } from '../constants/'
import profile from '../assets/profile.png'
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  }
})

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 xl:text-8xl ">Jared Wigley</motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag={true}
              dragConstraints={{ left: -100, right: 100, top: -20, bottom: 20 }}
              className="pt-10 bg-gradient-to-r from-dutch_white-500 from-5% to-95% to-dark_purple-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent">Software Developer</motion.span>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5, delay:0.6}}
            className="flex justify-center bg-pomp_and_power-800 rounded-3xl">
            <img
              src={profile}
              alt="Picture of Jared Wigley"/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
