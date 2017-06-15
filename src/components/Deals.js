import React , { Component } from 'react';
import { changeFilters } from '../actions';
import axios from 'axios';
import DisplayUser from './displayUser.js';
import { Link, IndexLink } from 'react-router'



export default class Deals extends Component {
  constructor(props){
    super(props);
    this.state = {
      ret:{}
    }
    this.addUser = this.addUser.bind(this);
  }
  addUser(){

  }
  
  render(){
    var parent = this;
    var  count = 0;
    return(
      <div className="container">
        <h1 className="">User Database</h1>
        { this.props.addUser &&
          Object.keys(this.props.addUser).map(function(per_item,i){
            console.log('dsdssddsds', parent.props.addUser[per_item]);

            return <DisplayUser data={parent.props.addUser[per_item]} />
          })
        }

       

        <button><Link to={'/useradd'}>Add New User</Link></button>
      </div>
    );
  }
}
