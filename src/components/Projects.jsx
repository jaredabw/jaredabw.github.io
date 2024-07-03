import { PROJECTS } from '../constants'

const Projects = () => {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/6">
                            <img
                                src={project.image}
                                alt={project.title}
                                width={150}
                                height={150}
                                className="mb-6 rounded-xl"
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className="mb-4 tracking-tight font-light">{project.description}</p>
                            {project.technologies.map((technology, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-pomp_and_power-700 px-2 py-1 text-sm font-medium text-dark_purple-300 hover:bg-pomp_and_power-800">{technology}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects