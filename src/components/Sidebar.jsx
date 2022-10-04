import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri"
import { links } from "../assets/constants";
import { logo } from "../assets";
import { useState } from "react";

const NavLinks=()=> (
    <div className="mt-10">
      {links.map((item)=>(
        <NavLink
        key={item.name}
        to={item.to}
        className='flex flex-row justify-starts items-center my-8 text-sm
        font-medium text-gray-400 hover:text-cyan-400'
        >
          {item.name}
        </NavLink>
        ))}
    </div>
  );




const Sidebar = () => {
  const[mobileMenuOpen, setMobileMenuOpen] = useState(false);// in case we are in mobile
  // we have to know whether the mobile sidebar is already open

  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] 
    py-10 px-4 bg-[#191624]">
      <img src={logo} atl="logo" className="w-full h-14 object-contain"/>
      <NavLinks/>
    </div>
    </>
  )

};

export default Sidebar;
