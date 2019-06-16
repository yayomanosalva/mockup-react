import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCertificate,
    faCalendar,
    faHeart, faLightbulb, faSearch
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.png"
import ToogleButton from '../aside/ToggleButton'
import Input from '../aside/input'
import Search from '../search'

export default class SideBar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section>
                    <div className="sidebar center">
                        <img src={logo} />
                    </div>
                </section>
                <section className="sidebar">
                    <div className=" border-right" id="sidebar-wrapper">
                        <div className="list-group list-group-flush">
                            <div
                                href="#e"
                                className="center">
                                <div className="ico-s">
                                    <FontAwesomeIcon icon={faLightbulb} size="1x" />
                                </div>
                                Smart Filters
                            </div>
                            <hr width="80%" />
                            <div
                                href="#e"
                                className="list-group-item list-group-item-action ">
                                <p className="sale">SALE</p>
                                <div className="ico-w">
                                    <FontAwesomeIcon icon={faCertificate} size="3x" />
                                </div>
                                <ToogleButton message="x" />
                            </div>
                            <div
                                href="#e"
                                className="list-group-item list-group-item-action ">
                                <div className="ico-w">
                                    <FontAwesomeIcon icon={faCalendar} size="3x" />
                                    <span className="new">23</span>
                                </div>
                                <ToogleButton message="y" />
                            </div>
                            <div
                                href="#e"
                                className="list-group-item list-group-item-action ">
                                <div className="ico-w">
                                    <FontAwesomeIcon icon={faHeart} size="3x" />
                                </div>
                                <ToogleButton message="z" />
                            </div>
                            <hr width="80%" />
                            <Search name="Status"/>
                            <div className="center list-group-item list-group-item-action">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="DELIVERED" placeholder="DELIVERED" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>
                    {`
						.main-sidebar {
							height: 100vh;
							max-width: 200px;
							position: fixed;
							top: 0;
							float: left;
							min-height: 500px;
							-webkit-transition: .3s all ease;
							-o-transition: .3s all ease;
							transition: .3s all ease;
    							z-index: 10;
							font-size: 16px;
							line-height: 1.5;
                            padding-top:1.3rem;
						}
                        .sidebar {
                            padding:1.3rem auto;
                        }
                        p{
                            -ms-transform: rotate(315deg);
                            -webkit-transform: rotate(315deg);
                            color:#ffffff;
                            margin-left: -15px;
                            font-size: small;
                            font-weight: bold;
                        }
                        .new {
                        color: #ffffff;
                        margin-left: -30px;
                        padding-right: 20px;
                        font-weight: 600;
                        }
                        .ico-w {
                        display: inline;
                        padding-right: 33px;
                        }
                        .ico-s {
                            display: inline;
                        padding-right: 10px;
                        }
                        body {
                        overflow: hidden;
                        }

                        #sidebar-wrapper {
                        min: 100vh;
                        margin-left: -15rem;
                        -webkit-transition: margin 0.25s ease-out;
                        -moz-transition: margin 0.25s ease-out;
                        -o-transition: margin 0.25s ease-out;
                        transition: margin 0.25s ease-out;
                        }

                        #sidebar-wrapper .sidebar-heading {
                        padding: 0.875rem 1.25rem;
                        font-size: 1.2rem;
                        }

                        #sidebar-wrapper .list-group {
                        }

                        #page-content-wrapper {
                        min: 100vw;
                        }

                        #wrapper.toggled #sidebar-wrapper {
                        margin: 0;
                        }

                        @media (min-width: 768px) {
                        #sidebar-wrapper {
                            margin: 0;
                        }

                        #page-content-wrapper {
                            min: 0;
                            width: 100%;
                        }

                        #wrapper.toggled #sidebar-wrapper {
                            margin: -15rem;
                        }
                        img {
                            padding:10px;
                            margin:10px auto;
                        }
                        .list-group-item {
                            background-color: transparent;
                            padding: 0.3rem 1.25rem;
                            border: none;
                        }
                        .border-right {
                            border-right: 2px solid rgba(0, 0, 0, 0.125) !important;
                        }
                        hr {
                            border: none;
                            height: 2px;
                            background-color: #c8c8c8;
                        }
                        .center {
                            text-align: center;
                        }
                        body {
                            padding: 1rem;
                        }

                        .dropdown-menu {
                            margin-top: 0.75rem;
                        }
                        ::-webkit-input-placeholder {
                        text-align: center;
                        }

                        :-moz-placeholder { /* Firefox 18- */
                        text-align: center;  
                        }

                        ::-moz-placeholder {  /* Firefox 19+ */
                        text-align: center;  
                        }

                        :-ms-input-placeholder {  
                        text-align: center; 
                        }

                        .Search::placeholder {
                        color: #cacaca;
                        font-size: 1.2em;
                        font-style: italic;
                        }

                        .Search{
                            color:#cacaca;
                            border: 3px solid #cacaca;
                        }
                        .SearchIco {
                            color: #cacaca;
                            font-size: 17px;
                            position: absolute;
                            margin-top: 40px;
                            left: 40px;
                        }
                    `}
                </style>
            </aside>
        );
    }
}
