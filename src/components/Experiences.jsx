import { EXPERIENCES } from '../constants'

const Experiences = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Experience</h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/6">
                            <p className="mb-2 text-m font-bold tracking-wide text-dark_purple-500">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} - <span className="bg-gradient-to-r from-pomp_and_power-800 to-pink-300 bg-clip-text text-transparent">
                                    {experience.company}</span>
                            </h6>
                            <p className="mb-4 tracking-tight font-light">{experience.description}</p>
                            {experience.technologies.map((technology, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-pomp_and_power-700 px-2 py-1 text-sm font-medium text-dark_purple-300 hover:bg-pomp_and_power-800">{technology}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences
