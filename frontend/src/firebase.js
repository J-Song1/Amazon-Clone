import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBHT-2ktxWy3nDf4EFMYCeog4enzxlJT8g",
  authDomain: "clone-2a09e.firebaseapp.com",
  projectId: "clone-2a09e",
  storageBucket: "clone-2a09e.appspot.com",
  messagingSenderId: "25737127918",
  appId: "1:25737127918:web:f09b0ae7f0a078976190ff",
  measurementId: "G-K9572MHT5M"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {
  db,
  auth
}