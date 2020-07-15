import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/About';
import Products from './Components/Products';
import ProdItems from './Components/ProductItems';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar.js';

function RouteConfig() {
  return (
    <div>
      
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={ProdItems} />
            <Route path="/contacts" component={Contact} />
            <Route path="*" component={()=><h2>This page is not the part of this website</h2>} />
        </Switch>
        
      </Router>
     
    </div>
  );
}

export default RouteConfig;
