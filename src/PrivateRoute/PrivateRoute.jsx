import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';


const PrivateRoute = ({children}) => {
     const {user , loading} = use(AuthContext);
     const location = useLocation()
    
    //  console.log(location);
     
 
    if(loading){
        return( 
            <div className='h-[97vh] flex items-center justify-center'>
                <ClimbingBoxLoader />
            </div>
        )
    }

     if(!user){
        return <Navigate to={"/login"} state={location.pathname}></Navigate>
     }



    return children 
};

export default PrivateRoute;