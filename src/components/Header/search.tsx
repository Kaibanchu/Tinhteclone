"use client";
import React from "react";
import { useState } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className=" col-span-2 text-{1} flex justify-start  md:opacity-100 opacity-0  ">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-4/5 bg-gray-200 h-3/5 rounded-3xl  text-base focus:outline-none pl-1 justify-center  "
        type="text"
        title="tìm kiếm"
        name="search"
        placeholder={
          isFocused ? " " : "Tìm sản phẩm công nghệ, cộng đồng, bạn bè ..."
        }
      ></input>
    </div>
  );
};

export default Search;
