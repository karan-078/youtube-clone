import React, { useContext } from "react";
import LeftNavMeanuItem from "./LeftNavMeanuItem";
import { categories } from "../utils/Constant";
import { Context } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  const navegate = useNavigate();
  const clickHanlder = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);

      case "home":
        return setSelectedCategory(name);

      case "menu":
        return false;

      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col ">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMeanuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHanlder(item.name, item.type);

                  navegate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Clone by : Karan Bisht
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
