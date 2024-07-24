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
        <FaGithub size={22}/>
        <FaInstagram size={22}/>
        <FaXTwitter size={22}/>
        <FaLinkedin size={22}/>
      </div>
    </nav>
  );
}

export default Header;
