import { Link } from "@tanstack/react-router";
import { navbar, navLink } from "./NavBar.css";

export const NavBar = () => (
  <>
    <nav className={navbar}>
      <Link to="/" className={navLink}>
        Home
      </Link>
      <Link to="/about" className={navLink}>
        About
      </Link>
    </nav>
    <hr />
  </>
);
