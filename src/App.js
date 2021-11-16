import React, { Component } from 'react'
import {CardList} from './components/card-list/card-list.component'
import Search from './components/card-list/search-box/search-box'
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monster: [],
      searchFiled: ''

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => this.setState({monster: users}))
    
  }

  render(){
    const {searchFiled, monster} = this.state;
    const filterMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searchFiled.toLowerCase()))
    return(
      
      <div className='App'>
        <h1>{this.state.searchFiled}</h1>
        <Search placeholder="Search Monster" handleChange={(e) => this.setState({searchFiled: e.target.value})}/>
        <CardList monster={filterMonsters} />
      </div>
    )
  }
}

export default App;
 