import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogoutScreen = () => {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        document.cookie = `auth=null;max-age=0`;
        setAuth({ role: 0 });
        navigate("/");
    },[])

    return (
        <h1>LogoutScreen</h1>
    );
}

export default LogoutScreen;