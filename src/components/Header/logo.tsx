import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="col-left flex    col-span-1 px-0 py-0 cursor-pointer">
          <div className=" pt-1 w-14 h-14 justify-center ">
            <svg
              width="115"
              height="40"
              viewBox="0 0 115 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="92.129%"
                  y1="100%"
                  x2="0%"
                  y2="6.503%"
                  id="linearGradient-2"
                >
                  <stop stop-color="#2AF598" offset="0%"></stop>
                  <stop stop-color="#0049FD" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <rect
                  fill="url(#linearGradient-2)"
                  fill-rule="nonzero"
                  width="40"
                  height="40"
                  rx="20"
                ></rect>
                <g fill-rule="nonzero" fill="#FFF">
                  <path d="M32.99 16.072c-.044 2.099-.663 4.06-1.587 5.93-1.632 3.299-3.859 6.13-6.93 8.261-1.182.821-2.453 1.473-3.912 1.684-2.345.337-3.986-.95-4.225-3.274-.216-2.099.287-4.069 1.113-5.966 1.665-3.83 4.132-7.045 7.663-9.407 1.07-.715 2.228-1.248 3.521-1.468 2.183-.372 3.815.713 4.232 2.85.09.456.161.919.126 1.39z"></path>
                  <path d="M16.257 31.08c-1.495-.387-2.79-1.127-3.984-2.016-2.381-1.77-4.174-3.934-4.994-6.707-.306-1.036-.397-2.088-.087-3.144.49-1.674 1.955-2.748 3.814-2.842 1.602-.082 3.085.293 4.509.93.83.37 1.597.834 2.345 1.332.31.207.37.36.156.684-1.144 1.72-2.025 3.548-2.51 5.527-.324 1.328-.462 2.663-.179 4.015.158.776.504 1.51 1.013 2.142l-.083.079zM20 11.76c-.002 1.515-1.233 2.746-2.761 2.76-1.528.013-2.782-1.196-2.81-2.711A2.771 2.771 0 0 1 17.186 9a2.81 2.81 0 0 1 1.983.802c.528.517.827 1.222.831 1.958z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="flex flex-col flex-grow-0 px-0 py-0  ">
            <div className="text-2xl font-bold align-bottom  mb-0 relative">
              Tinhte
            </div>
            <div className="text-[10px]  mt-[3px] uppercase  mb-0 absolute top-12">
              m ạ n g x ã h ộ i
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
