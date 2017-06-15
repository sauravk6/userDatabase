import React , { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import axios from 'axios';
import { addNewUser } from '../actions';



export default class UserAdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      regular: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.button1Changed = this.button1Changed.bind(this);
    this.buttonChanged = this.buttonChanged.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  handleChange(input, e){
    var parent = this;
    let text = e.target.value;
    this.setState({
      [input]: text
    }, () => {

    });
  }

  saveUser(){
    var user = {
      'id': Math.random()*99999999999999999,
      'firstname': this.state.firstName,
      'lastname': this.state.lastName,
      'email': this.state.email,
      'regular': this.state.regular,
      'phone': this.state.phone
    };
    console.log(user);
    const {dispatch} = this.props
    dispatch(addNewUser(user))
    window.location.href = "#";

  }

  buttonChanged(){
    this.setState({
      regular: true
    })
  }

  button1Changed(){
    this.setState({
      regular: false
    })
  }
  
  render(){
    var parent = this;
    var  count = 0;
    return(
      <div className="container">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" onChange={e => this.handleChange('firstName', e)} className="form-control" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" onChange={e => this.handleChange('lastName', e)} className="form-control" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" onChange={e => this.handleChange('email', e)} className="form-control" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" onChange={e => this.handleChange('phone', e)} className="form-control" placeholder="Phone"/>
        </div>

        <div className="form-group">
          <label>Regular - Can be deleted</label>
          <input type="checkbox" className="form-control" checked={this.state.regular} onChange={this.buttonChanged} />
        </div>
        <div className="form-group">
          <label>Admin - Can't be deleted</label>
          <input type="checkbox" className="form-control" checked={!this.state.regular} onChange={this.button1Changed} />
        </div>
        <div className="form-group">
          <button onClick={this.saveUser}>Save</button>
        </div>

        <button><Link to={'/'}>Back</Link></button>
      </div>
    )
  }
}
