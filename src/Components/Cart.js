import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { buyItems, addCart, removeCart } = this.props;

    return (
      <div>
        <div data-testid="shopping-cart-empty-message">
          {buyItems.length === 0 && <h4>Seu carrinho está vazio.</h4>}
          {buyItems && buyItems.map((product, array) => (
            <div data-testid="product" key={ product.id && array }>
              <p data-testid="shopping-cart-product-name">{product.title}</p>
              <p>{product.price}</p>
              <button
                type="button"
                id={ product.id }
                data-testid="product-increase-quantity"
                onClick={ addCart }
              >
                +
              </button>
              <p data-testid="shopping-cart-product-quantity">
                { product.qtd }
                <button
                  type="button"
                  id={ product.id }
                  data-testid="product-decrease-quantity"
                  onClick={ removeCart }
                >
                  -
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
}.isRequired;

export default Cart;
