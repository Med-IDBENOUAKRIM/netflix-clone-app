import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAvj7yYYlv3RCE0AcDj0ClfnX69yUMFi0w",
    authDomain: "netflix-clone-build-91faa.firebaseapp.com",
    projectId: "netflix-clone-build-91faa",
    storageBucket: "netflix-clone-build-91faa.appspot.com",
    messagingSenderId: "333812050072",
    appId: "1:333812050072:web:ec4b9a4a8473b842f548ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;