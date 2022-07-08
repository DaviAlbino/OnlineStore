import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/details/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
