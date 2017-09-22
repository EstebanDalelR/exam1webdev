import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super (props);
  }


//muestra cada uno de los atributos del usuario con los props
  render() {
    return (
      <div>
        <img className="aptNumber">{this.props.follower.avatar_url}</img>
        <p className="tenantName">{this.props.follower.login}</p>
        <p className="tenantPhone">{this.props.follower.organizations_url}</p>

      </div>
    );
  }
}

export default Follower;
