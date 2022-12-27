
import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";



import { 

      auth
    , signInWithGooglePopup 
    , createUserDocumentFromAuth
    , signInWithGoogleRedirect


} from "../utils/firebase/firebase.utils";


// import { async } from "@firebase/util";



const SignIn = () =>   {

    useEffect(() => {

        async function fetchData(){
 
            const response = await getRedirectResult(auth)
         
            if (response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
         
            }
        }
        fetchData()

    }, []);

    async function logGoogleUser() {


        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log({user});

    }

    return (
        <div>

            <h1>

                Sign In Page

            </h1>

            <button onClick={logGoogleUser}>

                Sign in With Google Popup

            </button>
            <button onClick={signInWithGoogleRedirect}>

                Sign in With Google Redirect

            </button>
        </div>

    );

};

export default SignIn;