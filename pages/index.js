import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMailchimp,
  FaMailBulk,
} from "react-icons/fa";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("111");
  const [contentTheme, setContentTheme] = useState("2222");

  useEffect(() => {
    if (toggle == 0) {
      setTheme("111");
      setContentTheme("2222");
    } else {
      setTheme("FFF0F5");
      setContentTheme("A67F8E");
    }
  });
  return (
    <div
      className="w-screen h-screen flex bg-bg items-start justify-center"
      style={{ backgroundColor: `#${theme}` }}
    >
      <button
        className=" rounded-xl p-2 focus:outline-none bg-gray-200 mt-9 absolute"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}{" "}
      </button>

      <div
        className="h-auto  lg:h-3/5 w-4/6 bg-main rounded-2xl shadow-xl flex flex-col mt-24"
        style={{ backgroundColor: `#${contentTheme}` }}
      >
        <div className=" p-4 m-4 flex flex-col text-base sm:text-2xl md:text-3xl lg:text-4xl text-white  select-none font-bold font-sans tracking-widest uppercase">
          Kerem Esen
          <text className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold font-mono uppercase select-none">
            Front-End Developer
          </text>
        </div>
        <div className="flex items-center justify-center text-white bg-textarea p-4 sm:p-6 md:p-8 lg:p-10 font-mono text-xs sm:text-sm md:text-base my-4 select-none">
          hi im kerem im 19 yo developer.im trying to learn and do something at
          reactjs/nextjs
        </div>

        <ul className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center space-x-0 sm:space-x-4 text-xs sm:text-sm md:text-base">
          <div className="flex flex-row items-center justify-center">
            <li>
              <a
                href="https://www.instagram.com/keremeesen"
                target="_blank"
                className="w-auto h-auto items-center justify-center hover:bg-main p-2 sm:p-4 md:p-6 rounded-xl flex"
              >
                <div className=" w-1/4 items-center justify-center flex flex-col text-white select-none">
                  Instagram
                  <FaInstagram />
                  keremeesen
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/kerooxd"
                target="_blank"
                className="w-auto h-auto items-center justify-center hover:bg-main p-2 sm:p-4 md:p-6 rounded-xl flex"
              >
                <div className=" w-1/4 items-center justify-center flex flex-col text-white select-none">
                  Twitter
                  <FaTwitter />
                  kerooxd
                </div>
              </a>
            </li>
          </div>

          <div className="flex flex-row items-center justify-center">
            <li>
              <a
                href="https://www.github.com/keremesen"
                target="_blank"
                className="w-auto h-auto items-center justify-center hover:bg-main p-2 sm:p-4 md:p-6 rounded-xl flex"
              >
                <div className=" w-1/4 items-center justify-center flex flex-col text-white select-none">
                  Github
                  <FaGithub />
                  keremesen
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kerem-esen-55a1941bb/"
                target="_blank"
                className="w-auto h-auto items-center justify-center hover:bg-main p-2 sm:p-4 md:p-6 rounded-xl flex"
              >
                <div className=" w-1/4 items-center justify-center flex flex-col text-white select-none">
                  Linkedin
                  <FaLinkedin />
                  keremesen
                </div>
              </a>
            </li>
          </div>
          <li>
            <a
              href="mailto:esennkerem@gmail.com"
              target="_blank"
              className="w-auto h-auto items-center justify-center hover:bg-main p-2 sm:p-4 md:p-4  rounded-xl flex"
            >
              <div className="py-2 w-1/4 items-center justify-center flex flex-col text-white select-none ">
                Mail
                <FaMailBulk />
                kerem.esen.01@hotmail.com
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
