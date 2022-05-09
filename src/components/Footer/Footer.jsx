import React from 'react';
import { useTranslations } from '../../hooks';
import './Footer.scss';


function Footer() {
    const translate = useTranslations();

    return (
        <div className="footer">
            <div className="left">
                <div><a href="#about">{translate("menu.aboutWar")}</a></div>
                <div><a href="#team">{translate("menu.ourTeam")}</a></div>
                <div><a href="#needs">{translate("menu.ourNeeds")}</a></div>
                <div><a href="#donate">{translate("menu.donate")}</a></div>
            </div>
            <div className="right">
                <div>{translate("footer.contactUs")}</div>
                <div className="skip-style">
                    {translate("footer.email")}
                </div>
                <div className="hidden"><br /></div>
                <div>{translate("footer.ukraine")} {new Date().getFullYear()}</div>
            </div>
        </div>
    );
}

export default Footer;