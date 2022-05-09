import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import { useTranslations } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";

import logo from '../../images/logo.png';
import close from '../../images/close.png';
import fb from '../../images/facebook-social.png'
import hamburger from '../../images/hamburger.png';
import instagram from '../../images/instagram-social.png';

import './Header.scss';

function Header() {
    const [showHamburger, toggleShowHamburger] = useState(true);
    const icon = showHamburger ? hamburger : close;

    const navigate = useNavigate();
    const translate = useTranslations();
    const onChange = ({ value }) => {
        navigate(`/${value}`);
    };

    const options = translate("header.languageSelector.options");
    const languages = translate("header.languageSelector.languages");
    const mobileOptions = translate("header.languageSelector.mobileOptions");
    const placeholder = translate("header.languageSelector.placeholder");
    const defaultOption = translate("header.languageSelector.defaultValue");

    const renderLanguageSelectorMobile = (options) => {


        return options.map(({ label, value, flag }) => {

            const onClick = () => {
                navigate(`/${value}`)
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
                    <img src={logo} alt="logo" rel="preload" />
                </div>
                <div className="icon" onClick={() => toggleShowHamburger(!showHamburger)}>
                    <img src={icon} rel="preload" alt="mobile-header-icon" />
                </div>
            </div>

            {
                !showHamburger && <div className="mobile-menu">
                    <div className="empty"></div>
                    <div className="menu-holder">
                        <div className="top">
                            <div onClick={() => toggleShowHamburger(true)}><a href="#about">{translate("menu.aboutWar")}</a></div>
                            <div onClick={() => toggleShowHamburger(true)}><a href="#team">{translate("menu.ourTeam")}</a></div>
                            <div onClick={() => toggleShowHamburger(true)}><a href="#needs">{translate("menu.ourNeeds")}</a></div>
                            <div onClick={() => toggleShowHamburger(true)}><a href="#donate">{translate("menu.donate")}</a></div>
                        </div>

                        <div className="bottom">
                            <div className="lang-title">{languages}</div>
                            {renderLanguageSelectorMobile(mobileOptions)}
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/dopomoga2022">
                                <img src={fb} rel="preload" alt="fb" />
                            </a>
                            <a href="https://instagram.com/dopomoga2022ua?igshid=YmMyMTA2M2Y=">
                                <img src={instagram} rel="preload" alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            }

            <div className="header-desktop">

                <div className="name">
                    <img src={logo} alt="logo" rel="preload" />
                </div>

                <div className="menu">
                    <div><a href="#about">{translate("menu.aboutWar")}</a></div>
                    <div><a href="#team">{translate("menu.ourTeam")}</a></div>
                    <div><a href="#needs">{translate("menu.ourNeeds")}</a></div>
                    <div><a href="#donate">{translate("menu.donate")}</a></div>
                    <Dropdown
                        options={options}
                        onChange={onChange}
                        value={defaultOption}
                        placeholder={placeholder}
                        controlClassName="langSelector"
                    />
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/dopomoga2022">
                        <img src={fb} alt="" rel="preload" />
                    </a>
                    <a href="https://instagram.com/dopomoga2022ua?igshid=YmMyMTA2M2Y=">
                        <img src={instagram} alt="" rel="preload" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;