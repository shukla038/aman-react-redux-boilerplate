import React from 'react';
import LoginForm from 'Components/LoginForm'
import './LoginPage.scss';

class LoginPage extends React.Component{
    handleSubmit = (e, obj1, obj2) => {
        e.preventDefault()
        if(obj1 === 'amanshukla_456'
        && parseInt(obj2) === 1234567
        ) {
            this.props.history.push('/home')
        }
    }
    render(){
        return (
            <React.Fragment>
                <LoginForm
                handleSubmit={this.handleSubmit}
                />
            </React.Fragment>
      );
    }
}

export default LoginPage;
