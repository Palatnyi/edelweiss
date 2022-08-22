import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useTranslations } from '../../../../hooks';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './DonateRequisities.scss';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Requisite(props) {
    const { data, title } = props;
    const translate = useTranslations();
    const [showCopySnackbar, setShowCopySnackBar] = useState(false);
    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value);
        setShowCopySnackBar(true)
    }
    return (
        <>
            <Snackbar autoHideDuration={5000} open={showCopySnackbar} onClose={() => setShowCopySnackBar(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setShowCopySnackBar(false)} >
                    {translate('requisities.copied')}
                </Alert>
            </Snackbar>
            <div className="requisite-holder">
                <div className="title">{title}</div>
                <div className="requisite">
                    {data.map(item => {
                        return (
                            <div className="requisite-value" key={item.value} onClick={() => copyToClipboard(item.value)}>
                                <div className="title">{item.label}</div>
                                <div className="value">{item.value}</div>
                                <div className="copyIcon">
                                    <ContentCopyIcon />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

function DonateRequisities() {
    const translate = useTranslations();

    const ibanUAH = translate("requisities.requisitiesTypes.ibanUAH");
    const ibanUahTitle = translate("requisities.requisitiesTypes.ibanUahTitle");

    const ibanUSD = translate("requisities.requisitiesTypes.ibanUSD");
    const ibanUsdTitle = translate("requisities.requisitiesTypes.ibanUsdTitle");

    const ibanEUR = translate("requisities.requisitiesTypes.ibanEUR");
    const ibanEurTitle = translate("requisities.requisitiesTypes.ibanEurTitle");

    const ibanGBP = translate("requisities.requisitiesTypes.ibanGBP");
    const ibanGBPTitle = translate("requisities.requisitiesTypes.ibanGBPTitle");

    const otherWays = translate("requisities.requisitiesTypes.otherWays");
    const otherWaysTitle = translate("requisities.requisitiesTypes.otherWaysTitle");

    return (
        <>
            <div className="donate-requisities">
                <Requisite data={ibanUAH} title={ibanUahTitle} />
                <Requisite data={ibanUSD} title={ibanUsdTitle} />
                <Requisite data={ibanEUR} title={ibanEurTitle} />
                <Requisite data={ibanGBP} title={ibanGBPTitle} />
                <Requisite data={otherWays} title={otherWaysTitle} />
            </div>
        </>
    );
}

export default DonateRequisities;