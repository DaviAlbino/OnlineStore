import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';

class App extends React.Component {
  state = {
    cart: [],
  };

  addCart = ({ target }) => {
    this.setState((previous) => ({ cart: [target.id, ...previous.cart] }));
    console.log('teste');
    // const storageItems = JSON.stringify(cart);
    // localStorage.setItem('Cart', JSON.stringify(cart));
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={ () => <Home addCart={ this.addCart } /> } />
            <Route
              path="/cart"
              render={ () => (<Cart
                addCart={ this.addCart }
                cart={ cart }
              />) }
            />
            <Route
              path="/details/:id"
              render={ (props) => (<ProductDetails
                { ...props }
                addCart={ this.addCart }
              />) }
            />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
