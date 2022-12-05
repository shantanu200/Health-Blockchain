import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { FiLogIn,FiLogOut } from "react-icons/fi";
import {AiFillHome,AiFillSetting} from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import {IoDocument} from "react-icons/io5";
import {BsChatSquareFill} from "react-icons/bs";
import {GiHealthNormal} from "react-icons/gi";
import userAvatar from "../../../Test/images/useravatar.jpg";


const Left_Nav = ({ profile,setStep }) => {
  const RenderHeader = () => {
    return (
      <h1 className="flex items-center text-2xl p-4 font-bold uppercase border-b-2 border-white ">
        <MdHealthAndSafety className="mr-4" />
        E-Health
      </h1>
    );
  };

  const RenderProfile = () => {
    return (
      <div className="my-8 mx-4 flex items-center flex-col">
        {profile ? (
          <>
            <img alt="" src={userAvatar} className="w-24 h-24 rounded-full" />
            <span className="my-4 text-lg uppercase">
              {profile[0].firstname + " " + profile[0].lastname}
            </span>
          </>
        ) : (
          <button className="py-4 px-8 bg-[#63c5da] rounded-lg text-white flex items-center text-xl hover:bg-[#2832c2] scale-105 duration-300">
            <FiLogIn className="mr-4" /> Login Here
          </button>
        )}
      </div>
    );
  };

  const RenderLinks = () => {
    return (
      <ul className="list-none text-lg m-8 flex items-start justify-center flex-col cursor-pointer">
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <AiFillHome className="mr-2" />
          <a  onClick={() => setStep(1)} className="">Home</a>
        </li>
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <FaUser className="mr-2" />
          <a onClick={() => setStep(2)}>Health Form</a>
        </li>
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <GiHealthNormal className="mr-2" />
          <a onClick={() => setStep(3)}>Doctor</a>
        </li>
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <IoDocument className="mr-2" />
          <a  onClick={() => setStep(3)}>Appointment</a>
        </li>
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <BsChatSquareFill className="mr-2" />
          <a  onClick={() => setStep(4)}>Chats</a>
        </li>
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <AiFillSetting className="mr-2" />
          <a  onClick={() => setStep(5)}>Settings</a>
        </li>
        <li className="my-4 flex items-center hover:text-[#63c5da] hover:scale-105 duration-300">
          <FiLogOut className="mr-2" />
          <a  onClick={() => setStep(6)}>Logout</a>
        </li>
      </ul>
    );
  };

  return (
    <nav className="w-1/3 hidden md:block  bg-[#0a1172] p-4 text-white rounded-l-lg">
      {RenderHeader()}
      <div className="flex flex-col my-16">
      {RenderProfile()}
      {RenderLinks()}
      </div>
    </nav>
  );
};

export default Left_Nav;
