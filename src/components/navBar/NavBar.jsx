import React, { useEffect,useRef, useState } from "react";
import {Link} from "react-scroll"


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef=useRef(null);
  const handleMenuToggle = () => {
    setIsMenuOpen((prev)=>!prev);
  };

  const handleClickOutside = (event) => {
    if (!toggleRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    // Add event listener for clicks outside of the menu
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const sections=["home", "features", "experience", "skill", "portfolio", "materials", "about", "contact"];

  return (
    <nav className="fixed z-10 top-0 left-0 p-3 w-full bg-gray-900 shadow md:flex md:items-center md:justify-between w-full">
      <div
        ref={toggleRef}
        onClick={handleMenuToggle}
        className={`flex sm:justify-space-between text-xl cursor-pointer items-center text-white`}
      >
        <div className="sm:hidden flex flex-col justify-between items-center w-8 h-6">
          <div className="w-6 h-0.5 bg-white rounded"></div>
          <div className="w-6 h-0.5 bg-white rounded"></div>
          <div className="w-6 h-0.5 bg-white rounded"></div>
        </div>
        <img
          className="h-10 inline bg-gray-900 m-2"
          src="/logo.gif" 
          alt="logo"
        />
        Er. Manoj Bhatt
      </div>

      <ul ref={menuRef}
        className={`fixed md:flex md:items-center md:justify-center z-50 md:z-auto md:static absolute bg-gray-900 w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-300 ${
          isMenuOpen ? "top-[80px] opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
{sections.map((section)=>(
<li key={section} className="h-[25px] mx-4 py-6 md:py-0">
<Link
  to={section} smooth={true} duration={500} offset={-90}
  spy={true}
  activeClass="border-b-4 border-white"
  onClick={handleMenuToggle}
  className={` px-2 text-xl text-white hover:text-cyan-400 duration-500`}
>
{section.charAt(0).toUpperCase() + section.slice(1)}
</Link>
</li>
))}
      </ul>
    </nav>
  );
};

export default NavBar;
