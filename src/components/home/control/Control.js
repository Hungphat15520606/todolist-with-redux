import React, { Component } from 'react';
import Search from '../../../containers/Search'
import Sort from '../../../containers/Sort'
class Control extends Component {
  render() {
    return (  
        <div>
            <Search />
            <Sort />
        </div>
      );
    } 
  }
export default Control;