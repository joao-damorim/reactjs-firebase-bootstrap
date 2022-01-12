import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./view/login/";
import NovoUsuario from "./view/usuario-novo/";


const AppRoute = () => {
   return(
            <Routes>
                <Route element = { <Login/> }  path="/"/>
                <Route element = { <NovoUsuario/> }  path="/novousuario" />
            </Routes>
   )
}

export default AppRoute;