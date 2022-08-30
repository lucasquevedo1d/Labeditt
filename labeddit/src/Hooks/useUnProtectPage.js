import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { irParaFeed, irParaLogin } from "../pages/routes/Cordinator";

const useUnProtectPage = () =>{
    const navigate = useNavigate()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(token){
           return irParaFeed(navigate)
        }
    }, [])
}

export default useUnProtectPage