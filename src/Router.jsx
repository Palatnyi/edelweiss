import React from 'react';
import App from './App.jsx';
import translations from './translations.json';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './components/Confirmation/Confirmation.jsx';
import NotFound from './components/NotFound/NotFound.jsx';


const { LANGUAGES } = translations;

function EdelweissRouter() {
    const routes = Object.values(LANGUAGES).map(lang => {
        return <Route path={`/${lang}`} element={<App />} />
    });

    const confirmationRoutes = Object.values(LANGUAGES).map(lang => {
        return <Route path={`/${lang}/confirmation`} element={<Confirmation />} />
    });

    return (
        <Routes>
            <Route path="/" exact element={<App />} />
            {routes}

            <Route path="/confirmation" element={<Confirmation />} />
            {confirmationRoutes}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default EdelweissRouter;