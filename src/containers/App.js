import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'


import '../styles/style.styl';




class App extends Component {


  render() {
    return (
      <div>


        


        
        {React.cloneElement(this.props.children, this.props)}

      </div>
    );
  }
}

const search = 10;

const mapStateToProps = (state) => {
  const { addUser } = state;
  
  return {
        addUser
  }
}

export default connect(mapStateToProps)(App)
