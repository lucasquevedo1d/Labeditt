import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import PaginaCadastro from "../paginaCadastro/PaginaCadastro";
import PaginaErro from "../paginaErro/PaginaErro";
import PaginaFeed from "../paginaFeed/PaginaFeed";
import PaginaLogin from "../paginaLogin/PaginaLogin";
import PaginaPost from "../paginaPost/PaginaPost";

const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<PaginaLogin/>}></Route>
            <Route path={"/cadastro"} element={<PaginaCadastro/>}/>
            <Route path={"/feed"} element={<PaginaFeed/>}/>
            <Route path={"/post/:id"} element={<PaginaPost/>}/>
            <Route path="*" element={<PaginaErro/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}
export default Router
