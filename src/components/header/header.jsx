import React from "react";
import { NavLink, BrowserRouter, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faStar,
  faCog,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="main-header">
      <BrowserRouter>
        <Switch>
          <ul>
            <li>
              <NavLink to="/" className="blue">
                <FontAwesomeIcon icon={faHome} size="1x" />
                <br />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
                <br />
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faStar} size="1x" />
                <br />
                Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faCog} size="1x" />
                <br />
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faUser} size="1x" />
                <br />
                My Account
              </NavLink>
            </li>
          </ul>
        </Switch>
      </BrowserRouter>
      <style jsx>
        {`
          .main-header {
            padding: 30px 5px 0 0;
            position: relative;
            top: 0;
          }

          .blue {
            background-color: #193948 !important;
            color: #fff !important;
          }

          /*menu*/

          .main-header ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: visible;
            background-color: transparent;
            white-space: nowrap;
            display: table;
            width: 100%;
          }

          .main-header li {
            display: table-cell;
          }

          .main-header li a {
            display: block;
            color: #193948;
            text-align: center;
            padding: 1px 40px;
            text-decoration: none;
            font-size: smaller;
          }

          .main-header li a:hover {
            background-color: #193948;
            color: #fff;
          }

          .main-header .active {
            background-color: #ffffff;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
