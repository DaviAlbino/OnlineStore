import React from 'react';
import { getProducts } from '../services/api';

class Cart extends React.Component {
  state = {
    buyItems: [],
    // qtdItems: {},
  }

  componentDidMount() {
    this.getCartProducts();
  }

  getCartProducts= () => {
    // const cartItems = JSON.parse(localStorage.getItem('Cart'));
    // cartItems.map(async (Id) => {
    //   const Item = await getProducts(Id);
    //   this.setState((previous) => ({ buyItems: [Item, ...previous.buyItems] }));
    // });
    const cartItems = JSON.parse(localStorage.getItem('Cart'));
    const counts = {};
    cartItems.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
    console.log(Object.entries(counts));
    const const2 = Object.entries(counts);
    cartItems.map(async (Id) => {
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

  render() {
    const { buyItems } = this.state;
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          {buyItems.length === 0 && <h4>Seu carrinho está vazio.</h4>}
          {buyItems && buyItems.map((product, array) => (
            <div data-testid="product" key={ product.id && array }>
              <p data-testid="shopping-cart-product-name">{product.title}</p>
              <p>{product.price}</p>
              <p data-testid="shopping-cart-product-quantity">
                { product.qtd }
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
