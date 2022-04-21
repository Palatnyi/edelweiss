import React from 'react';
import App from './App.jsx';
import translations from './translations.json';
import { Routes, Route } from 'react-router-dom';
import Confirmation from './components/Confirmation/Confirmation.jsx';

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
            <Route path="*" element={<div>not found</div>} />
        </Routes>
    );
}

export default EdelweissRouter;