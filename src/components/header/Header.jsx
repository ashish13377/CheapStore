import React, { useRef, useState, useEffect } from 'react';
import TopBar from './TopBar';
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'
import logolight from '../../assets/images/logo/logo.png'
import logolight2x from '../../assets/images/logo/logo@2x.png'
import menus from "../../pages/menu";
import DarkMode from "./DarkMode"
import { Dropdown } from 'react-bootstrap';

import icon from '../../assets/images/icon/connect-wallet.svg'

const Header = () => {
    const [isLogin,setIsLogin]=useState(false);
    const { pathname } = useLocation();
    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;

        scrollTop >= 100 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 120 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }


    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };

    return <div>

        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                        <div id="site-header-inner" className="flex">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logo} srcSet={logo2x} alt="nft-gaming" />
                                        <img id="logo_header" className='logo-light' src={logolight} srcSet={logolight2x} alt="nft-gaming" />
                                    </Link>
                                </div>
                            </div>

                            <form className="form-search">
                                <input list="ice-cream-flavors" id="ice-cream-choice" placeholder='College Name' name="ice-cream-choice" style={{ width: '300px' }} />

                                <datalist id="ice-cream-flavors">
                                    <option value="Chocolate" />
                                    <option value="Coconut" />
                                    <option value="Mint" />
                                    <option value="Strawberry" />
                                    <option value="Vanilla" />
                                </datalist>
                            </form>
                            <form className="form-search">
                                <input type="text" placeholder="Search here" />
                                <button><i className="far fa-search"></i></button>
                            </form>

                            {/* <nav id="main-nav" className="main-nav" ref={menuLeft}>
                                <ul id="menu-primary-menu" className="menu">
                                    {
                                        menus.map((data,index) => (
                                            <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item menu-item-has-children ${activeIndex === index ? 'active' : ''} ` }   >
                                                <Link to="#">{data.name}</Link>
                                                <ul className="sub-menu" >
                                                    {
                                                        data.namesub.map((submenu,index) => (
                                                            <li key={index} className={
                                                                pathname === submenu.links
                                                                    ? "menu-item current-item"
                                                                    : "menu-item"
                                                                }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav> */}

                            <div style={{ fontSize: '30px',margin:'0 20px' }}>
                                <Link to="/connect-wallet" >
                                <i class="fa-sharp fa-solid fa-comment"></i>
                                </Link>
                            </div>
                            <div style={{ fontSize: '30px',margin:'0 20px' }} className={!isLogin?'d-none':null}>
                                <Link to="/connect-wallet" >
                                <i class="fa-solid fa-user-graduate"></i>
                                </Link>
                            </div>
                            <div style={{ fontSize: '16px',margin:'0 20px' }}>
                            <Link to='/' >
                                <span onClick={()=>setIsLogin(!isLogin)}>Login/Signup</span>
                            </Link>
                        </div>
                            <div className="button-connect-wallet">
                            <Link to="/connect-wallet" className="sc-button wallet  style-2">
                                <img src={icon} alt="icon" />
                                <span>Sell</span>
                            </Link>
                        </div>

                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>;
};

export default Header;
