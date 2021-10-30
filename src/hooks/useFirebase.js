import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase =() =>{

    const [user, setUser] = useState({});
    const[isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const signInWithGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(reselut=>{
            setUser(reselut.user)
        })
        .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[])

   const logOut = () =>{
       setIsLoading(true);
    signOut(auth)
    .then(() => { })
    .finally(()=> setIsLoading(false))
   }

    return{
        user,
        isLoading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;