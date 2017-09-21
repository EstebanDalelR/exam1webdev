import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super (props);
  }



  render() {
    return (
      <div>
        <td className="aptNumber">{this.props.follower.number}</td>
        <td className="tenantName">{this.props.follower.tenants[0].name}</td>
        <td className="tenantPhone">{this.props.follower.tenants[0].cel}</td>
        <td className="tenantPhone">{this.props.follower.tenants[0].email}</td>
      </div>
    );
  }
}

export default Follower;
