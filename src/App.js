import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
// import {Card} from './components/card/card.component';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchMonster: '' 
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster: users}))
  }

  handleChange = (e) => {
    this.setState({searchMonster: e.target.value})
  }

  render(){

    const {monster, searchMonster} = this.state;
    const searchFilter = monster.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()))
      return (
        <div className="App">
          <h1>Obrigado Malaye</h1>
          <SearchBox placeholder={'Seach monster'} 
          handleChange={this.handleChange}/>
          <CardList monster= {searchFilter}>
          </CardList>
        </div> 
      ); 
  }
}

export default App;
