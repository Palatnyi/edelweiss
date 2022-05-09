import React from 'react';
import { BallTriangle } from "react-loader-spinner";
import './Loader.scss';

function Loader() {
    return (
        <div className="loader">
            <div className="loader-holder">
                <BallTriangle color="#06ace6" radius="5" />
            </div>
        </div>
    );
}

export default Loader;