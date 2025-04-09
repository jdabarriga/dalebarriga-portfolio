import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple-600">your</span> digital
          presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:jdabarriga@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses=""
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small md:font-normal font-light mb-2">
          Copyright © 2025 Dale
        </p>
        <div className="flex items-center md:gap-3 gap-">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-10 h-10 cursor-pointer flex justify-center items-center 
              backdrop-filter backdrop-blur saturate-180 bg-opacity-75 
              bg-black-200 hover:bg-blue-800 rounded-xl border border-black-300"
            >
              <img
                src={profile.img}
                alt={`Social ${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
