const DEV_URL = 'http://localhost:4444/dopomoga2022/us-central1/app';

const DEV = {
    PAYMENT_URL: `${DEV_URL}/api/payment`,
    CURRENCIES_URL: `${DEV_URL}/api/currencies`,
    SECRET_URL: `${DEV_URL}/api/secret`,
    TOTAL: `${DEV_URL}/api/total`
};

const PROD_URL = 'https://us-central1-dopomoga2022.cloudfunctions.net/app';

const PROD = {
    PAYMENT_URL: `${PROD_URL}/api/payment`,
    CURRENCIES_URL: `${PROD_URL}/api/currencies`,
    SECRET_URL:  `${PROD_URL}/api/secret`,
    TOTAL: `${PROD_URL}/api/total`
};

const DEFAULT = {
    REPORT: "https://docs.google.com/spreadsheets/d/1lLYAd7KDdl_56nqTtMKjNp3PQ7DSdQndoEWXPP8M7aA/edit#gid=0"
}


const CONFIG = process.env.NODE_ENV === 'development' ? DEV : PROD;

export default {...CONFIG, ...DEFAULT};
