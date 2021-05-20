import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBZ7T5PCBSYIClir6o67jw8J_Ojx4cyBjg",
    authDomain: "netdrinks-coderhouse.firebaseapp.com",
    projectId: "netdrinks-coderhouse",
    storageBucket: "netdrinks-coderhouse.appspot.com",
    messagingSenderId: "802226325427",
    appId: "1:802226325427:web:e8d11279db56bb20f2adc6"
})

export const getFirebase = () => app

export const getFireStore = () => firebase.firestore(app)
