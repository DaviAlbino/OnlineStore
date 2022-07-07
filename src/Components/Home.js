import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    allCategories: '',
  }

  componentDidMount() {
    this.getListCategories();
  }

  getListCategories= async () => {
    const categories = await getCategories();
    this.setState({ allCategories: categories });
    console.log(categories);
  }

  render() {
    const { allCategories } = this.state;
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
