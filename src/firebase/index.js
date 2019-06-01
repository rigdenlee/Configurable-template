import firebase from 'firebase/app';
import 'firebase/storage';
 
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAn_nfso1UNY2TB7VudNaKiI03rCE1gr1U",
authDomain: "configurable-template.firebaseapp.com",
databaseURL: "https://configurable-template.firebaseio.com",
projectId: "configurable-template",
storageBucket: "configurable-template.appspot.com",
messagingSenderId: "383397301142",
appId: "1:383397301142:web:299882c21b4f666c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase  as default }