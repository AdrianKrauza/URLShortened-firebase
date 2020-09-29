import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA_yZdiFFDl97ehCmtRq1YZ9j9Hh0mx-TY',
	authDomain: 'urlshortened-5bae6.firebaseapp.com',
	databaseURL: 'https://urlshortened-5bae6.firebaseio.com',
	projectId: 'urlshortened-5bae6',
	storageBucket: 'urlshortened-5bae6.appspot.com',
	messagingSenderId: '1025960011666',
	appId: '1:1025960011666:web:287bf616f80079f3af834b',
	measurementId: 'G-YTSWESL4F8'
};

firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore().collection('urls');
 export default db