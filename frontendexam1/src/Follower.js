import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super (props);
  }


//muestra cada uno de los atributos del usuario
  render() {
    return (
      <div>
        <img className="aptNumber">{this.props.follower.profilepic}</img>
        <td className="tenantName">{this.props.follower.tenants[0].name}</td>
        <td className="tenantPhone">{this.props.follower.tenants[0].cel}</td>
        <td className="tenantPhone">{this.props.follower.tenants[0].email}</td>
      </div>
    );
  }
}

export default Follower;
