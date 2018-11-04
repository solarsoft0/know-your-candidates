// src/firebase.js
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyArBC64itOx2yC7RnUba94cnEQvpV1n6dU",
    authDomain: "know-your-candidates.firebaseapp.com",
    databaseURL: "https://know-your-candidates.firebaseio.com",
    projectId: "know-your-candidates",
    storageBucket: "know-your-candidates.appspot.com",
    messagingSenderId: "855645442144"
};
firebase.initializeApp(config);


export default firebase;

export const database = firebase.database();