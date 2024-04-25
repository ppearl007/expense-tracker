import React from "react";
import { auth, provider } from "../../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result)

      const authInfo = {
        userID: result.user.uid,
        name: result.user.displayName,
        profilePhoto: result.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/expense-tracker"); //go to expense tracker page once logged in
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      <p className="">Sign in with Google to Continue</p>
      <button className="bg-teal-500 hover:bg-teal-400 text-white rounded-md p-1" onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};
