import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useBrowserLanguage } from './hooks';
import App from './App.jsx';

const supportedLang = { 'en': 'en', 'es': 'es', 'ua': 'ua' };

function EdelweissRouter() {
    useBrowserLanguage();

    return (
        <Routes>
            <Route path=":lang" element={<App />} />
        </Routes>
    );
}

export default EdelweissRouter;