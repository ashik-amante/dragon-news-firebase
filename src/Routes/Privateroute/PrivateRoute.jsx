import { useContext } from "react";
import { AuthContext } from "../../Providers/Authproviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location);
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg "></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;