import Link from "next/link";
import {
  FaHome,
  FaLinkedinIn,
  FaProjectDiagram,
  FaRProject,
  FaToolbox,
  FaTools,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import EmailClipboard from "./EmailClipboard";
function Navbar() {
  return (
    <div className="w-full sm:w-3/4 bg-[#1B1B1B] m-auto text-[#9C9C9C] rounded-b-lg py-8 flex justify-around items-center px-4 md:px-10 gap-5 flex-col md:flex-row">
      <ul className="flex gap-10 md:justify-start justify-center w-full border-b-2 md:border-none uppercase pb-2">
        <li>
          <Link className="hover:text-white flex items-center gap-2" href="#">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white flex items-center gap-2"
            href="#skills"
          >
            <FaToolbox />
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white flex items-center gap-2"
            href="#projects"
          >
            <FaProjectDiagram />
            Projects
          </Link>
        </li>
      </ul>
      <div className="text-center text-4xl flex gap-5 relative px-5">
        <a
          className="hover:text-white"
          href="https://www.linkedin.com/in/borislav-atanasov-60601624b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="hover:text-white"
          href="https://github.com/borislavDci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <EmailClipboard />
      </div>
    </div>
  );
}

export default Navbar;
