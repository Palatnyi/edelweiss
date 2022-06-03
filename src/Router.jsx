import React from 'react';
import Main from './pages/Main/Main.jsx';
import ExternalDonationDialog from './pages/ExternalDonationDialog/ExternalDonationDialog.jsx';

import translations from './translations.json';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './components/Confirmation/Confirmation.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import SecretPage from './components/SecretPage/SecretPage.jsx';


const { LANGUAGES } = translations;

function EdelweissRouter() {
    const langs = Object.values(LANGUAGES);

    const routes = langs.map(lang => {
        return <Route path={`/${lang}`} element={<Main />} />
    });

    const confirmationRoutes = langs.map(lang => {
        return <Route path={`/${lang}/confirmation/:currency/:amount`} element={<Confirmation />} />
    });

    const donateRoutes = langs.map(lang => {
        return <Route path={`/${lang}/donate`} element={<ExternalDonationDialog />} />
    })

    return (
        <Routes>
            <Route path="/" exact element={<Main />} />
            {routes}

            <Route path="/confirmation/:currency/:amount" element={<Confirmation />} />
            {confirmationRoutes}

            <Route path="/donate" exact element={<ExternalDonationDialog />} />
            {donateRoutes}

            <Route path="/secretpage" element={<SecretPage />} />
            <Route path="/" element={<SecretPage />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default EdelweissRouter;