import React from 'react';
import './login.css'

function Login() {
    return (
            <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">

                    <div className="text-center mb-4">
                        <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal text-white font-weight: bold">Login</h1>
                    </div>
     
                        <input type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail" />

                        <input type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha" />
      
                    <button class="w-100 btn btn-lg btn-login" type="submit">Sign in</button>
                    <div className="opcoes-login mt-5">
                        <a href="#" className="mx-2">Recuperar senha</a>
                        <span className="text-white">&#9733;</span>
                        <a href="#" className="mx-2">Cadastrar</a>
                    </div>
                </form>
            </div>
    );
}

export default Login;