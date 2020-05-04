import React, { Component } from 'react';

import SignInForm from './signinForm';
import pageTitle from '../pageTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }


    render() {
        return (
            <div className='sign-in'>
                <pageTitle className='sign-in__page-title' title='Login' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form'/>
            </div>
        )
    }
}



export default SignIn;