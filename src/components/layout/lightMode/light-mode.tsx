import { useLayoutEffect, useState } from "react";
import "./light-mode.css";
import { BsMoon, BsSun } from "react-icons/bs";

export default function LightMode() {
  const [theme, setTheme] = useState<any | null>();

  const setDarktMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    const darkTheme = localStorage.getItem("selectedTheme");

    setTheme(darkTheme);
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    const lightTheme = localStorage.getItem("selectedTheme");

    setTheme(lightTheme);
  };

  useLayoutEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");

    setTheme(selectedTheme);
    if (selectedTheme === "light") {
      setLightMode();
    }
  }, []);

  const toggleTheme = (e: any) => {
    if (e.target.checked && theme === "light") {
      setDarktMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="light-mode">
      <div className="light-mode__switch">
        <input type="checkbox" id="input-color-switch" onChange={toggleTheme} />
        <label
          htmlFor="input-color-switch"
          className="light-mode__color-switch"
        >
          <div className="light-mode__color-icon">
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </div>
        </label>
      </div>
    </div>
  );
}
