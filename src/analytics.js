import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3DO7HOpha0281Djvc5DeGsiuN_fk8asA",
    authDomain: "dopomoga2022.firebaseapp.com",
    databaseURL: "https://dopomoga2022-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dopomoga2022",
    storageBucket: "dopomoga2022.appspot.com",
    messagingSenderId: "802300321448",
    appId: "1:802300321448:web:598550dd86003e568dec9d",
    measurementId: "G-F9WGD48NK6"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);

export default function logEdelweissEvent(data, message) {
    // if(process.env.NODE_ENV !== 'development') {
        logEvent(analytics, message, data);
    // }
}

