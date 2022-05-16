import React from 'react';
import CONFIG from '../../config';
import { useTranslations } from '../../hooks';
import './Report.scss';

function Report() {
    const translate = useTranslations();
    const onClick = () => {
        window.location.href = CONFIG.REPORT;
    }
    return (
        <div className="reportBtn report-mobile" onClick={onClick}>{translate("common.report")}</div>
    );
}

export default Report;