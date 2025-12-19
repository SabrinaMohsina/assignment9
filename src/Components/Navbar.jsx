import React, { use } from 'react';
import MyContainer from './MyContainer';
import { Link } from 'react-router';
import logo from '../assets/logotoy.png'
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { ClockLoader } from 'react-spinners';

const Navbar = () => {
  const { user ,setuser, signOUtUserFunc , loading , setLoading} = use(AuthContext);
  
 
   const handleSignOut =()=>{
         
  
      signOUtUserFunc() .then(() => {
                 toast('Logout Successful')
                 setuser(null)
    }).catch((e) => {
     toast.error(e.message)
      });
         };
    return (
        <div  className="bg-accent">
            <MyContainer>
                <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
         <li><Link to='/profile'> Profile</Link></li>
   
      </ul>
    </div>
   <img src={logo} className='w-18 rounded-xl' alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <li><Link to='/'>Home</Link></li>
         <li><Link to='/profile'> Profile</Link></li>

   
   
    </ul>
</div>

    { loading ? <ClockLoader />: user ? ( <div className='navbar-end text-center space-y-3'>

  {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
{/* For TSX uncomment the commented types below */}
<button className="" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  <img src={user?.photoURL} className='h-[40px] w-[40px] rounded-full mx-auto' alt="" />
</button>

<div className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>


  <h2 className='text-xl font-semibold text-black/80'>{user?.displayName}</h2>
  <p className='text-black/80'>{user?.email}</p>
  <button className='btn' onClick={handleSignOut}>Sign Out</button>
</div>
 </div> ): ( <div className="navbar-end">
    <Link to={'/login'} className="btn bg-amber-800 text-white">Log In</Link>
  </div>)}
  
 
</div>
            </MyContainer>
        </div>
    );
};

export default Navbar;