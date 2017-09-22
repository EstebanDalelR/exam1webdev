import './App.css';
import React, { Component } from 'react';
import SearchBox from './SearchBar.js';
import Followers from './Followers.js';

//test url
const URL="http://localhost:3001";

class App extends Component {

    constructor(props){
        super(props)
        this.state={
            //la lista de seguidores
            followers: [],
            //el usuario a mostrar
            user: ""
        }
        //bind del usuario
        //this.search=this.search.bind(this);
    };

    //si el componente se monta, se hace el llamado
    componentDidMount(){
        //fetch inicial con john
        fetch("/getFollowers/estebandalelr", {method:"GET", headers:{accept: "application/json"}})
        //el return luego lo revisa y lo convierte a json
        .then((res)=>{if(res.ok) return res.json();})
        //pone en el state los followers
        .then((followers)=>{this.setState({followers: followers});
        });
    }

    //busqueda por texto
    search(text){
        this.setState({user: text})
    }

    //render
    render() {
      console.log(this.state);
        return (
            <div>
              <h1>Github Followers</h1>
              <div>
                <Followers followers={this.followers[data]}/>
                <SearchBox search={this.search}/>
              </div>
            </div>
        )
    }
}
export default App;
