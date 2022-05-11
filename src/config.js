const DEV_URL = 'http://localhost:4444/dopomoga2022/us-central1/app';

const DEV = {
    PAYMENT_URL: `${DEV_URL}/api/payment`,
    CURRENCIES_URL: `${DEV_URL}/api/currencies`,
    SECRET_URL: 'https://us-central1-dopomoga2022.cloudfunctions.net/app/api/secret'
};

const PROD_URL = 'https://us-central1-dopomoga2022.cloudfunctions.net/app';

const PROD = {
    PAYMENT_URL: `${PROD_URL}/api/payment`,
    CURRENCIES_URL: `${PROD_URL}/api/currencies`,
    SECRET_URL: 'https://us-central1-dopomoga2022.cloudfunctions.net/app/api/secret'
};


const CONFIG = process.env.NODE_ENV === 'development' ? DEV : PROD;

export default CONFIG;
