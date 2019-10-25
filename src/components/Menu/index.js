import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Menu (){
  return (
    <>
        <Container>
            <div className="wallpaper">
                <a href="#menu" className="link-about">Sobre mim</a>
            </div>
            <nav id="menu">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </Container>
    </>
  );
}