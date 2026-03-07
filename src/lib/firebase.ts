import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZaFdnaceNxeGovtgkumJG9-Be1g08Mdc",
    authDomain: "wedding-6d30d.firebaseapp.com",
    projectId: "wedding-6d30d",
    storageBucket: "wedding-6d30d.firebasestorage.app",
    messagingSenderId: "644489209076",
    appId: "1:644489209076:web:9ad58b2c520338620aaaa1",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
// export const storage = getStorage(app);
