import Logo from "@/components/Header/logo";
import Profile from "@/components/Header/profile";
import Search from "@/components/Header/search";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-5 px-6 py-6 ">
        <Logo />

        <Search />

        <Profile />
        
      </div>
    </>
  );
};

export default Header;
