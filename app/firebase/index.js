import firebase from 'firebase';

try{
	var config = {
		apiKey: "AIzaSyDxa7SrA0-DE7bAxjH47_TrC3KZF1-pZDI",
		authDomain: "todoapp-16f28.firebaseapp.com",
		databaseURL: "https://todoapp-16f28.firebaseio.com",
		projectId: "todoapp-16f28",
		storageBucket: "todoapp-16f28.appspot.com",
		messagingSenderId: "806036534646"
	};
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;