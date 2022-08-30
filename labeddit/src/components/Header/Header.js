import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar"
import { StyledToolbar } from "./Styles";
import Button from "@material-ui/core/Button"
import { irParaFeed, irParaLogin } from "../../pages/routes/Cordinator";
import { useNavigate } from "react-router-dom";



const Header = () =>{
    const navigate = useNavigate()
   
    
    
    return(
        
            <AppBar position="static">
            <StyledToolbar>
                <Button variant="h6"  onClick={() => irParaFeed(navigate)}>LabEditt</Button>
                <Button color='inherit' onClick={() => irParaLogin(navigate)}>Login</Button>
            </StyledToolbar>
            </AppBar>
        

    )
}
export default Header