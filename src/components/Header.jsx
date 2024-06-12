import React from "react";
import { NavLink } from "react-router-dom";
//import Logo from "../assets/send.png";
import Headercss from "../assets/styles/Header.module.css"

function Header() {
  return (
    <nav className={Headercss.container}>
      <div>
        <h1 className={Headercss.logo}>Shopify</h1>
      </div>
      <ul className={Headercss.linkContainer}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? Headercss.activeNavLink : Headercss.navLink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>


        <li>
        <NavLink
            className={({ isActive }) =>
              isActive ? Headercss.activeNavLink : Headercss.navLink
            }
            to="/man"
          >
            Mans
          </NavLink>

        </li>

        <li>
        <NavLink
            className={({ isActive }) =>
              isActive ? Headercss.activeNavLink : Headercss.navLink
            }
            to="/woman"
          >
            Womans
          </NavLink>

        </li>

        <li>
        <NavLink
            className={({ isActive }) =>
              isActive ? Headercss.activeNavLink : Headercss.navLink
            }
            to="/about"
          >
            About
          </NavLink>

        </li>

        <li>
        <NavLink
            className={({ isActive }) =>
              isActive ? Headercss.activeNavLink : Headercss.navLink
            }
            to="/singup"
          >
            Singup
          </NavLink>

        </li>
      </ul>
    </nav>
  );
}

export default Header;
