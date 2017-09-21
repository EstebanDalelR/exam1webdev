import React, { Component } from 'react';
import Follower from './Follower.js';

class Followers extends Component {
  constructor(props) {
    super (props);
  }

  renderFollowers(){
    return this.props.follower.map(
      (t,i)=>{
        return <Follower follower={t} key={i}/>;
      }
    );
  }
  //usando mi codigo viejoh


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
