import React from 'react';
import { connect } from 'react-redux';
import {  } from '../actions/index';
import { bindActionCreators } from 'redux';
import ProductList from './ProductList';

class UserProfile extends React.Component {
  componentDidMount(){
    this.props.getWomenData();
    console.log("component mounted");
  }
  render(){
    console.log('response in parent component',this.props.women);
        return <div>
           
        </div>
  }
}

function mapStateToProps(state) {
  return {
      user:state.user
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserProfile: getUserProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);