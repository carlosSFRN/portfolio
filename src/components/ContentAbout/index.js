import React from 'react';
import photome from '../../images/photome.jpg';
import { Container } from './styles';

export default function ContentAbout(){
  return (
    <>
        <Container>
            <div className="container bg-white text-center">
                <img src={photome} className="mt-3"/>
            </div>
        </Container>
    </>
  );
}