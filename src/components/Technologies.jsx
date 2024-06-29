import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'


const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <FaPython className="text-7xl text-yellow-300"/>
        </div>
        <div className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <FaHtml5 className="text-7xl text-orange-500"/>
        </div>
        <div className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <RiReactjsLine className="text-7xl text-cyan-300"/>
        </div>
        <div className="rounded-3xl border-4 border-pomp_and_power-300 p-4">
            <FaNodeJs className="text-7xl text-green-400"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
