import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

