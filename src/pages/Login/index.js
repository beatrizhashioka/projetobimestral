import React from 'react';
import InputEmail from '../../components/InputEmail';
import InputSenha from '../../components/InputSenha'
import { StylesLogin } from './styles';
import usuario from '../../images/entrar.jpg';
import { Link } from 'react-router-dom';
import BtnLogin from '../../components/BtnLogin';
export default function Login() {
  return (
    <StylesLogin>
      <img src={usuario} alt="entrar" />
      <InputEmail />
      <InputSenha />
      <div class="btnlog">
        <BtnLogin />
      </div>
      <div className="esqcad">
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/acesso">Esqueci minha Senha</Link>
      </div>
    </StylesLogin>
  );
}