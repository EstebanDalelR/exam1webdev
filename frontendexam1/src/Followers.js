import React, { Component } from 'react';
import Follower from './Follower.js';

class Followers extends Component {
  //Constructor de la clase
  constructor(props) {
    super (props);
  }

  //mapea cada uno de los users
  renderFollowers(){
    console.log(this.props);
    return this.props.follower.map(
      (t,i)=>{
        return <Follower follower={t} key={i}/>;
      }
    );
  }

  //hace render de cada map del user
  render() {
    return (
      <div>
        <b>Seguidores de {this.props.username} </b>
        {this.renderFollowers()}
      </div>
    );
  }
}

export default Followers;
