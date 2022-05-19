import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CONFIG from './config.js';
import { useTranslations, useCustomLang } from './hooks';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import logEdelweissEvent from './analytics.js';
import Team from './components/Team/Team.jsx';
import Donate from './components/Donate/Donate.jsx';
import Report from './components/Report/Report.jsx';
import Footer from './components/Footer/Footer.jsx';
import Loader from './components/Loader/Loader.jsx';
import Header from './components/Header/Header.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import AboutWar from './components/AboutWar/AboutWar.jsx';
import Equipment from './components/Equipment/Equipment.jsx';

import HelpMatters from './components/HelpMatters/HelpMatters.jsx';
import DonationDialog from './components/DonationDialog/DonationDialog.jsx';
import OtherFundraising from './components/OtherFundraising/OtherFundRaising.jsx';
import DonateProgressBar from './components/DonateProgressBar/DonateProgressBar.jsx';

import './App.scss';
import 'react-dropdown/style.css';


function Edelweiss() {
  const translate = useTranslations();
  const [currencies, setCurrencies] = useState([]);
  const [showLoader, toggleLoader] = useState(false);
  const [showDialog, toggleShowDialog] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  useEffect(() => {

		axios.get(CONFIG.CURRENCIES_URL)
			.then(response => {
				if (response.data && response.data.data) {
					setCurrencies(response.data.data);
				}
			})
			.catch(error => {
				console.log('error', error);
			});
	}, [])

  function onDonate(params) {

    console.log('LOG 2022:', CONFIG.PAYMENT_URL);
    window.fbq('track', 'InitiateCheckout', {currency: params.currency, value: params.amount});

    toggleShowDialog(false);
    toggleLoader(true);
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

  const openDonationDialog = (page) => {
    return () => {
      toggleShowDialog(true);
      logEdelweissEvent({
        page,
      }, 'CLICK_DONATE_BUTTON');

    };
  }

  return (
    <div className="edelweiss">
      {showLoader && <Loader />}
      {showDialog && <DonationDialog onDonate={onDonate} onClose={() => toggleShowDialog(false)} currencies={currencies} />}
      <Header />
      <Welcome openDonationDialog={openDonationDialog('Welcome')} />
      <AboutWar />
      <Team />
      <Equipment />
      <DonateProgressBar currencies={currencies}>
        <Donate onClick={openDonationDialog('Equipment')} />
        <Report />
      </DonateProgressBar>
      <OtherFundraising openDonationDialog={openDonationDialog('OtherFundraising')} />
      <HelpMatters openDonationDialog={openDonationDialog('HelpMatters')} />
      <Footer />
      <Snackbar open={errorSnackbar} onClose={() => setErrorSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setErrorSnackbar(false)} severity="error">
          {translate('payment.technicalIssue')}
        </Alert>
      </Snackbar>
    </div >
  );
}

export default Edelweiss;
