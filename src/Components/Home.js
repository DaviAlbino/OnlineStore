import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
state = {
  allCategories: '',
  searchInput: '',
  apiValues: [],
  search: false,
//  cart: [],
}

componentDidMount() {
  this.getListCategories();
}

handleChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox'
    ? target.checked : target.value; this.setState({ [name]: value });
}

getSearchApi = async () => {
  const { searchInput } = this.state;
  const data = await getProductsFromCategoryAndQuery(undefined, searchInput);
  this.setState({ apiValues: data.results, search: true });
}

getListCategories= async () => {
  const categories = await getCategories();
  this.setState({ allCategories: categories });
  // console.log(categories);
}

searchCategories = async ({ target }) => {
  const listProducts = await getProductsFromCategoryAndQuery(target.id, undefined);
  this.setState({ apiValues: listProducts.results, search: true });
}

render() {
  const { allCategories, searchInput, apiValues, search } = this.state;
  const { addCart } = this.props;
  return (
    <div>
      {allCategories && allCategories.map((category) => (
        <label key={ category.id } htmlFor={ category.id } data-testid="category">
          {category.name}
          <input
            type="radio"
            name="category"
            id={ category.id }
            onClick={ this.searchCategories }
          />
        </label>
      ))}
      <div>
        <input
          type="text"
          name="searchInput"
          placeholder=""
          data-testid="query-input"
          value={ searchInput }
          onChange={ this.handleChange }
        />
      </div>
      <div data-testid="home-initial-message">
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.getSearchApi }
        >
          Pesquisar

        </button>
        <br />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
        <br />
        <h4>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
      </div>

      {(search && apiValues.length === 0) && <p>Nenhum produto foi encontrado</p>}
      {apiValues && apiValues.map((product) => (
        <div key={ product.id }>
          <Link
            to={ `/details/${product.id}` }
            data-testid="product-detail-link"
          >
            <div data-testid="product">
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>

            </div>
          </Link>

          <button
            type="button"
            id={ product.id }
            data-testid="product-add-to-cart"
            onClick={ addCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}

    </div>
  );
}
}

Home.propTypes = {
  addCart: PropTypes.function,
}.isRequired;

export default Home;
