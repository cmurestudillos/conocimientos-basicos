import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAIlpXTVy3-W1Yx3X_9ss9JvvdyldSSinc",
    authDomain: "crud-react-c1d74.firebaseapp.com",
    databaseURL: "https://crud-react-c1d74.firebaseio.com",
    projectId: "crud-react-c1d74",
    storageBucket: "crud-react-c1d74.appspot.com",
    messagingSenderId: "327124793821",
    appId: "1:327124793821:web:67718551fccd8be80c9e34",
    measurementId: "G-KCLYHB29MB"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;