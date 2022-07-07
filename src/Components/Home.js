import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            name="search-imput"
            placeholder=""
          />
        </div>
        <div data-testid="home-initial-message">
          <h4>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
      </div>
    );
  }
}

export default Home;
