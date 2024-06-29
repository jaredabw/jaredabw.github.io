import { HERO_CONTENT } from '../constants/index.js'
import profile from '../assets/profile.png'

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 xl:text-8xl ">Jared Wigley</h1>
            <span className="pt-10 bg-gradient-to-r from-dutch_white-500 from-5% to-95% to-dark_purple-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent">Software Developer</span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center bg-pomp_and_power-800 rounded-3xl">
            <img className=""src={profile} alt="Picture of Jared Wigley"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
