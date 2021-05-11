import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMailchimp,
  FaMailBulk,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-bg flex items-center justify-center">
      <div className="h-auto  lg:h-3/5 w-4/6  rounded-2xl shadow-xl bg-main flex flex-col">
        <div className=" p-4 m-4 flex flex-col text-base sm:text-2xl md:text-3xl lg:text-4xl text-white  select-none font-bold font-sans tracking-widest uppercase">
          Kerem Esen
          <text className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold font-mono uppercase select-none">
            Front-End Developer
          </text>
        </div>
        <div className="flex items-center justify-center text-white bg-textarea p-2 sm:p-4 md:p-6 lg:p-10 font-mono text-xs sm:text-sm md:text-base my-4 select-none">
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
