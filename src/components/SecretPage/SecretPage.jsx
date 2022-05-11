import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CONFIG from '../../config';
import logo from '../../images/logo.png';
import { Rings } from "react-loader-spinner";

import './SecretPage.scss';

function SecretPage() {
    const [result, setResult] = useState();

    const fetchResult = async () => {
        const resp = await axios.get(CONFIG.SECRET_URL);
        const res = resp && resp.data && resp.data.result;
        setResult(res);
    };

    useEffect(() => {
        fetchResult()
    }, []);

    return (
        <>
            <div className="secret">
                <Rings ariaLabel="loading-indicator" color={'#06ace6'} radius={180}/>
                {result && <div className="amount">{result}</div>}
                <img className="logo" src={logo} alt="" />
            </div>
        </>
    );
}

export default SecretPage;