import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.signedIn){
      this.props.history.push("/");
    }
  }
  componentWillUnmount(){
    this.props.clearSessionErrors();
  }
  renderErrors(){
    if (this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) =>
            <li key={`error-${i}`}>{error}</li>
          )}
        </ul>
      );
    }
  }
  updateFields(field){
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.signUp({user});
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <div>{this.renderErrors()}</div>
          <div><input
            type='submit'
            value='Signup'
          /></div>
        </form>
      </div>
    );
  }
}

export default SignUp;
