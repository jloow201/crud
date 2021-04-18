import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC_OR0Ciui71-LRL-Wofu2Opp0gjyrPQkg",
    authDomain: "crud-ba536.firebaseapp.com",
    projectId: "crud-ba536",
    storageBucket: "crud-ba536.appspot.com",
    messagingSenderId: "369632929563",
    appId: "1:369632929563:web:ad953e12c7e93fa34455be"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)