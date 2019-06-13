import React from 'react'
import { NavLink, BrowserRouter, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faEnvelope, faStar, faCog, faUser } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <header className="main-header">
      <BrowserRouter>
        <Switch>
          <ul className="right">
            <li><NavLink to='/'><FontAwesomeIcon icon={faHome} size="1x" /><br />Home</NavLink></li>
            <li><NavLink to='/'><FontAwesomeIcon icon={faEnvelope} size="1x" /><br />Messages</NavLink></li>
            <li><NavLink to='/'><FontAwesomeIcon icon={faStar} size="1x" /><br />Wishlist</NavLink></li>
            <li><NavLink to='/'><FontAwesomeIcon icon={faCog} size="1x" /><br />Settings</NavLink></li>
            <li><NavLink to='/'><FontAwesomeIcon icon={faUser} size="1x" /><br />My Account</NavLink></li>
          </ul>
        </Switch>
      </BrowserRouter>
      <style jsx>
        {`
						.main-header {
              width: calc(100% - 230px);
              float: right;
              padding: 30px 5px 0 0;
              position: relative;
              top:0
						}

            /*menu*/

          ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: visible;
              background-color: transparent;  
            }
            
            li {
              float: left;
              
            }
            
            li a {
              display: block;
              color: #193948;
              text-align: center;
              padding: 1px 40px;
              text-decoration: none;
              font-size: smaller;
            }
            
            li a:hover {
              background-color: #193948;
              color:#fff
            }
            
            .active {
              background-color: #ffffff;
            }

          `}
      </style>
    </header>
  )
}

export default Header