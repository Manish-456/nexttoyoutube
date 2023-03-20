import React from "react";
import LeftbarItems from "./LeftbarItems";
import { categories } from "../utils/constants";
import { ApiContext } from "../context/contextApi";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const Leftbar = () => {
  const navigate = useNavigate();
  const {setSelectedCategory, mobileMenu , selectedCategory} = useContext(ApiContext)
  const clickHandler = (name : string, type : string) => {
      switch(type) {
        case "category":
          return setSelectedCategory(name)
        case "home":
          return setSelectedCategory(name)
        case "menu":
          return false
          default : 
          break
      }
  }


  return (
    <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileMenu ? "translate-x-[0px]" : ""
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftbarItems
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                    clickHandler(item.name, item.type);
                                    navigate("/");
                                }}
                                className={`${
                                    selectedCategory === item.name
                                        ? "bg-white/[0.15]"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-white/[0.2]" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: JS Dev Hindi
                </div>
            </div>
        </div>
  );
};

export default Leftbar;
