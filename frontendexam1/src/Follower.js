import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super (props);
    // this.state={
    //   orgs: []
    // }
  }

  //funcion auxiliar que llama el json de las orgs a las que pertenece el usuario
  //   componentWillMount(){
  //     var orgs = this.props.follower.organizations_url;
  //     //fetch inicial con mi perfil
  //     fetch(orgs, {method:"GET", headers:{accept: "application/json"}})
  //     //luego lo revisa y lo convierte a json
  //     .then((res)=>{if(res.ok) return res.json();})
  //     //pone en el state los followers, del array data
  //     .then((orgs)=>{this.setState({orgs: orgs.data});
  //   });
  // }
  //mapea las organizaciones a las que pertenece el user
  // mapOrgs(){
  //   return follower.map((t,i)=>
  //   {return <Follower follower={t} key={i}/>;}
  // );
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
