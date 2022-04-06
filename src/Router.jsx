import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { useBrowserLanguage } from './hooks';
import Payment from './Payment.jsx';
import App from './App.jsx';

function EdelweissRouter() {
    useBrowserLanguage();

    return (
        <Routes>
            <Route path=":lang" element={<App />} />
            {/* <Route path=":lang/paymesnt" element={<Payment />} /> */}
        </Routes>
    );
}

export default EdelweissRouter;