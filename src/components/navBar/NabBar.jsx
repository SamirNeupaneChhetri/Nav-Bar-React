import "./NavBar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_icon_light from "../../assets/day.png";
import toggle_icon_dark from "../../assets/night.png";

const NavBar = ({ theme, settheme }) => {
  const toggle_mode = () => {
    theme == "light" ? settheme("dark") : settheme("light");
  };

  return (
    <div className="navbar">
      {/* Logo of the website */}
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      ></img>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      {/* This is for Search box  */}

      <div className="searchBox">
        <input type="text" placeholder="search"></input>
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>

      {/* This is for a change dark and light mode. */}

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme == "dark" ? toggle_icon_light : toggle_icon_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default NavBar;
