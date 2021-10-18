import * as  firebase from 'firebase';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDZzzDgYxfxSP4Pnt_hdcpT5jtSiUoc4-c",
    authDomain: "reactapp-1d5b7.firebaseapp.com",
    databaseURL: "https://reactapp-1d5b7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reactapp-1d5b7",
    storageBucket: "reactapp-1d5b7.appspot.com",
    messagingSenderId: "138529916186",
    appId: "1:138529916186:web:9a4b14843ef962034618a3"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.database();