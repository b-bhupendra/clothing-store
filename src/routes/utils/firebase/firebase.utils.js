// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
         getAuth ,
         signInWithRedirect , 
         signInWithPopup , 
         GoogleAuthProvider
       } 
       from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}
    from 'firebase/firestore';



const firebaseConfig = {

  apiKey: "AIzaSyAzJqq_YBJrwRWMavOB8RXuVulq1Sa5z7o",
  authDomain: "crwn-clothing-db-e59a4.firebaseapp.com",
  projectId: "crwn-clothing-db-e59a4",
  storageBucket: "crwn-clothing-db-e59a4.appspot.com",
  messagingSenderId: "909686388420",
  appId: "1:909686388420:web:e17dc8bc3a4cbc44387b91"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({

    prompt: "select_account" 

});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();



export const createUserDocumentFromAuth = async (userAuth) => {

    const userDocRef = doc(db, 'users' ,userAuth.uid);

    console.log(userDocRef);
    
    const userSnapshot = await getDoc(userDocRef); // getting the data
    console.log("Logging in");
    console.log(userSnapshot);

    // check if user data exist
    // return userDataexist
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{

            await setDoc(userDocRef,{
                displayName,
                email,
                createAt
               } );

        }
        catch(error){
            console.log("Error Creating the User ",error.message);
        }

    }

    // if user data does not exist
    // create / set the document with the data from userAuth 
}