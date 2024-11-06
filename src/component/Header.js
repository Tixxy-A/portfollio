import logo from "./logo.jpg";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { FaGithub,FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <nav className="flex mb-3 items-center justify-between py-8 px-20">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} className="size-20 rounded-full" alt="fuck" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8">
        <a href="https://github.com/Tixxy-A" target="_blank" rel="noreferrer"><FaGithub size={22}/></a>
        <FaInstagram size={22}/>
        <FaXTwitter size={22}/>
        <a href="https://www.linkedin.com/in/anuj-raut-63a2a722a/" target="_blank" rel="noreferrer"><FaLinkedin size={22}/></a>
      </div>
    </nav>
  );
}

export default Header;
