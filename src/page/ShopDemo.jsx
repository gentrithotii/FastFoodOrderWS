import { useState } from "react";
import DisplayItems from "../components/DisplayItems";

const ShopDemo = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <div className="container py-4">
      <div className="mb-3 text-start">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={toggleTheme}
        >
          <i
            className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"} me-1`}
          ></i>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      <DisplayItems />
    </div>
  );
};

export default ShopDemo;
