import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll.js';
import StayPut from '../components/StayPut';
import ErrorBoundry from '../components/ErrorBoundry';
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
  .then(users => {this.setState({ monsters: users})});
}

onSearchChange = (event) => {
  this.setState({ searchfield: event.target.value})
}

render() {
  const { monsters, searchfield } = this.state;
  const filteredMonsters = monsters.filter(monster => {
    const searchIn = (monster.name.toLowerCase() + monster.username.toLowerCase());
    return searchIn.toLowerCase().includes(searchfield.toLowerCase());
  })
  return !monsters.length ?
    <h1 className='tc f1'>Loading</h1> :
    (
      <div className='tc'>
        <StayPut>
          <h1 className='f1'>Monsterfriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </StayPut>
        <ErrorBoundry>
          <CardList monsters={filteredMonsters}/>
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
