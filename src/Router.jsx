import React from 'react';
import fireabseapp from './firebase-app';
import Main from './pages/Main/Main.jsx';
import { useBrowserLanguage } from './hooks';
import translations from './translations.json';
import { Routes, Route, useParams } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.jsx';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';


function EdelweissRouter() {
    useBrowserLanguage();

    return (
        <Routes>
            <Route path="/:lang">
                <Route path="" exact element={<Main />} />
                <Route path="project/:id" element={<ProjectDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default EdelweissRouter;
