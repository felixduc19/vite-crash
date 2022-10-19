import { useEffect, useState } from "react";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";

import { auth } from "@/config";

import { UserCredential } from "firebase/auth";

interface Props {}

interface UserCredentialFacebook extends UserCredential {
  _tokenResponse: {
    oauthAccessToken: string;
  };
}

const Login = (props: Props) => {
  const [img, setImg] = useState("");
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);

  if (userGoogle) console.log(userGoogle);

  useEffect(() => {
    if (userFacebook) {
      const { _tokenResponse } = userFacebook as UserCredentialFacebook;
      console.log(userFacebook);
      setImg(`${userFacebook?.user.photoURL}?access_token=${_tokenResponse.oauthAccessToken}`);
    }
  }, [userFacebook]);

  return (
    <div className="login">
      <p>Please click button below to sign in!</p>
      <button className="github mr-5">Log In With Github</button>
      <button className="facebook mr-5" onClick={() => signInWithFacebook()}>
        {loadingFacebook ? "Loading..." : " Log In With Facebook"}
      </button>
      <button className="google" onClick={() => signInWithGoogle()}>
        Log In With Google
      </button>
      <img src={img} />
    </div>
  );
};

export default Login;
