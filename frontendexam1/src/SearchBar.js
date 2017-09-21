import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super (props);

  }

  // renderWorkers(){
  //   return this.props.workers.map(
  //     (t,i)=>{
  //       return <Worker tenant={t} key={i}/>;
  //     }
  //   );
  // }
  //usando mi codigo viejoh

  onKeyPress(evt){
    if( evt.keyCode===13){
      this.props.onSearch(evt.target.value);
    }
  }
  render() {
    return (
      <div>
        <form>
  <label>
    Github Handle:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Find" />
</form>
      </div>
    );
  }
}
SearchBar.proptypes= {
  onsearch: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};


export default SearchBar;
