import ItemContainer from "./ItemContainer";
import { TagProps } from "./ItemContainer";
import React from "react";
const Tags: TagProps[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "#app vision pro",
    link: "/tag/app-vision-pro",
  },
  {
    name: "#ai",
    link: "/tag/ai",
  },
  {
    name: "#tren tay",
    link: "/tag/tren-tay",
  },
  {
    name: "#trải nghiệm",
    link: "/tag/trai-nghiem",
  },
  {
    name: "#lý do mua",
    link: "/tag/ly-do-mua",
  },
  {
    name: "#tinhtelookback2023",
    link: "/tag/tinhtelookback2023",
  },
];
const Container = () => {
  return (
    <div className=" px-5  overflow-x-auto  scroll-ps-20">
      <div className=" flex ">
        <ul>
          <li>
            {Tags.map((item, index) => (
              <ItemContainer name={item.name} link={item.link} key={index} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Container;
