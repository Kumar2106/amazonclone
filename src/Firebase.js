import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAE5_FFAEOj3bw-8vxUdSrHIfwv_tuKN-U",
  authDomain: "clone-10c57.firebaseapp.com",
  databaseURL: "https://clone-10c57.firebaseio.com",
  projectId: "clone-10c57",
  storageBucket: "clone-10c57.appspot.com",
  messagingSenderId: "475290807341",
  appId: "1:475290807341:web:1bdfd497fb72e822b35ca4",
  measurementId: "G-6GN2QK0S9C"

});


const auth = firebase.auth();

export { auth};