import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const  AuthContext = createContext(null)

const Authproviders = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    // observe user state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current observer' ,currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default Authproviders;