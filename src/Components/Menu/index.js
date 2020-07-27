import React from 'react';
import logo from '../../assets/MyFlixImg.png';
import './style.css';
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a href="#">
                <img className="Logo" src={logo} alt="Logo do MyFlix"/>
            </a>
            
            <Button as="a" className="ButtonLink" href="#">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;