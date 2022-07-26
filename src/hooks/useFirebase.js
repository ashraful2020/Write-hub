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
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Create user account
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  /// Sign in user email and pass
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User Name when register
  const saveUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((e) => {
        const updateNameUser = { ...user, displayName: name };
        setUser(updateNameUser);
      })
      .catch((error) => {});
  };
  /// LogOut
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };
  /// State check
  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed();
  }, [auth, user.email]);

  return {
    signInWithGoogle,
    user,
    saveUserName,
    handleLogOut,
    signInWithEmail,
    signUpWithEmail,
    setIsLoading,
    isLoading,
  };
};
export default useFirebase;
