import React, { useState } from 'react';
import { useTranslations, useCustomLang } from '../../hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";
import Button from '../Button/Button';

import logo from '../../images/logo.png';
import close from '../../images/close.png';
import fb from '../../images/facebook-social.png'
import instagram from '../../images/instagram-social.png';
import hamburger from '../../images/hamburger.png';

import './Header.scss';

function Header(props) {
    const [showHamburger, toggleShowHamburger] = useState(true);
    const icon = showHamburger ? hamburger : close;
    const navigate = useNavigate();
    const translate = useTranslations();

    const languages = translate("header.languageSelector.languages");
    const mobileOptions = translate("header.languageSelector.mobileOptions");

    const location = useLocation();
    const isDonatePage = location.pathname.split('/').includes('donate');


    const goDonate = () => {
        window.open('https://secure.wayforpay.com/donate/d27ead814ba59');
    };

    const renderLanguageSelectorMobile = (options) => {

        return options.map(({ label, value, flag }) => {

            const onClick = () => {

                if (isDonatePage) {
                    navigate(`/${value}/donate`)
                } else {
                    navigate(`/${value}`)
                }

                toggleShowHamburger(true);
            };

            return (
                <div className={`lang ${value}`} onClick={onClick}>
                    <span>
                        {label}
                    </span>
                    <span>
                        <ReactCountryFlag countryCode={flag} />
                    </span>
                </div>
            );
        });
    }

    return (
        <>
            <div className="header-mobile">
                <div className="name">
                    <img src={logo} alt="logo" />
                </div>
                <div className="icon" onClick={() => toggleShowHamburger(!showHamburger)}>
                    <img src={icon} alt="mobile-header-icon" />
                </div>
            </div>

            {
                !showHamburger && <div className="mobile-menu">
                    <div className="empty"></div>
                    <div className="menu-holder">
                        <div className="top">
                            <div dangerouslySetInnerHTML={{ __html: `<a href="https://secure.wayforpay.com/button/bfe5bb20e1f26" style="display:inline-block!important;background:#2B3160 url('https://s3.eu-central-1.amazonaws.com/w4p-merch/button/bg1x2.png') no-repeat center right;background-size:cover;width: 320px!important;height:54px!important;border:none!important;padding:18px!important;text-decoration:none!important;box-shadow:3px 2px 8px rgba(71,66,66,0.22)!important;text-align:left!important;box-sizing:border-box!important;" onmouseover="this.style.opacity='0.8';" onmouseout="this.style.opacity='1';"><div style="font-family:Arial,sans-serif!important;font-weight:bold!important;font-size:14px!important;color:#ffffff!important;line-height:!important;vertical-align:middle!important;">${translate('header.mobileSubscribe')}</div></a>`}}>
                            </div>
                            <Button onClick={goDonate}>
                                {translate("menu.donate")}
                            </Button>
                        </div>

                        <div className="bottom">
                            <div className="lang-title">{languages}</div>
                            {renderLanguageSelectorMobile(mobileOptions)}
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/dopomoga2022">
                                <img src={fb} alt="fb" />
                            </a>
                            <a href="https://instagram.com/dopomoga2022ua?igshid=YmMyMTA2M2Y=">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            }

            <div className="header-desktop">

                <div className="name">
                    <img src={logo} alt="logo" />
                </div>

                <div className="menu">
                    <div><a href="#team">{translate("menu.aboutUs")}</a></div>
                    <div><a href="#media">{translate("menu.media")}</a></div>
                    <div><a href="#help">{translate("menu.help")}</a></div>
                    <div><a href="#donate">{translate("menu.donate")}</a></div>
                </div>
                <div className="actions">
                    {props.desktopActions}
                </div>
            </div>
        </>
    );
}

export default Header;