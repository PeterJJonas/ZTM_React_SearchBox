import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import Scroll from './Scroll.js';
import Stayput from './Stayput';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      const searchIn = (monster.name.toLowerCase() + monster.username.toLowerCase());
      return searchIn.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.monsters.length === 0) {
      return <h1 className='tc f1'>Loading</h1>
    } else {
        return (
          <div className='tc'>
            <Stayput>
              <h1 className='f1'>Monsterfriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
            </Stayput>
            <CardList monsters={filteredMonsters}/>
          </div>
      );
    }
  }
}

export default App;
