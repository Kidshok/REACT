const firebaseConfig = {
	apiKey: "AIzaSyDDv-Xo27bnnbbsfJQpZiHSQlRoDCyg9QE",
	authDomain: "firt-project-61be6.firebaseapp.com",
	databaseURL: "https://firt-project-61be6-default-rtdb.firebaseio.com",
	projectId: "firt-project-61be6",
	storageBucket: "firt-project-61be6.appspot.com",
	messagingSenderId: "380694599463",
	appId: "1:380694599463:web:b0ee89337c4843bdbfbb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const profileRef = db.ref('profile');

export const chatRef = db.ref('chats');

export const messageRef = db.ref('messages');