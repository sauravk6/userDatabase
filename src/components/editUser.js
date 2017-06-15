
import React from 'react';
import Link from 'react-router';
import { updateUser, deleteUser } from '../actions';



export default class EditUser extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstNameEdit: '',
      lastNameEdit: '',
      emailEdit: '',
      phoneEdit: '',
      regularEdit: ''
    }
    this.id = '';
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  handleChange(input, e){
    var parent = this;
    let text = e.target.value;
    this.setState({
      [input]: text
    }, () => {

    });
  }

  deleteUser(){
    console.log('asd');
    var user = {
      'id': this.props.params.id,
      'firstname': this.state.firstNameEdit,
      'lastname': this.state.lastNameEdit,
      'email': this.state.emailEdit,
      'phone': this.state.phoneEdit
    };
    const {dispatch} = this.props
    dispatch(deleteUser(user))
    window.location.href = "#";
  }

  updateUser(){
    console.log('asd');
    var user = {
      'id': this.props.params.id,
      'firstname': this.state.firstNameEdit,
      'lastname': this.state.lastNameEdit,
      'email': this.state.emailEdit,
      'phone': this.state.phoneEdit,
      'regular': this.state.regularEdit
    };
    const {dispatch} = this.props
    dispatch(updateUser(user))
    window.location.href = "#";

  }

  componentWillMount(){
    var parent = this;
    this.id = Object.keys(this.props.addUser).filter(function(per_item,i){
      if(per_item == parent.props.params.id){
        return per_item;
      }
    });
    
  }
  componentDidMount(){
    var parent = this;
    this.setState({
      firstNameEdit: this.props.addUser[this.id].firstname,
      lastNameEdit: this.props.addUser[this.id].lastname,
      emailEdit: this.props.addUser[this.id].email,
      phoneEdit: this.props.addUser[this.id].phone,
      regularEdit: this.props.addUser[this.id].regular
    });

  }


 render() {
  var parent = this;
  console.log(this.props.addUser);
    
   return (
       <div className="container">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" value={this.state.firstNameEdit} onChange={e => this.handleChange('firstNameEdit', e)} className="form-control" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value={this.state.lastNameEdit} onChange={e => this.handleChange('lastNameEdit', e)} className="form-control" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" value={this.state.emailEdit} onChange={e => this.handleChange('emailEdit', e)} className="form-control" placeholder="EmailEdit"/>
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" value={this.state.phoneEdit} onChange={e => this.handleChange('phoneEdit', e)} className="form-control" placeholder="PhoneEdit"/>
        </div> 
        <div className="form-group">
          <button onClick={this.updateUser}>Update User</button>
          {this.state.regularEdit && <button onClick={this.deleteUser}>Delete User</button> }

        </div> 

      </div>
   );
 }
}