import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9DH_4DPxwYAPgUIPwo7xvOoG8EqdGImk",
    authDomain: "serendib-e7386.firebaseapp.com",
    projectId: "serendib-e7386",
    storageBucket: "serendib-e7386.appspot.com",
    messagingSenderId: "489984625478",
    appId: "1:489984625478:web:d5be4b3512288bb8db3347",
    measurementId: "G-S34NX271LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Conditionally initialize analytics
let analytics = null;
if (typeof window !== 'undefined') {
    // We're in the browser, so we can use analytics
    import('firebase/analytics').then((module) => {
        const { getAnalytics } = module;
        analytics = getAnalytics(app);
    });
}

export { auth, analytics };