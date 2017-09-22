import React, { Component } from 'react';
import Follower from './Follower.js';

class Followers extends Component {
  //Constructor de la clase
  constructor(props) {
    super (props);
  }

  //mapea cada uno de los users
  renderFollowers(){
    const followers = this.props.followers;
    return followers.map((t,i)=>
      {return <Follower follower={t} key={i}/>;}
    );
  }

  //hace render de cada map del user
  render() {
    return (
      <div>
        <b>Seguidores de  </b>
        {this.renderFollowers()}
      </div>
    );
  }
}

export default Followers;
