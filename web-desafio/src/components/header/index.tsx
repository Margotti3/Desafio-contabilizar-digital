import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icon.png";
import { BsBoxArrowRight } from 'react-icons/bs'

import './styles.css';

function Header() {
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <p>Contabilizar Digital</p>
            </div>
            <Link to="" className="logout">
                SAIR
                <span>
                    <BsBoxArrowRight />
                </span>
            </Link>
        </header>
    );
}

export default Header;