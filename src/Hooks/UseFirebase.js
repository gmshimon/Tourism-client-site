import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
import {useEffect, useState} from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    const signUpWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        isLoading,
        setUser,
        signUpWithGoogle,
        logOut,
        setIsLoading
    }
}
export default useFirebase;