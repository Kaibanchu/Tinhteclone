import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Profile = () => {
  return (
    <div className=" col-span-2 flex  justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row justify-start align-middle gap-2  w-24 h-10 bg-gray-200 rounded-3xl pt-1 pl-2 ">
          <svg 
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 16C0 7.177 7.177 0 16 0s16 7.177 16 16-7.177 16-16 16S0 24.823 0 16zm18.667 5.333c2.93 0 5.378 1.908 6.264 4.539 2.696-2.441 4.402-5.957 4.402-9.872 0-7.352-5.981-13.333-13.333-13.333S2.667 8.648 2.667 16c0 3.916 1.708 7.432 4.405 9.873.885-2.63 3.33-4.54 6.261-4.54h5.334zm-8-9.333a5.334 5.334 0 0 1 10.666 0v1.333a5.334 5.334 0 0 1-10.666 0V12z"
              fill="#393A3B"
            ></path>
          </svg>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-560 h-120 p-3 bg-white mr-5">
          <button className="p-3">
            Đăng nhập tài khoản
            </button> <br />
          <button className="p-3">Đăng ký tài khoản mới</button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
