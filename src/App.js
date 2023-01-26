import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Leo',
          id: '123abc569'
        },
        {
          name: 'Daniel',
          id: 'abc569cba'
        },
        {
          name:'Laura',
          id: 'def264zyx'
        },
        {
          name:'Isabel',
          id: 'qwe890rty'
        }
      ]      
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;
