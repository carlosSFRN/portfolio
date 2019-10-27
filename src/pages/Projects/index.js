import React from 'react';
import Menu from '../../components/Home';
import Banner from '../../components/Banner';
import CardProject from '../../components/CardProject';

export default function Projects(){
  return (
    <>
        <Menu />
        <Banner name={'Projects'}/>
        <CardProject />
    </>
  );
}