import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  state = {
    allCategories: '',
    searchInput: '',
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
    // const data = await getProductsFromCategoryAndQuery(searchInput);
  }

  getListCategories= async () => {
    const categories = await getCategories();
    this.setState({ allCategories: categories });
    console.log(categories);
  }

  render() {
    const { allCategories, searchInput } = this.state;
    return (
      <div>
        {allCategories && allCategories.map((category) => (
          <label key={ category.id } htmlFor={ category.id } data-testid="category">
            {category.name}
            <input
              type="radio"
              name="category"
              id={ category.id }
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
        <button type="button" data-testid="query-button">Pesquisar</button>
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
