import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCWu9JCPsHyJvYJhmV-rLaw_HvbEmfchgo",
  authDomain: "my-portfolio-998ce.firebaseapp.com",
  databaseURL: "https://my-portfolio-998ce.firebaseio.com",
  projectId: "my-portfolio-998ce",
  storageBucket: "my-portfolio-998ce.appspot.com",
  messagingSenderId: "294587390415"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
