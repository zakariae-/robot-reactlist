import React, {Component} from 'react';
import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = { 
      robots: [],
      searchField: ''
    }

  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { robots, searchField } = this.state;
    const fieltredRobots = robots.filter(robot => 
      robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return ( 
      <div className="App">
        <h1>Robots list</h1>
        <SearchBox 
          placeholder='Search robot'
          handleChange={ this.handleChange }
        />
        <CardList robots={ fieltredRobots }/>
      </div>)
  }
}

export default App;
