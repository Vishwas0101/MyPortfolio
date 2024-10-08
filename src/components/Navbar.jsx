import logo from "../assets/vs-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className="w-32 mx-2" />
        </div>
        <div className="m-8 flex items-center gap-4 justify-center text-2xl">
          <a href="https://www.linkedin.com/in/vishwas-sankpal-8542a121b/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Vishwas0101">
            {" "}
            <FaGithub />
          </a>
          <a href="#">
            {" "}
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
