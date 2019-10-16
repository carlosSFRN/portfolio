import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
  return (
    <>
        <h1>Error: Wrong path</h1>
        <h2>Go back to home <Link to={'/'}>Click here</Link></h2>
    </>
  );
}