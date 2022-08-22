import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslations, useCustomLang } from '../../hooks';

import fb from '../../images/facebook-social.png'
import instagram from '../../images/instagram-social.png';
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
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> DOPOMOGA2022
            </div>
            <div className="middle">
                <div>{translate("footer.contactUs")}</div>
                <div className="skip-style">
                    {translate("footer.email")}
                </div>
            </div>
            <div className="right">
                <a href="https://www.facebook.com/dopomoga2022">
                    <img src={fb} alt="" />
                </a>
                <a href="https://instagram.com/dopomoga2022ua?igshid=YmMyMTA2M2Y=">
                    <img src={instagram} alt="" />
                </a>
            </div>
        </div>
    );
}

export default Footer;