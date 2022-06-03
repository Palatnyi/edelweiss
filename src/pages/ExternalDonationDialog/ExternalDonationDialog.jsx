import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CONFIG from '../../config.js';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header.jsx'
import HelpMatters from '../../components/HelpMatters/HelpMatters';
import DonationForm from '../../components/DonationForm/DonationForm';
import './ExternalDonationDialog.scss';


function ExternalDonationDialog() {
    const [currencies, setCurrencies] = useState([]);

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

    return (
        <>
            <Header />
            <div className="externalDonationDialog">
                <DonationForm currencies={currencies} />
                <HelpMatters />
            </div>
            <Footer />
        </>
    );
}

export default ExternalDonationDialog;