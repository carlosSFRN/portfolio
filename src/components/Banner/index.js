import React from 'react';
import { Container } from './styles';

export default function Banner({name}){
  return (
    <>
        <div className="jumbotron">
            <h1 className="display-4 text-center">{ name }</h1>
        </div>
        
    </>
  );
}