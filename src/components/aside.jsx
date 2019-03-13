import React, { Component } from 'react';
import './aside.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate,faCalendar, faHeart, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { yellow } from 'ansi-colors';

export default class SideBar extends Component {
	render() {
		return (
			<aside className="main-sidebar">
				<section className="sidebar">
					<div className="titule">
					<FontAwesomeIcon icon={faMapMarker} color="#8f9ca9" size="2x"/> <p style={{color:yellow}}>Smart Filter</p>
					
					</div>
					<div className="bg-light border-right" id="sidebar-wrapper">
							<span className="switch list-group-item list-group-item-action bg-light">
								<span className="fa-layers fa-fw" style={{background:yellow}}>
									<FontAwesomeIcon icon={faCertificate} color="#8f9ca9" size="3x"/>
									<span className="fa-layers-text fa-inverse" data-fa-transform="shrink-11.5 rotate--30">NEW</span>
								</span>
								<input type="checkbox" className="switch" id="switch-id" />
								<label for="switch-id"></label>
							</span>
							<span className="switch list-group-item list-group-item-action bg-light">
								<span className="fa-layers fa-fw" style={{background:yellow}}>
									<FontAwesomeIcon icon={faCalendar} color="#8f9ca9" size="3x"/>
									<span className="fa-layers-text fa-inverse" style={{top: "14px"}}>23</span>
								</span>
								<input type="checkbox" className="switch" id="switch-ir" />
								<label for="switch-ir"></label>
							</span>
							<span className="switch list-group-item list-group-item-action bg-light">
								<span className="fa-layers fa-fw" style={{background:yellow}}>
									<FontAwesomeIcon icon={faHeart} color="#8f9ca9" size="3x"/>
									<span className="fa-layers-text fa-inverse"></span>
								</span>
								<input type="checkbox" className="switch" id="switch-iy" />
								<label for="switch-iy"></label>
							</span>
							
					</div>
				</section>
				<style jsx>
					{`
					.fa-layers {
						margin: auto 3rem;
					}
					.fa-layers-text {
						left:120%
					}
					.switch+.switch {
						margin-left:0
					}
						body {
							overflow: hidden;
						}

						#sidebar-wrapper {
							min: 100vh;
							margin-left: -15rem;
							-webkit-transition: margin .25s ease-out;
							-moz-transition: margin .25s ease-out;
							-o-transition: margin .25s ease-out;
							transition: margin .25s ease-out;
						}

						#sidebar-wrapper .sidebar-heading {
							padding: 0.875rem 1.25rem;
							font-size: 1.2rem;
						}

						#sidebar-wrapper .list-group {
							width: 15rem;
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
						}
					`}
				</style>
			</aside>
		);
	}
}
