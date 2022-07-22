import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Create user account
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
  /// Sign in user email and pass
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Update User Name when register
  const saveUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {})
      .catch((error) => {});
  };
  /// LogOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  /// State check
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
    return () => unsubscribed();
  }, [auth]);

  return {
    signInWithGoogle,
    user,
    saveUserName,
    logOut,
    signInWithEmail,  signUpWithEmail,
  };
};
export default useFirebase;
