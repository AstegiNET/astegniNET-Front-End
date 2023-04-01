import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// import logo from "../../assets/images/graduate-svgrepo-com.svg";
import logo from "../assets/images/graduate-svgrepo-com.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden  py-24 sm:py-32 mx-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[70px]">
                <img src={logo} alt="logo" className="max-w-full" />
              </Link>
              <p className="text-body-color mb-7 text-base">
                AstegniNet is your best choose for online tutorial app
              </p>
              <p className="text-dark flex items-center text-sm font-medium">
                <span className="px-3">
                  <PhoneInTalkIcon />
                </span>
                <span>+251 900 000 000</span>
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">Tutors</h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Tutors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                AstegniNET
              </h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    About AstegniNet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Contact & Support
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Setting & Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Know Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="text-dark mb-9 text-lg font-semibold">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                <Link
                  to="/"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <LinkedInIcon />
                </Link>
              </div>
              <p className="text-body-color text-base">
                &copy; 2023 AstegniNET
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
