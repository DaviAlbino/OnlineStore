import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
