import React from 'react';

export default function Banner({name}){
  return (
    <>
        <div className="jumbotron">
            <h1 className="display-4">{ name }</h1>
        </div>
    </>
  );
}