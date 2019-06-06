import React from 'react';
import Registration from './Registration';

class LoginPage extends React.Component {

  render() {
    return <div>
        	<button class="btn btn-danger" type="button"  data-toggle="modal" data-target="#myModal">Register/login</button>
        	<div class="modal fade" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
            
              {/*!-- Modal Header -->*/}
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              
              <div class="modal-body">
                <Registration/>
              </div>
              
              <div class="modal-footer">
              <div class="g-signin2" data-onsuccess="onSignIn"></div>

                <button type="button" class="btn btn-success" onClick={this.onRegister}>Register</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    	</div>
  }
}

export default LoginPage;