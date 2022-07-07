import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          <h4>
            Seu carrinho está vazio.
          </h4>
        </div>
      </div>
    );
  }
}

export default Cart;
