import React from 'react';
import InputEmail from '../../components/InputEmail';
import InputSenha from '../../components/InputSenha';
import BtnCad from '../../components/BtnCad';
import { StylesCadastro } from './styles';
import usuario from '../../images/usuario.jpg';
import InputNome from '../../components/InputNome';
import { Link } from "react-router-dom";
export default function Cadastro() {
  return (
    <StylesCadastro>
      <div>
        <img src={usuario} alt="Usuario" />
        <InputNome />
        <InputEmail />
        <InputSenha />
        <div class="btncad">
          <BtnCad />
        </div>
      </div>
      <Link className="link" to="/">Ir para Login</Link>
    </StylesCadastro >
  );
}