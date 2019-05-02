import React from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    console.log(this);
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        {monsters.length ? (
          <React.Fragment>
            <h1> Monsters Rolodex </h1>
            <input
              className='search'
              type='search'
              placeholder='search monsters'
              onChange={this.onSearchChange}
            />
            <CardList monsters={filteredMonsters} />
          </React.Fragment>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default App;
