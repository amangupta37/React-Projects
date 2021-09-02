import React, { useEffect } from "react";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    IN: {
      translation: {
        "Welcome to React": "React में आपका स्वागत है ",
      },
    },

    JP: {
      translation: {
        "Welcome to React": "Reactへようこそ",
      },
    },
  },
  // lng: "FN",

  interpolation: {
    escapeValue: false,
  },
});

function App() {
  // const [userLocation, setUserLocation] = useState("");
  const [t, i18n] = useTranslation();

  const getUserLocation = () => {
    fetch("https://geolocation-db.com/json/")
      .then((val) => val.json())
      .then((data) => {
        // setUserLocation(data.country_code);
        console.log(data.country_code);
        return i18n.changeLanguage(data.country_code);
      });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return <h2>{t("Welcome to React")}</h2>;
}

export default App;
