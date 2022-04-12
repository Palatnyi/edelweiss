import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useBrowserLanguage } from './hooks';
import App from './App.jsx';

function EdelweissRouter() {
    useBrowserLanguage();

    return (
        <Routes>
            <Route path=":lang" element={<App />} />
        </Routes>
    );
}

export default EdelweissRouter;