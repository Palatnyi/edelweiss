import React from 'react';
import { useTranslations, useCustomLang } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';


function Footer() {
    const navigate = useNavigate();
    const { lang } = useCustomLang();
    const translate = useTranslations();

    const goToSection = () => {
        const link = !!lang ? `/${lang}` : '/'
        navigate(link);
    }

    return (
        <div className="footer">
            <div className="left">
                <div onClick={goToSection}><a>{translate("menu.aboutWar")}</a></div>
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