import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineCloseCircle as GrClose, AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall, FiInfo } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ show, handleSideBar }) => {
  return (
    <div className={`"md:w-full text-white " ${show ? "sidebar active" : "sidebar"}`}>
      <div className="flex items-center justify-center">
        <img src={logo} alt="" className="logo" />
        <ul className="h-4/5 flex flex-col items-center justify-evenly  text-center">
          <li>
            <Link to="/" className="flex flex-row gap-3 items-center">
              <AiOutlineHome className="block " size={"2rem"} />
              <span className="hidden md:block text-white"> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex flex-row gap-3 items-center">
              <FiInfo className="block " size={"2rem"} />
              <span className="hidden md:block"> About us</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex flex-row gap-3 items-center">
              <FiPhoneCall className="block  " size={"2rem"} />
              <span className="hidden md:block"> Contact Us</span>
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="flex flex-row gap-3 items-center">
              <MdOutlinePrivacyTip className="block " size={"2rem"} />
              <span className="hidden md:block"> Privacy Policy</span>
            </Link>
          </li>
          <li>
            <Link to="/terms" className="flex flex-row gap-3 items-center">
              <FaHandshake className="block " size={"2rem"} />
              <span className="hidden md:block"> Terms and Condition</span>
            </Link>
          </li>
          <li className=" hover:bg-slate-600">
            <GrClose
              onClick={handleSideBar}
              size={"1.5rem"}
              className="hover:ring-black"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
