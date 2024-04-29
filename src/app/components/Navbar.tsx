import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = ():JSX.Element => {
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light" dir="rtl">
            <ul className="flex items-center gap-4">
                <li className="text-xl">
                    <a href="https://github.com/JaviNGD" target="_blank" className="hover:text-blue-600"><FaGithub /></a>
                </li> 
                <li className="text-xl">
                    <a href="https://www.linkedin.com/in/javingd/" target="_blank" className="hover:text-blue-600"><FaLinkedin /></a>
                </li> 
            </ul>
        </nav>
    )
}