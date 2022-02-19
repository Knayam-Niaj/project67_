import firebase from 'firebase';

// add SDK Firebase
//var firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAev2Oa480UbjB9ohNddzrKTJ6aDFxoUVY",
    authDomain: "team-voting-e764e.firebaseapp.com",
    databaseURL: "https://team-voting-e764e-default-rtdb.firebaseio.com",
    projectId: "team-voting-e764e",
    storageBucket: "team-voting-e764e.appspot.com",
    messagingSenderId: "670021664171",
    appId: "1:670021664171:web:87d5fa9023c0dc013566ee",
    measurementId: "G-GSRTW4GY03"
  }
//};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();