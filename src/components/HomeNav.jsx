import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "../css/HomeNav.css";

function HomeNav() {
  const { setCurrentTheme, themes } = useTheme();

  const handleThemeClick = (themeName) => {
    setCurrentTheme(themes[themeName]);
  };

  return (
    <nav className="home-nav">
      <Link
        to="/jonathan"
        className="home-nav-link jonathan-theme"
        data-letter="J"
        onClick={() => handleThemeClick("jonathan")}
      >
        Jonathan
      </Link>
      <Link
        to="/chris"
        className="home-nav-link chris-theme"
        data-letter="C"
        onClick={() => handleThemeClick("chris")}
      >
        Chris
      </Link>
      <Link
        to="/cara"
        className="home-nav-link cara-theme"
        data-letter="C"
        onClick={() => handleThemeClick("cara")}
      >
        Cara
      </Link>
      <Link
        to="/karen"
        className="home-nav-link karen-theme"
        data-letter="K"
        onClick={() => handleThemeClick("karen")}
      >
        Karen
      </Link>
    </nav>
  );
}

export default HomeNav;
