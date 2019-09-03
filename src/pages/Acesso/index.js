import React from 'react';
import { StylesAcesso } from './styles';
import InputEmail from '../../components/InputEmail';
import BtnRec from '../../components/BtnRec'
import { Link } from 'react-router-dom';
export default function Acesso() {
  return (
    <StylesAcesso>
      <div className="tEsqueci">
        <h1>Esqueci minha Senha</h1>
      </div>
      <InputEmail />
      <BtnRec />
      <Link to="/">Ir para Login</Link>
    </StylesAcesso>
  );
}