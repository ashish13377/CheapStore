import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'

const FooterStyle2 = () => {
    const [dataSocial] = useState([
        {
            icon: 'fab fa-facebook-f'
        },
        {
            icon: 'fab fa-twitter'
        },
        {
            icon: 'fab fa-linkedin-in'
        },
        {
            icon: 'fab fa-youtube'
        },
    ])

    const [dataLinkMarket] = useState([
        {
            title: 'Gaming',
            link: '/item'
        },
        {
            title: 'Product',
            link: '/item'
        },
        {
            title: 'All NFTs',
            link: '/item'
        },
        {
            title: 'Social Network',
            link: '/item'
        },
        {
            title: 'Domain Names',
            link: '/item'
        },
        {
            title: 'Collectibles',
            link: '/item'
        },
    ])


    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  return (
      <div>
            <footer id="footer" className="clearfix bg-style style-2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-12 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img id="logo_footer" src={logo} alt="nft-gaming"
                                            srcSet={logo2x} />
                                    </Link>
                                </div>
                            </div>
                            <div className="widget widget-menu menu-marketplace style-2">
                                <ul>
                                    {
                                        dataLinkMarket.map((item,index)=> (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 col-12">
                            <div className="widget-social style-2">
                                <h5 className="title-widget">Follow Us</h5>
                                <ul>
                                {
                                    dataSocial.map((item,index)=> (
                                        <li key={index}><Link to="#"><i className={item.icon}></i></Link></li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottom">
                <div className="container">
                    <div className="bottom-inner">
                        Copyright © 2022 Bidzen | NFT Marketplace React Js Template. Designed by <a
                            href="https://themeforest.net/user/themesflat/portfolio"> Themesflat</a>
                    </div>
                </div>
            </div>
            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
      </div>
  );
};

export default FooterStyle2;
