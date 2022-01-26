import React, { useState } from 'react';
import './login.css';
import { Link, Navigate } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/compat/auth';

import { useSelector, useDispatch }  from 'react-redux';


function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function Logar(){
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('Sucesso!')
            setTimeout(() => {
            dispatch({type: 'LOG_IN', usuarioEmail: email});
            },2000);
        }).catch(erro => {
            setMsgTipo('Erro!');
        });
    }

   

    return (
            <div className="login-content d-flex align-items-center">
                {
                    useSelector(state => state.usuarioLogado) > 0 ? <Navigate to='/'/> : null
                }
                
                <form className="form-signin mx-auto">

                    <div className="text-center mb-4">
                        <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal text-white font-weight: bold">Login</h1>
                    </div>
     
                        <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail" />

                        <input onChange={(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha" />
      
                    <button onClick={Logar} class="w-100 btn btn-lg btn-login" type="button">Logar</button>

                    <div className="msg-login text-white text-center my-5">
                        {msgTipo === 'Sucesso!' && <span><strong>WoW! </strong>Você está conectado! &#128526;</span>}
                        {msgTipo === 'Erro!' && <span><strong>Ops! </strong>Verifique se a senha e/ou usuário estão corretos! &#128526;</span>}
                    </div>

                    <div className="opcoes-login mt-5 text-center">
                        <a href="#" className="mx-2">Recuperar senha</a>
                        <span className="text-white">&#9733;</span>
                        <Link to='/novousuario' className="mx-2">Cadastrar</Link>
                    </div>
                </form>
            </div>
    );
}

export default Login;