import React from "react";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SlSocialYoutube } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="" className="py-[50px] mt-[30px] border-t-[1px] border-white">
      <div className="container">
        <div className="flex items-center justify-center text-center flex-col gap-[15px]">
          <h2 className="text-white text-[20px]">Let’s get Social</h2>
          <div className="flex items-center justify-center gap-[70px]">
            <a className="text-[40px] text-white">
              <PiLinkedinLogo />
            </a>
            <a className="text-[40px] text-white">
              <FaInstagram />
            </a>
            <a className="text-[40px] text-white">
              <FcGoogle />
            </a>
            <a className="text-[40px] text-white">
              <SlSocialYoutube />
            </a>
            <a className="text-[40px] text-white">
              <AiOutlineFacebook />
            </a>
          </div>
          <div className="">
            <h2 className="text-white text-[20px] flex items-center">
              Privacy Policy{" "}
              <span className="text-white text-[60px] mt-[-4px] mx-[16px]">
                •
              </span>{" "}
              Terms & Conditions
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
