import React, { useContext } from "react";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    var provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        storeAuthToken(); //call
        navigate("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        console.log(errorCode, errorMessage, email);
      });
  };

  //firebase jwt token
  const storeAuthToken = () => {
    
      auth
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        console.log(idToken);
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
};

export default Login;
