import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/compat/auth';

import Navbar from '../../componentes/navbar/'

import './usuario-novo.css';

function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setCarregando(1);
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro.')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('sucesso')
            
        }).catch(erro => {
            //alert(erro)
            setCarregando(0);
            setMsgTipo('erro')
            switch(erro.message){
                
                case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                default:
                    setMsg('Não foi possivel cadastrar. Tente novamente mais tarde!')
                    break
            }
        })
    }

    return(
        <>
        <Navbar/>
        <div className="form-cadastro mx-auto">
            <form className="text-center form-cadastro mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font weight-bold">Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha" />

                {
                    carregando ?  <div class="spinner-border text-danger" role="status">
                    <span class="sr-only"></span>
                    </div>
                    : <button onClick={cadastrar} type='button' className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
   
                }

                <div className="msg-cadsastro text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WoW! </strong>Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong>{msg} &#128526;</span>}
                </div>
            
            </form>
        </div>
        </>
    )
}

export default NovoUsuario;