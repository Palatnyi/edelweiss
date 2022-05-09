import React from 'react';
import { useTranslations } from '../../hooks';
import './Report.scss';

function Report() {
    const translate = useTranslations();
    const onClick = () => {
        window.location.href = "https://www.facebook.com/103488965659374/posts/122606940414243/?d=n";
    }
    return (
        <div className="reportBtn report-mobile" onClick={onClick}>{translate("common.report")}</div>
    );
}

export default Report;