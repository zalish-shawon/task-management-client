/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Loading/Loading";

const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <Loading></Loading>

    }
    if (user) {
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/login"}></Navigate>
        </div>
    );
};

export default PrivateRoutes;