import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { irParaLogin } from "../pages/routes/Cordinator";

const useProtectPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
           return irParaLogin(navigate)
        }
    

    }, [])
}

export default useProtectPage