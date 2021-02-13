import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs'

import Input from '../../components/input';
import logo from "../../assets/icon.png";
import './styles.css';

function Login() {

  const handleChange = (value: string, name: string) => {
    console.log(value, name);
  };

  return (
    <div className="bodyLogin">
      <div className="login">
        <img src={logo} alt="LOGIN" height="65px" width="65px" />
        <Input 
          type="email" 
          label="Email"
          name="email" 
          placeholder="exemplo@exemplo"
          onChange={handleChange}
        />
        <Input 
          type="password" 
          label="Senha"
          name="password" 
          placeholder="******"
          onChange={handleChange}
        />

        <Link to="/home" className="link">
          <span>
            <BsBoxArrowInRight />
          </span>
          ENTRAR
        </Link>
      </div>
    </div>
  );
}

export default Login;
