import React from 'react';
import { getProducts } from '../services/api';

class Cart extends React.Component {
  state = {
    buyItems: [],
  }

  componentDidMount() {
    this.getCartProducts();
  }

  getCartProducts= () => {
    const cartItems = JSON.parse(localStorage.getItem('Cart'));
    cartItems.map(async (Id) => {
      const Item = await getProducts(Id);
      this.setState((previous) => ({ buyItems: [Item, ...previous.buyItems] }));
    });
  }

  render() {
    const { buyItems } = this.state;
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          {buyItems.length === 0 && <h4>Seu carrinho está vazio.</h4>}
          {buyItems && buyItems.map((product) => (
            <div data-testid="product" key={ product.id }>
              <p data-testid="shopping-cart-product-name">{product.title}</p>
              <p>{product.price}</p>
              <p data-testid="shopping-cart-product-quantity">Quantidade</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
