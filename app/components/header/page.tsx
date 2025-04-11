import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faYoutube,
//   faTiktok,
// } from "@fortawesome/free-brands-svg-icons"; // Updated import

const Header = () => {
  return (
    <div>
      <div className="">
        {/* kis csík és tartalma */}
        {/* <div className="w-full justify-between flex py-3 backdrop-blur-md">
          <div className="pl-8 space-x-4">
            <a href="https://www.facebook.com/remidakarpitosmuhly/">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="text-black/50 w-auto hover:text-blue-500"
              />
            </a>
            <a href="https://www.youtube.com/@remidakarpitosmuhely.7987">
              <FontAwesomeIcon
                icon={faYoutube}
                size="lg"
                className="text-black/50 w-auto hover:text-red-500"
              />
            </a>
            <a href="https://www.tiktok.com/@remidabutor">
              <FontAwesomeIcon
                icon={faTiktok}
                size="lg"
                className="text-black/50 w-auto hover:text-gray-800"
              />
            </a>
          </div>

          {/* mail, telefon */}
          {/* <div className="flex pr-8">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className="text-black/50 w-auto pr-3"
              />
              <a
                href="mailto:remidabutor@gmail.com"
                className="hover:text-gray-500"
              >
                remidabutor@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                size="lg"
                className="text-black/50 w-auto pr-3 pl-3"
              />
              <a
                href="tel:+36 30 368 4332"
                className="hover:text-gray-500 transition-colors"
              >
                +36 30 368 4332
              </a>
            </div>
          </div>
          <div className="py-0.5 bg-gray-500 w-full absolute bottom-0"></div>
        </div> */}
        <div className="bg-[url('/header.jpg')] bg-cover relative bg-center py-56 text-center items-center justify-center flex flex-col">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
          <div className="relative z-10">
          <p className="text-white max-w-2xl text-[38px] sm:text-[45px] md:text-[65px] lg:text-[80px] font-main lg:font-extrabold font-medium">
            Remida bútor
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
