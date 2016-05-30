// authentication.js

// Create the provider object
provider.addScope('email');
provider.addScope('password');

createUserWithEmailAndPassword(email, password) returns firebase.Promise containing non-null firebase.User
