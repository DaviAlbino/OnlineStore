import React from 'react';
import PropTypes from 'prop-types';
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
      return (
        <div>
          <div data-testid="product-detail-name">
            <p>{ product.title}</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price}</p>
          </div>
        </div>
      );
    }
}

ProductDetails.propTypes = { match: PropTypes.object }.isRequired;

export default ProductDetails;
