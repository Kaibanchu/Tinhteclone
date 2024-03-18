import React from "react";

const Search = () => {
  return (
    <div className=" col-span-2 text-{1} flex justify-start md:opacity-100 sm:opacity-0   ">
      <input
        className="w-4/5 bg-gray-300 h-4/5 rounded-3xl text-base  "
        type="text"
        title="tìm kiếm"
        name="search"
        placeholder="Tìm sản phẩm công nghệ, cộng đồng, bạn bè ..."
      ></input>
    </div>
  );
};

export default Search;
