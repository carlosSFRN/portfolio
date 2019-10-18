import React, { useState} from 'react';
import { Container } from './styles';
import cliqueme1 from '../../images/cliqueme1.jpg';
import cliqueme2 from '../../images/cliqueme2.jpg';

export default function CardProject(){
    
    return (
    <>
        <Container>
            <div className="container">
                <div className="card-deck">
                    <div className="card">
                        <img src={cliqueme1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Cliqueme</h5>
                            <p className="card-text">&emsp;O cliqueme é uma plataforma para fotográfos carregarem suas fotos tiradas em eventos cadastrados pelo cliqueme e colocados a venda, para qualquer pessoa comprar foi desenvolvido com as ferramentas PHP, CakePHP framework, MySQL</p>
                            
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  );
}

