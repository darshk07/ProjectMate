// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0iRqQR-9UUIUKovaZQ3dG8LI99rhRJpY",
    authDomain: "projectmate-2c975.firebaseapp.com",
    databaseURL: "https://projectmate-2c975-default-rtdb.firebaseio.com",
    projectId: "projectmate-2c975",
    storageBucket: "projectmate-2c975.appspot.com",
    messagingSenderId: "158748362348",
    appId: "1:158748362348:web:b28813e282c004c2a9ba49",
    measurementId: "G-6LC9DLC10R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}