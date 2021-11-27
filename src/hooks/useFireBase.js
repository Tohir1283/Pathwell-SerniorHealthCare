import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({});

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // console.log(user);

  // const registerNewuser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  const processLogIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    setIsLoading,
    loggedInUser,
    setLoggedInUser,
    // registerNewuser,
    processLogIn,
    isLoading,
    auth,
    signInUsingGoogle,
    user,
    setUser,
    error,
    setError,
    logOut,
  };
};

export default useFirebase;
