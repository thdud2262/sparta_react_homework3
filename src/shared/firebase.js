// firebase인증가져오기
import firebase from 'firebase/app';
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCRZfY5UcFDvmM1mdcsiB3gjrk9kKCBkFk",
  authDomain: "homework3-8513f.firebaseapp.com",
  projectId: "homework3-8513f",
  storageBucket: "homework3-8513f.appspot.com",
  messagingSenderId: "547531708982",
  appId: "1:547531708982:web:63bd41d3db92d169159697",
  measurementId: "G-11Z5ZQSPQN"
};


firebase.initializeApp(firebaseConfig)


const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth()
export { auth, apiKey };
