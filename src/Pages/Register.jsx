import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile,  } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../Firebase/firebase.config';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '../context/AuthContext';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Register = () => {
   
     const [show , setShow]=useState(false);
     const navigate = useNavigate()
     const {createUserWithEmailAndPasswordFunc , signOUtUserFunc ,setuser, updateProfileFunc ,sendEmailVerificationFunc , setLoading }=useContext(AuthContext)

    const handleregister=(e)=>{
        e.preventDefault();
     
         const displayName =e.target.name?.value;
         const email =e.target.email?.value;
         const photoURL =e.target.photo?.value;
         const password =e.target.password?.value;


    console.log('registered' , {email , password , displayName , photoURL});

    // if(password.length <6){
    //     toast.error("Password should be at least 6 digit")
    //     return;
    // }
    const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
if(!regex.test(password)){
    toast.error("Your password is too weak. Add at least 8 characters, including capital letters, small letters, numbers, and a special symbol.")
}          //create user
        // createUserWithEmailAndPassword(auth , email , password)
        createUserWithEmailAndPasswordFunc(email , password)
        .then((res) =>{
            //update profile
           updateProfileFunc(displayName, photoURL) .then(() => {
                      sendEmailVerificationFunc()
                      .then((res) => {
                        console.log(res);
                        setLoading(false);
                          signOUtUserFunc() .then(() => {
                                          toast.success("Signup successful . check your valid active gmail account")
                                         setuser(null)
                                         navigate("/login")
                            })
                       
                      })
                      .catch((e) => {
                           toast.error(e.message)
                          });
                          
                          
            }).catch((e) => {
               toast.error(e.message)
            });
            console.log(res);
            toast('Register Successful')
        })
        .catch((e) =>{
            toast.error(e.message)
        })
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen"> 
    <div className="card p-5  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <div className="text-center">
      <h1 className="text-3xl font-bold">Create Your Account </h1>
     
    </div>
      <form onSubmit={handleregister} className="card-body">
        <fieldset className="fieldset">

         <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="sabu" />

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

         <label className="label">Photo</label>
          <input type="text" name='photo' className="input" placeholder="Photo" /> 

         <div className='relative'>
             <label className="label">Password</label>
          <input type={ show? "text": "password"} name='password' className="input"  />
         <span onClick={()=>setShow(!show)} className='absolute right-[8px] top-[36px] cursor-pointer z-index-50'>{show ? <FaEye /> :<IoMdEyeOff />}</span>
      
         </div>
          <button className="btn btn-neutral mt-4"> Register</button>
          <p> Already have an  account ? <Link to={'/login'} className='text-md underline '>Login</Link></p>
        </fieldset>

        
      </form>
    </div>

    
  
</div>
<Footer></Footer>
</div>
    );
};

export default Register;