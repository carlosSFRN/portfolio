import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Menu (){
  return (
    <>
        <Container>
            <div className="wallpaper">
                <div className="typewriter mb-4">
                    <h1>I'm a Web Developer</h1>
                </div>
                <Link to="/about" className="link-about mt-4">SEE MORE<i className="fa fa-long-arrow-down ml-2" aria-hidden="true"></i></Link>
            </div>
        </Container>
    </>
  );
}