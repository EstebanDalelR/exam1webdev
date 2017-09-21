import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar.js';
import Followers from './Followers.js';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      Followers:[
      ]
    };
  }

  componentDidMount(){
    fetch('/getfollowers/estebandalelr',{method:'GET',
     headers:{accept:'application/json'}})
    .then((res)=>{ res.json();  })
    .then((followers) =>{ this.setState({   Followers:followers });
    })
  }

  onSearch(user) {

  }

  render() {
    //Muestra una SearchBar que al oprimir Find busca los followers
    //Followers genera una lista de seguidores del que se busco
    //Follower es un valor individual
    return (
      <div className="App">

        <h2>
          Github Followers
        </h2>

        <Followers followers={this.state.Followers}/>
      </div>
    );
  }
}

export default App;
