import React , { Component } from 'react';
import axios from 'axios';
import { Link, IndexLink } from 'react-router'

import { addNewUser } from '../actions';



export default class DisplayUser extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var parent = this;
    var  count = 0;
    return(
      <div>
        <Link to={`edit/${this.props.data.id}`}>
        <div className="userCard">

          <div className="black">Name: {this.props.data.firstname}<span> {this.props.data.lastname} {
            !this.props.data.regular && <span>(admin)</span>
          }</span></div>
          <div className="black">Email:{this.props.data.email}</div>
          <div className="black">Phone No.: {this.props.data.phone}</div>
        </div>
        </Link>
      </div>
    )
  }
}
