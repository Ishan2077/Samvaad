// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: 'AIzaSyDBBRRr3hnlgZiSjUJ94RjtWtLRdU0PJDk',
  authDomain: 'samvaad-a9fb7.firebaseapp.com',
  projectId: 'samvaad-a9fb7',
  storageBucket: 'samvaad-a9fb7.appspot.com',
  messagingSenderId: '121161745417',
  appId: '1:121161745417:web:f4e124a0903df8d52e24d8',
  measurementId: 'G-KQH6XPK9XK'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
