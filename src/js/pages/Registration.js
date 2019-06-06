import React from 'react';

class Registration extends React.Component {
	constructor() {
	super();
	    this.state = {
	        firstName: '',
	        secondName : '',
	        email : '',
	        phNo : '',
	        password :'',
	        cpassword:''
	    }
	}
	saveDetails(){
		let userData ={
			firstName: this.state.firstName,
	        secondName : this.state.secondName,
	        email : this.state.email,
	        phNo : this.state.phNo,
	        password : this.state.password,
	        cpassword: this.state.cpassword,
		}
		console.log("userData",userData)

	}
	onInputChange(data,name){
		if(name === 'firstName'){
			this.setState({firstName : data }) //TASK FOR SETTING STATE OF THE FORM ELEMNTS
		}
	}

    render() {
        return <div>
            <h5>Registration</h5>
            <div>FirstName : 
            	<input type="text" name="firstName" value={this.state.firstName} placeholder="Chetna Singh" onChange={ (event)=> this.onInputChange(event.target.value,'firstName')} /></div>
            <div>SecondName : 
            	<input type="text" name="secondName" value={this.state.secondName}  onChange={ (event)=> this.onInputChange(event.target.value,'secondName')} /></div>
            <div>Email : 
            	<input type="email" name="email" value={this.state.email}  onChange={ (event)=> this.onInputChange(event.target.value,'email')} /></div>
            <div>Ph-no : 
            	<input type="number" name="phNo" value={this.state.phNo}  onChange={ (event)=> this.onInputChange(event.target.value,'phNo')} /></div>
            <div>Password : 
            	<input type="password" name="password" value={this.state.password}  onChange={ (event)=> this.onInputChange(event.target.value,'password')} /></div>
            <div>Confirm-Password : 
            	<input type="password" name="cpassword" value={this.state.cpassword}  onChange={ (event)=> this.onInputChange(event.target.value,'cpassword')} /></div>
            <div>
            	<button className="btn btn-primary" onClick={ () => this.saveDetails() } >Save</button></div>
        </div>
    }
}

export default Registration;