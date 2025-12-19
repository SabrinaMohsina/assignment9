import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';


const googleProvider= new GoogleAuthProvider();
 const provider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setuser]=useState(null);
    const [loading , setLoading]=useState(true)

    const updateProfileFunc =(   displayName, photoURL)=>{

       return   updateProfile (auth.currentUser, {
                          displayName, photoURL
                    }) 
    }
    const sendEmailVerificationFunc=()=>{
       setLoading(true);
       return  sendEmailVerification(auth.currentUser)
    }

    const    createUserWithEmailAndPasswordFunc=(email , password)=>{
       setLoading(true);
        return    createUserWithEmailAndPassword(auth , email , password)

    };
    
    const signInWithEmailAndPasswordFunc =(email , password)=>{
       setLoading(true);
          return signInWithEmailAndPassword(auth, email , password)
    }

const  signInWithgoogleFunc  =()=>{
   setLoading(true);
    return signInWithPopup(auth ,googleProvider)
}
const  signInWithgithubFunc  =()=>{
   setLoading(true);
    return  signInWithPopup(auth ,provider)
}
const signOUtUserFunc =()=>{
   setLoading(true);
    return signOut(auth)
}
const  sendPasswordResetEmailFunc=(email)=>{
   setLoading(true);
   return  sendPasswordResetEmail(auth, email)
}

    const authInfo ={
           createUserWithEmailAndPasswordFunc,
           signInWithEmailAndPasswordFunc,
           signInWithgoogleFunc,
            signInWithgithubFunc,
            signOUtUserFunc,
            sendPasswordResetEmailFunc,
            user , 
            setuser,
            updateProfileFunc,
            sendEmailVerificationFunc ,
            loading , setLoading

    }
    useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, (currUser) =>{
   //  console.log(currUser);
    setuser(currUser);
    setLoading(false);
  })
  return()=>{
    unsubscribe();
  }
    },[])
 
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;