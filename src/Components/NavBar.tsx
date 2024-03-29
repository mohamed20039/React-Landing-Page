import { close, logo, menu } from "../assets";
import { navLinks } from "../Constants";
const NavBar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
    </nav>
  );
};

export default NavBar;
