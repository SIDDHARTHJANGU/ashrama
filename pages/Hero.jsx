import React from "react";
import logo from "/public/image/png/nav_center_imgs.png";
import { Facebook, Trimurtyone, Trimurtytwo, Twitter, Youtube } from "./Svg";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className=" bg_header pt_53">
      <nav className=" container  ">
        <div className=" nav_bg position-relative">
          <div className=" d-flex justify-content-between align-items-center ">
            <div className=" d-flex align-items-center">
              <label for="menuicon">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="menuicon" hidden />
              <ul className=" d-flex gap_38 sm-screen">
                <li>
                  <a href="#" className=" fs_16 ff_Poppins clr_gray fw_500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 ff_Poppins clr_gray fw_500">
                    Yoga Program
                  </a>
                </li>
                <li>
                  <a href="#" className="fs_16 ff_Poppins clr_gray fw_500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Image
                className=" nav_img_center position-absolute"
                src={logo}
                alt="nav_img_center"
                width={100}
                height={126}
              />
            </div>
            <div className=" d-flex align-items-center gap-2">
              <Facebook />
              <Youtube />
              <Twitter />
            </div>
          </div>
        </div>
      </nav>
      <div className=" hero_bg min-vh-100 d-flex align-items-center justify-content-center">
        <div className=" container d-flex justify-content-center align-items-center flex-column">
          <h3 className=" d-flex align-items-center fs_28 fw_600 ff_Poppins  text-white gap-3 lh_Trimurti mt-5">
            {" "}
            <span>
              <Trimurtyone />
            </span>
            Trimurti Ashrama{" "}
            <span>
              <Trimurtytwo />
            </span>
          </h3>
          <h1 className=" text-white fw_700 fs_48 ff_Poppins mx_w_1082 text-center">
            The Finest Ashrama On The Ganga Presents The Finest{" "}
            <span className=" clr_yellow">Yoga Sadhana</span>
          </h1>
          <p className=" text-center text-white fw_500 fs_16 ff_Poppins mx_w_799">
            Welcome to the beginning of the end of your search. Meditation -
            taking the attention to the Source of attention is the simplest and
            most direct way to increase consciousness. To do just that, Trimurti
            Ashram in Rishikesh offers the finest spiritual tool available
            anywhere on Earth.
          </p>
          <button className=" btn_bg fs_16 fw_400 ff_marko">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};
