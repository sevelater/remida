"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { links } from "../consts";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 100) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const hamburgerVariants = {
    visible: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    hidden: {
      y: "-100%",
      transition: { duration: 0.2, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "-100%" },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="fixed left-0 w-full z-50 justify-items-center"
      >
        {/* Desktop navbar */}
        <div className="hidden custom:flex justify-center items-center px-6 xl:px-12 py-5 w-full rounded-md backdrop-blur-md">
          <ul className="flex gap-4 xl:gap-10 items-center">
            {links.map((link) => (
              <li
                key={link.href}
                className={`relative group tracking-wider font-medium ${
                  pathname === link.href ? "text-yellow-400" : ""
                }`}
                style={{ position: "relative" }}
              >
                <Link href={link.href}>
                  <motion.span
                    className="text-white text-lg px-0.5 py-1 relative z-10 transition-all duration-200 ease-in-out inline-block"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    {link.text}
                    <span
                      style={{
                        content: '""',
                        position: "absolute",
                        bottom: "0",
                        width: "0",
                        height: "2px",
                        backgroundColor: "white",
                        transition: "width 0.3s ease-in-out",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>

          <div id="line" className="p-px py-6 mx-8 bg-[#c8c8c8]/50"></div>

          <div className="flex items-center gap-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white text-xl ease-in-out duration-200 hover:text-blue-600"
              />
            </a>
            <a href="https://www.youtube.com/@remidakarpitosmuhely.7987">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-white text-xl ease-in-out duration-200 hover:text-red-600"
              />
            </a>
            <a href="https://www.tiktok.com/@remidabutor">
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-white text-xl ease-in-out duration-200 hover:text-gray-950"
              />
            </a>
          </div>
        </div>

        {/* Hamburger menu */}
        <motion.div
          variants={hamburgerVariants}
          initial="visible"
          animate={hidden ? "hidden" : "visible"}
          className="custom:hidden fixed top-6 right-3 z-50 p-2"
        >
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center z-50 scale-125 cursor-pointer"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </motion.div>

        {/* Mobile menu */}
        {isOpen && !hidden && (
          <div className="custom:hidden fixed inset-0 bg-transparent z-40">
            <div
              ref={menuRef}
              className="fixed top-0 right-0 h-full w-64 bg-[#efefef] bg-opacity-30 backdrop-blur-xl border-l shadow-lg flex items-center justify-center transition-all duration-300"
            >
              <ul className="grid text-white text-md w-full gap-y-4 pt-10 text-center items-center tracking-wider font-main">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block p-2 hover:text-[#202020] transition-colors ${
                        pathname === link.href ? "text-[#202020]" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}

                <div id="line" className="py-px self-center bg-[#c8c8c8]/50 mx-10"></div>

                <div className="flex justify-items-center text-center justify-center gap-x-5 mt-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-white text-xl ease-in-out duration-200 hover:text-blue-600"
                    />
                  </a>
                  <a href="https://www.youtube.com/@remidakarpitosmuhely.7987">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-white text-xl ease-in-out duration-200 hover:text-red-600"
                    />
                  </a>
                  <a href="https://www.tiktok.com/@remidabutor">
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="text-white text-xl ease-in-out duration-200 hover:text-gray-950"
                    />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Inline stílus – az aláhúzás csak hover esetén jelenik meg */}
      <style jsx>{`
        li::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease-in-out;
          transform: translateX(-50%);
        }
        li:hover::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Navbar;