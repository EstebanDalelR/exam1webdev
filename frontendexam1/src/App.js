import './App.css';
import React, { Component } from 'react';
//import searchbar from './SearchBar.js';
import Followers from './Followers.js';

//test url
//const URL="http://localhost:3001";

class App extends Component {

    constructor(props){
        super(props)
        this.state={
            //la lista de seguidores
            followers: [],
            //los visitados
            visited:[],
            //el usuario a mostrar
            user: ""
        }
        //bind del usuario
        //this.search=this.search.bind(this);
    };

    //si el componente se va a montar, se hace el llamado
    componentWillMount(){
        //fetch inicial con mi perfil
        fetch("http://localhost:3001/getFollowers/estebandalelr", {method:"GET", headers:{accept: "application/json"}})
        //luego lo revisa y lo convierte a json
        .then((res)=>{if(res.ok) return res.json();})
        //pone en el state los followers, del array data
        .then((followers)=>{this.setState({followers: followers.data});
        });
    }

    //busqueda por texto
    search(text){
        this.setState({user: text})
    }

    //render, pasa el state a la clase que llama
    render() {
        return (
            <div>
              <h1>Github Followers</h1>
              <div>
                <Followers followers={this.state.followers}/>

              </div>
            </div>
        )
    }
}

export default App;
