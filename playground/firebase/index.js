import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDxa7SrA0-DE7bAxjH47_TrC3KZF1-pZDI",
	authDomain: "todoapp-16f28.firebaseapp.com",
	databaseURL: "https://todoapp-16f28.firebaseio.com",
	projectId: "todoapp-16f28",
	storageBucket: "todoapp-16f28.appspot.com",
	messagingSenderId: "806036534646"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunnig: true,
	user: {
		name: 'Rushma',
		age: 24
	}
});


// --------------------
// UPDATING
// --------------------

// firebaseRef.update({
// 	isRunnig: false,
// 	'app/name': "Todo Application"
// });

// firebaseRef.child('app').update({
// 	name: 'Todo Application'
// }).then(() => {
// 	console.log('Update worked!')
// }, (e) => {
// 	console.log('Update failed!')
// });


// --------------------
// DELETING
// --------------------

// firebaseRef.remove(); // wipes everything

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
// 	version: '2.0',
// 	name: null
// });


// --------------------
// FETCHING
// --------------------

// fetching entire database
// firebaseRef.once('value').then((snapshot) => {
// 	console.log('Got entire database', snapshot.val());
// }, (e) => {
// 	console.log('Unable to fetch value', e);
// });

// fetching child values
// firebaseRef.child('app').once('value').then((snapshot) => {
// 	console.log('Got entire database app', snapshot.key, snapshot.val());
// }, (e) => {
// 	console.log('Unable to fetch value', e);
// });

// listening more than one triggering of event; database changes
// var logData = (snapshot) => {
// 	console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value', logData);

// removing on listeners
// firebaseRef.off(); // removes all listeners
// firebaseRef.off(logData); // removes only that listener

// firebaseRef.update({isRunnig: false});


// --------------------
// ARRAYS
// --------------------

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
// 	text: 'Walk the dog!'
// }); 

// newNoteRef.set({
// 	text: 'Walk the dog'
// });

// console.log('Todo ID', newNoteRef.key);