import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaGithub, FaGoogle } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../Components/Navbar';




const LoginPage = () => {

  const {signInWithEmailAndPasswordFunc ,
     signInWithgoogleFunc ,signInWithgithubFunc ,
    
    sendPasswordResetEmailFunc ,
  user ,
     setuser ,  setLoading}=useContext(AuthContext)

  
       const [show , setShow]=useState(false);
  // const [email , setEmail]= useState(null)  1st way
  const location = useLocation();
  const from = location.state ||"/"
   const navigate = useNavigate()
      if(user){
      navigate("/");
      return <Navigate to={"/"}></Navigate>
    }
  console.log(location);
 

  const emailRef = useRef(null)

       const handleLogin = (e)=>{
        e.preventDefault();
        
         const email =e.target.email?.value;
         const password =e.target.password?.value;


    console.log('logged' , {email , password})
    ;
  
      // signInWithEmailAndPassword(auth, email , password)
      signInWithEmailAndPasswordFunc( email , password)
            .then((res) =>{
                if (!res.user?.emailVerified){
                  toast.error("your email is not verified")
                  return;

                }
                console.log(res);
                setuser(res.user)
                toast('Login Successful')
                 navigate(from)
            })
            .catch((e) =>{
                toast.error(e.message)
            })
       }
       const handleGoogleSignIn =()=>{
              console.log('handle')
       signInWithgoogleFunc()
        .then((res) => {
          console.log(res)
          setLoading(false);
               toast('login Successful')
               setuser(res.user)
                 navigate(from)
              
}).catch((e) => {
   toast.error(e.message)
});
       };

      const handleGithubSignIn =()=>{
            signInWithgithubFunc()
        .then((res) => {
          console.log(res)
          setLoading(false);
               toast('login Successful')
               setuser(res.user)
}).catch((e) => {
   toast.error(e.message)
});
       }
      
       const handleForgetPassword=()=>{
       const email = emailRef.current.value
      sendPasswordResetEmailFunc(email)
        .then((res)=>{
           setLoading(false);
          toast.success("Check your email to reset password")
        })
        .catch(e=>{
          toast.error(e.message)
        })
       }

       
    return (<div>
      <Navbar></Navbar>
       <div className="hero bg-base-200 min-h-screen">

  
   
 <div className="card p-5  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="text-center">
      <h1 className="text-3xl font-bold">Login </h1>
     
    </div>
       <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">

            <label className="label">Email</label>
          <input type="email" name='email'
          ref={emailRef}
          // value={email} onChange={(e) =>setEmail(e.target.value)} 1st way
           className="input" placeholder="Email" />

         
            <div className='relative'>
                <label className="label">Password</label>
                 <input type={ show? "text": "password"} name='password' className="input"  />
                <span onClick={()=>setShow(!show)} className='absolute right-[8px] top-[36px] cursor-pointer z-index-50'>{show ? <FaEye /> :<IoMdEyeOff />}</span>
                
                   </div>
          <div><a className="link link-hover" onClick={handleForgetPassword}>Forget password?</a></div>
          <button className="btn btn-neutral mt-4" onClick={handleForgetPassword}>Login</button>
           {/* divider */}
        <div className='flex items-center justify-center gap-3 my-2'>
             <div className='h-px w-16 bg-black/30'> </div>
             <span className='text-sm text-black/70'>or</span>
            <div className='h-px w-16 bg-black/30'> </div>
        </div>
        {/* google signin */}
    <button onClick={handleGoogleSignIn} className='btn'><FaGoogle />Continue With Google</button>
    <button onClick={handleGithubSignIn} className='btn'><FaGithub />Continue With Github</button>
             <p>  Don't  have an  account ? <Link to={'/register'} className='text-md underline '>Register</Link></p>
        </fieldset>
      </form>
    </div>
  
</div>
<Footer />
</div>
    );
};

export default LoginPage;