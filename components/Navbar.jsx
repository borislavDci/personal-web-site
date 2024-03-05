import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Navbar() {
  return (
    <div className="w-3/4 bg-[#1B1B1B] m-auto text-[#9C9C9C] rounded-b-lg py-8 flex justify-around items-center px-4 md:px-10 gap-5 flex-col md:flex-row">
      <ul className="flex gap-10 md:justify-start justify-center w-full">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <div className="text-center text-4xl flex gap-5">
        <FaLinkedinIn />
        <FaGithub />
        <MdEmail />
      </div>
    </div>
  );
}

export default Navbar;
