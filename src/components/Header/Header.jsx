import React, { useState } from 'react';
import { useTranslations, useCustomLang } from '../../hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";

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

    const { lang } = useCustomLang();

    const goAboutUs = () => {
        const link = !!lang ? `/${lang}` : '/'
        navigate(link);
    };

    const goDonate = () => {
        const link = !!lang ? `/${lang}/donate` : '/donate';
        navigate(link);
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
                            <div onClick={goAboutUs}><a>{translate("menu.aboutWar")}</a></div>
                            <div onClick={goDonate}><a>{translate("menu.donate")}</a></div>
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
                    <div><a>{translate("menu.aboutUs")}</a></div>
                    <div><a>{translate("menu.media")}</a></div>
                    <div><a>{translate("menu.help")}</a></div>
                    <div><a>{translate("menu.donate")}</a></div>
                </div>
                <div className="actions">
                    {props.desktopActions}
                </div>
            </div>
        </>
    );
}

export default Header;