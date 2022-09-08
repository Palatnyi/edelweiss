import React from 'react';
import fireabseapp from './firebase-app';
import Main from './pages/Main/Main.jsx';

import translations from './translations.json';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';


const { LANGUAGES } = translations;

function EdelweissRouter() {
    const langs = Object.values(LANGUAGES);

    const routes = langs.map(lang => {
        return <Route path={`/${lang}`} element={<Main />} />
    });

    return (
        <Routes>
            <Route path="/" exact element={<Main />} />
            {routes}

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default EdelweissRouter;