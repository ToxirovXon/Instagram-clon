import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyCNEH-7r1F7GGODsivWs5q0LHVcdkyhHmw",
  authDomain: "instagram-b4ef8.firebaseapp.com",
  projectId: "instagram-b4ef8",
  storageBucket: "instagram-b4ef8.appspot.com",
  messagingSenderId: "17306731028",
  appId: "1:17306731028:web:54d4cb54b170100b17dd01"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
