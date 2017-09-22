import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super (props);
  }


  //cuando el usuario oprime Enter, hace la busqueda
  onKeyPress(evt){
    if( evt.keyCode===13){
      this.props.onSearch(evt.target.value);
    }
  }

  //render del buscado
  render() {
    return (
      <div>
        <form>
          <label>
            Github Handle:
            <input type="text" name="name" />
          </label>

        </form>
      </div>
    );
  }
}

//limitante de los parametros
SearchBar.proptypes= {
  onsearch: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};


export default SearchBar;
