import React from "react";
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

function App() {
  return (
    <div>
      <div className="text-red-300 container">
        <div>
          <h6 className="container">{T("Salom")}</h6>
        </div>
        <LanguageList Theme="Dropdown" />
      </div>
    </div>
  );
}

export default App;
