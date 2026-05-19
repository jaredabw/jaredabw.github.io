import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <FaPython className="text-7xl text-yellow-300"/>
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <FaHtml5 className="text-7xl text-orange-500"/>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <RiReactjsLine className="text-7xl text-cyan-300"/>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <FaNodeJs className="text-7xl text-green-400"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
