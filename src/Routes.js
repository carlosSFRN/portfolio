import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={About} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;