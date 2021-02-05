import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDoB0gVKcS3AU84E3RgUG0CCRrKzwV_XEw",
    authDomain: "booksanta-34abc.firebaseapp.com",
    projectId: "booksanta-34abc",
    storageBucket: "booksanta-34abc.appspot.com",
    messagingSenderId: "1036582660861",
    appId: "1:1036582660861:web:3f1355cfc2f14e506aec94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()