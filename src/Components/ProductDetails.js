import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';

class ProductDetails extends React.Component {
    state = {
      product: [],
    }

    componentDidMount() {
      this.getId();
    }

    getId = async () => {
      const { match: { params: { id } } } = this.props;
      const response = await getProducts(id);
      this.setState({
        product: response,

      });
    }

    render() {
      const { product } = this.state;
      const { addCart } = this.props;
      return (
        <div>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>

          <div data-testid="product-detail-name">
            <p>{ product.title}</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price}</p>
            <button
              type="button"
              id={ product.id }
              data-testid="product-detail-add-to-cart"
              onClick={ addCart }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      );
    }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  addCart: PropTypes.function,
}.isRequired;

export default ProductDetails;
