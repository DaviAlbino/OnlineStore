import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import { getProducts } from './services/api';

class App extends React.Component {
  state = {
    cart: [],
    buyItems: [],
  };

  addCart = ({ target }) => {
    this.setState((previous) => ({ cart: [target.id, ...previous.cart] }));
    const { cart } = this.state;
    const counts = {};
    cart.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    console.log(Object.entries(counts));
    const const2 = Object.entries(counts);
    cart.map(async (Id) => {
      const Item = await getProducts(Id);
      const equalItems = const2.filter((item) => item[0] === Item.id);
      const itemCart = {
        id: Item.id,
        title: Item.title,
        price: Item.price,
        qtd: equalItems[0][1],
      };
      this.setState((previous) => ({ buyItems: [itemCart, ...previous.buyItems] }));
    });
  }

  removeCart = ({ target }) => {
    const { buyItems } = this.state;
    this.setState({
      buyItems: buyItems.filter((item) => item.id !== target.id
      && item.qtd > 1
      && item.qtd === item.qtd - 1),
    });
  }

  render() {
    const { buyItems } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={ () => <Home addCart={ this.addCart } /> } />
            <Route
              path="/cart"
              render={ () => (<Cart
                addCart={ this.addCart }
                buyItems={ buyItems }
                removeCart={ this.removeCart }
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
