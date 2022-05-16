import React from 'react';
import './FormularioLogin.css';
import Header from '../../Components/Cards/Header';
import Footer from '../../Components/Cards/Footer';
import FormularioLogin from './FormularioLogin'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <div className='Container'>
          <Header />
          <FormularioLogin />
          <div className='botaoCadastro'>
            <span><p>Não possui cadastro?</p></span>
            <Link to="/novoestabelecimento">Inscreva-se</Link>
          </div>
          <Footer />
      </div>
    )
};

export default Login;