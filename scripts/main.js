function writeUserData(email, firstName, lastName){
	firebase.database().ref('users/ ')
}

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
	apiKey: '<your-api-key>',
	authDomain: '<your-auth-domain>',
	databaseURL: '<your-database-url>',
	storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
