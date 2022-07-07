import React from 'react';

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
      </div>
    );
  }
}

export default Home;
