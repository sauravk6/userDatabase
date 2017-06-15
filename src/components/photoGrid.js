import React, { Component, PropTypes } from 'react';

import Link from 'react-router';
import Deals from './Deals.js';
import { changeView } from '../actions';

export default class Grid extends Component {

  constructor() {
    super();
    
  }



  render() {

    return (
    	<div className="main-page">
          <Deals {...this.props} />
          
        </div>
    );
  }
}
