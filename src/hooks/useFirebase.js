import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase =() =>{

    const [users, setUsers] = useState({});

    const auth = getAuth();
    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(reselut=>{
            setUsers(reselut.user);
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        });
        return () => unsubscribe;
    },[])

   const logOut = () =>{
    signOut(auth)
    .then(() => {
        
    });
   }

    return{
        users,
        signInWithPopup,
        logOut
    }
}

export default useFirebase;