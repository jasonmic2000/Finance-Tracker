import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD1aikl2Q6G3weRHQFJQMpF5cGR6Esx0iQ",
    authDomain: "mymoney-20484.firebaseapp.com",
    projectId: "mymoney-20484",
    storageBucket: "mymoney-20484.appspot.com",
    messagingSenderId: "47260574081",
    appId: "1:47260574081:web:8e7d5c02ecf1855fff0880"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }