// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';

// Add the Firebase products that you want to use
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFiFxYzQm6jRYLMKzGSJ5oY9k2nUxdyxM",
    authDomain: "shop-b562e.firebaseapp.com",
    projectId: "shop-b562e",
    storageBucket: "shop-b562e.appspot.com",
    messagingSenderId: "736323484844",
    appId: "1:736323484844:web:cdcf2d443fc8ec109f7309"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase