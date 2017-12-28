import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component{
  render(){
    return(
      <div>
        <form>
          <label>Email
            <input
             onChange={this.updateFields('email')}
             type="text"
             values={this.state.email}
             placeholder="jsuser@gmail.com"
            />
          </label>
          <label>Password
          <input
          onChange={this.updateFields('password')}
          type="text"
          values={this.state.password}
          />
          </label>
        </form>
      </div>
    );
  }
}

export default SignUp;
