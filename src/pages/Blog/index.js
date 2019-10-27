import React from 'react';
import Menu from '../../components/Home';
import BlogBanner from '../../components/BlogBanner';
import Banner from '../../components/Banner';


export default function Contact(){
  return (
    <>
        <Menu />
        <Banner name={'Blog'}/>
        <BlogBanner/>
        <BlogBanner/>
        <BlogBanner/>
    </>
  );
}