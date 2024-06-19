import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-0 md:py-6">
        <div className="flex flex-shrink-0 items-center text-dutch_white-700 text-xl md:text-4xl font-extrabold">
            <a className="hidden px-5 py-2 md:flex" href="/">jaredabw.xyz</a>
            <a className="flex px-5 py-2 md:hidden" href="/">jaredabw</a>
        </div>
        <div className="m-6 mx-0 sm:mx-10 flex items-center justify-center gap-1 sm:gap-4 text-xl md:text-3xl text-dutch_white-700">
            <a className="p-2" href="https://www.linkedin.com/in/jared-wigley-91921a303/">
                <FaLinkedin />
            </a>
            <a className="p-2" href="https://github.com/jaredabw">
                <FaGithub />
            </a>
            <a className="p-2" href="https://www.instagram.com/jared_abw/">
                <FaInstagram />
            </a>
            <a className="p-2" href="https://discord.com/users/355938178265251842">
                <FaDiscord />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
