import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar/NabBar";

const App = () => {
  const currentThem = localStorage.getItem("currentThem");
  const [theme, settheme] = useState(currentThem ? currentThem : "light");

  useEffect(() => {
    localStorage.setItem("currentThem", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} settheme={settheme} />
    </div>
  );
};
export default App;
