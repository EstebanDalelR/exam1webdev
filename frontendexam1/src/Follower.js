import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super (props);
  }


//muestra cada uno de los atributos del usuario con los props
  render() {
    return (
      <div>
        <img className="FotoPerfil" style={{width: 40, height: 40}} src={this.props.follower.avatar_url} alt={this.props.follower.login}></img>
        <p>{this.props.follower.login}</p>
        <p className="tenantPhone">{this.props.follower.organizations_url}</p>

      </div>
    );
  }
}

export default Follower;
