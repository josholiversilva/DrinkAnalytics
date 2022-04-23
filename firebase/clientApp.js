import firebase from "firebase/app";
import 'firebase/auth'

const clientCredentials = {
    apiKey: "AIzaSyBdHVOvSvbqBO9IBszTxJ8YZlJ22gRh1ZA",
    authDomain: "boba-346206.firebaseapp.com",
    projectId: "boba-346206",
    storageBucket: "boba-346206.appspot.com",
    messagingSenderId: "290575140718",
    appId: "1:290575140718:web:f0c7d69ba62720a9b9237f",
    measurementId: "G-XYJ46J8GCX"
}

const firebaseClient = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)
    }
}

export default firebaseClient;