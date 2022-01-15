import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";
import Home from "./view/home/";


const AppRoute = () => {
   return(
            <Routes>
                <Route element = { <Login/> }  path="/login"/>
                <Route element = { <NovoUsuario/> }  path="/novousuario" />
                <Route element = { <Home/> }  path="/" />
            </Routes>
   )
}

export default AppRoute;