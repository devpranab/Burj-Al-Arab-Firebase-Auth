import React from 'react';
import {auth} from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const handleGoogleSignIn = () => {

        var provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            var user = result.user;
            console.log(user);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode,errorMessage,email);
        });
    }

    return (
        <div>
        <h1>This is Login</h1>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;