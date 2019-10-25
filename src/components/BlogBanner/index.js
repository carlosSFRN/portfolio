import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import BannerBlog from '../../images/blogBanner.jpg';

export default function BlogBanner(){
  return (
    <>
        <Container>
            <div className="card-blog-post">
                <img src={BannerBlog} className="BannerBlog mr-3" alt="..."/>
                
                <div className="card-blog-text">
                    <p>published by Carlos Eduardo, July 12, 2017</p>
                    <h2>Etiam tempor eros ipsum mauris ac quam at lacus diam vel wisi</h2>
                    <p>Do you like it? <Link>Read more</Link></p>
                </div>
            </div>
        </Container>
    </>
  );
}