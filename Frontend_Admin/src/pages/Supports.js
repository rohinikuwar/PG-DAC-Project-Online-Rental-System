import { Input } from 'antd';
import React, {Component} from 'react';
import CustomInput from '../Components/CustomInput';

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      password: {
        new: null,
        match: null,
        confirmed: null,
      },
    }
    this._handleNewPassword = this._handleNewPassword.bind(this)
    this._handlePasswordMatch = this._handlePasswordMatch.bind(this)
    this._handleFormSubmission = this._handleFormSubmission.bind(this)
    this._handleConfirmedPassword = this._handleConfirmedPassword.bind(this)
  }


  _handleFormSubmission({ currentTarget }) {
    // Check the password 
    // match on form submission
    this._checkPasswordForMatch().then(
      ({ success }) => {
        if (success) {
          // post data to API
        } 
      }
    )
  }

  // handle storing the
  // new password in state
  _handleNewPassword(value) {
    let state = Object.assign({}, this.state)
    state.password.new = value 
    this.setState(state)
  }

  // handle storing the
  // confirmed password in state   
  _handleConfirmedPassword(value) {
    if (value === this.state.password.new) {
      let state = Object.assign({}, this.state)
      state.password.confirmed = value;
      this.setState(state);
    }
  }

  // handle storing the
  // confirmed password in state  
  async _handlePasswordMatch() {
    let { password } = this.state;
    let state = Object.assign({}, this.state);
    if (password.new === password.confirmed) {
      state.password.match = true        
    } else {
      state.password.match = false
    }
    await this.setState(state)
    return {
      success: state.password.match
    }   
  }

  render() {
    return (
       <div 
        method='POST'
        onFormSubmit={this._handleFormSubmission}>
          <p>Enter Old Password</p>
        <Input
          type='password'
          name='new-password'
          onChange={this._handleNewPassword}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}' />
          <p>Enter New Password</p>
        <Input
          type='password'
          name='new-password'
          onChange={this._handleNewPassword}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}' />
          <p>Confirm Password</p>
        <Input
          type='password'
          name='confirm-password'
          onChange={this._handleConfirmedPassword}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
          />
          <button className='submit' type='submit'>Submit</button> 
         
      </div>
    );
  }
}

export default Form;