import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LocalizationApi } from "../../../context/localizationContext";
import { ThemeApi } from "../../../context/themeContext";
import { T, LanguageList, Config } from "react-translator-component";
import ru from "./locale/ru.json";
import uz from "./locale/uz.json";
import en from "./locale/en.json";

import ruFlag from "./images/ru.svg";
import uzFlag from "./images/uz.svg";
import enFlag from "./images/en.svg";

Config.default = "en";

Config.list = {
  en: {
    text: "en",
    icon: enFlag,
    file: en,
  },
  ru: {
    text: "ru",
    icon: ruFlag,
    file: ru,
  },
  uz: {
    text: "uz",
    icon: uzFlag,
    file: uz,
  },
};

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeApi);
  const { setLanguage, language } = useContext(LocalizationApi);

  function onChange(e) {
    setLanguage(e.target.value);
  }

  return (
    <header
      className={`${
        theme === "light" ? "bg-green-500" : "bg-black text-white"
      }`}>
      <nav className="p-2 flex justify-between">
        <ul className="flex gap-3">
          <li>
            {/* <Link to={'/'}>Home</Link> */}
            <NavLink
              className={({ isActive }) => `${isActive ? "navActive" : ""} p-3`}
              to={"/"}>
              {language === "uz"
                ? "Asosiy"
                : language === "ru"
                ? "Главное"
                : "Home"}
            </NavLink>
          </li>
          <li>
            {/* <Link to={'/product'}>Product</Link> */}
            <NavLink
              className={({ isActive }) => `${isActive ? "navActive" : ""} p-3`}
              to={"/product"}>
              Product
            </NavLink>
          </li>
          <li>
            {/* <Link to={'/about'}>About</Link> */}
            <NavLink
              className={({ isActive }) => `${isActive ? "navActive" : ""} p-3`}
              to={"/about"}>
              {T("Salom")}
            </NavLink>
          </li>
          <li className="rounded-full bg-white" onClick={toggleTheme}>
            {theme}
          </li>
        </ul>
        <LanguageList Theme="Dropdown" />

        <select onChange={onChange}>
          <option value="uz">uzbek</option>
          <option value="ru">russian</option>
          <option value="en" selected>
            english
          </option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
