import firebase from 'firebase/app';
//we import firebase and choose only features we need. it's required
//firebase-app - The core firebase client (required).
import 'firebase/firestore';//firebase/firestore for database(Cloud Firestore)
import 'firebase/auth';//for firebase authentications
//these features will be automatically attached to firebase keyword

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyD6hpwNNlfX4qiAWpRn7ySuaF-P8GDUSo0",
    authDomain: "sclothing-987f6.firebaseapp.com",
    projectId: "sclothing-987f6",
    storageBucket: "sclothing-987f6.appspot.com",
    messagingSenderId: "260530902636",
    appId: "1:260530902636:web:131b274956f88b3b942a49",
    measurementId: "G-VJTFFJEDGX"
};

//take user object what we got from authentication library and store in db
//when calling this async function provide userAuth object, and any additional data we could need(object)
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;//if userAuth object doesnt exist

    //check if user document in users collection already exist 
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    //using snapshot we will know if there is data there. if we stored that user user object
    const snapShot = await userRef.get();//check if document with that id exists

    //if data doesnt exist we actually want to create peace of data there
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;//destructuring userAuth object
        const createdAt = new Date();

        try {
            //.set is create method. create document in users collection from userAuth object
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })//store displayName email and whatever is in ...aditionalDAta
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    //return userRef object. we might want userRef code for something
    return userRef;
}

// Initialize Firebase, and pass config
firebase.initializeApp(config);


export const auth = firebase.auth();//we export this firebase.auth method,
//so we can use it anywhere(related to authentication)
export const firestore = firebase.firestore();//export this method to use anywhere where we
//want to store data

//set up google authentication utility. auth.GoogleAuthProvider() gives acccess
const provider = new firebase.auth.GoogleAuthProvider();//GoogleAuthProvider class

//it takes couple custom parameters. select_account means that we want to trigger google popup
provider.setCustomParameters({ prompt: 'select_account' })//when we use this GoogleAuthProvider for auth and sign in
//equal to function that calls signInWithPopup method. it takes provider class that we made
export const signInWithGoogle = () => auth.signInWithPopup(provider);//so it will use google sign in (not twitter or other)

//export default firebase in case we want whole library
export default firebase;

