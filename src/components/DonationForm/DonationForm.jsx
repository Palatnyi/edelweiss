import React, { useRef, useState } from 'react';
import axios from 'axios';
import urlJoin from 'url-join';
import CONFIG from '../../config.js';
import isEmail from 'validator/lib/isEmail';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import DonateBtn from '../Donate/Donate.jsx';
import ReactCountryFlag from "react-country-flag";
import Loader from '../../components/Loader/Loader.jsx';
import { useTranslations, useCustomLang, getCurrencyMultiplier } from '../../hooks';
import translations from '../../translations.json';
import './DonationForm.scss';

const { CURRENCIES } = translations;

function Block({ children, style, selected = false, onClick = () => { } }) {
    const hightlightClassname = selected ? 'highLightBlock' : null;
    return (
        <div onClick={onClick} className={`donationFormBlock ${hightlightClassname}`} style={style}>
            {children}
        </div>
    );
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function DonationForm({ currencies }) {
    const emailRef = useRef(null);
    const amountRef = useRef(null);
    const { lang } = useCustomLang();
    const translate = useTranslations();
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState();
    const [showLoader, toggleLoader] = useState(false);
    const [errorSnackbar, setErrorSnackbar] = useState(false);
    const [currentCurrency, setCurrentCurrency] = useState(CURRENCIES[lang]);


    const onOtherAmountClick = () => {
        const amounts = translate("donationForm.amounts");
        amountRef.current.focus();
        setAmount(amounts.slice(-1)[0]);
        setCustomAmount('');

    }

    const renderCurrencies = () => {
        const currencies = translate("donationForm.currencies");
        return currencies.map(({ countryCode, currency, value }) => {
            const selected = currentCurrency === value;
            const setCurrency = () => setCurrentCurrency(currency);

            return <Block selected={selected} onClick={setCurrency} > <ReactCountryFlag countryCode={countryCode} /> {currency}</Block>
        });
    }

    const renderAmounts = () => {
        const amounts = translate("donationForm.amounts");

        const onClick = (val) => {
            setAmount(val);
            setCustomAmount('');

            if (typeof val === 'string') {
                onOtherAmountClick();
            }
        }

        return amounts.map(value => {
            return <Block selected={value === amount} onClick={() => onClick(value)}>{value}</Block>
        })
    }

    const renderCustomAmount = () => {
        const amounts = translate("donationForm.amounts");

        const onChange = (event) => {
            console.log(event.target.value);
            setCustomAmount(event.target.value);
            setAmount(amounts.slice(-1)[0]);
        }

        return (
            <Block onClick={onOtherAmountClick} style={{ width: "100%" }}>
                <input type="number" value={customAmount} onChange={onChange} ref={amountRef} className="customAmountInput" />
            </Block>
        )
    }

    const renderEmail = () => {
        const onClick = () => {
            emailRef.current.focus();
        }

        const onChange = (event) => {
            setEmail(event.target.value);
        }

        return (
            <Block onClick={onClick} style={{ width: "100%" }}>
                <input value={email} onChange={onChange} ref={emailRef} type="email" className="customEmailInput" />
            </Block>
        )
    }

    const isValid = () => {
        return (isEmail(email) && (!!amount || !!customAmount) && !!currentCurrency) && currencies.length > 0;
    }

    const donate = () => {
        toggleLoader(true);
        let _amount = amount && typeof amount !== 'string' ? amount : parseInt(customAmount);

        const usdCurrency = getCurrencyMultiplier(currencies, 840);
        if (currentCurrency === "USD") {
            _amount = parseFloat(_amount * usdCurrency.rateBuy).toFixed(0)
        }

        const params = {
            customer_email: email,
            currency: 'UAH',
            amount: _amount,
            customer_lang: lang.toUpperCase(),
            result_url: urlJoin(window.location.href, 'confirmation', 'UAH', `${amount}`)
        };


        console.log('LOG 2022:', params);

        window.fbq('track', 'InitiateCheckout', { currency: params.currency, value: params.amount });

        axios.get(CONFIG.PAYMENT_URL, { params })
            .then(response => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                } else {
                    setErrorSnackbar(true);
                }
            })
            .catch((e) => {
                console.log(e)
                toggleLoader(false);
                setErrorSnackbar(true);
            });
    }


    return (
        <>
            {showLoader && <Loader /> }
            <div className="donationForm">
                <div className="dialogTitle">{translate("donationForm.dialogTitle")}</div>
                <div className="dialog">
                    <div className="selectCurrencyTitle">
                        {translate("donationForm.selectCurrencyTitle")}
                    </div>
                    <div className="currencies">
                        {renderCurrencies()}
                    </div>
                    <div className="amountsTitle">
                        {translate("donationForm.amountsTitle")}
                    </div>
                    <div className="amounts">
                        {renderAmounts()}
                    </div>
                    <div className="amountTitle">
                        {translate("donationForm.customAmountTitle")}
                    </div>
                    {renderCustomAmount()}
                    <div className="emailTitle">
                        {translate("donationForm.emailTitle")}
                    </div>
                    {renderEmail()}
                    <div className="donateHolder">
                        <DonateBtn disabled={!isValid()} onClick={donate} />
                    </div>
                </div>
            </div>
            <Snackbar open={errorSnackbar} onClose={() => setErrorSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setErrorSnackbar(false)} severity="error">
                    {translate('payment.technicalIssue')}
                </Alert>
            </Snackbar>
        </>

    );
}

export default DonationForm;
