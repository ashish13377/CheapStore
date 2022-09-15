import React from 'react';
import { Link } from 'react-router-dom'
import Countdown from "react-countdown";
import { Dropdown } from 'react-bootstrap';

const TopBar = () => {
  return    <div className="topbar">
                <div className="container">
                    <div className="topbar-inner flex">
                        <div className="menu-options flex">
                            <div className="ethereum">
                                <div id="ethereum" className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                            <span>Ethereum</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            <span>Ethereum</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>Bitski</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>Fortmatic</span>
                                        </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="english">
                                <div id="english" className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle className="btn-selector nolink" id="dropdown-basic">
                                            <span>English</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                            <span>English</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>USA</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            <span>France</span>
                                        </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="topbar-right flex">
                            <span>New Product Coming Soon</span>
                            <div className="countdown">
                                <Countdown date={Date.now() + 500000000}>
                                    <span>You are good to go!</span>
                                </Countdown>
                            </div>
                            <ul className="socical-icon flex">
                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>;
};

export default TopBar;
