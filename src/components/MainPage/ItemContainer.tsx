import React from "react";
export interface TagProps {
  name: string;
  link: string;
}
const ItemContainer = ({ name, link }: TagProps) => {
  return (
    <a
      href={link}
      className={` inline-block  font-semibold  pb-1  cursor-pointer ${
        name === "Home" ? "     border-b-4  mr-2  border-b-blue-400 " : "px-2"
      }`}
    >
      {name}
    </a>
  );
};

export default ItemContainer;
