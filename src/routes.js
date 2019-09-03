import React from 'react';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Acesso from "./pages/Acesso";
import { BrowserRouter, Route } from 'react-router-dom';
export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/acesso" component={Acesso} />
    </BrowserRouter>
  );
}

