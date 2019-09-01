import React from 'react';
import './style.scss';
class Header extends React.Component {
    state = {
        userName : '',
        passWord : ''
    }
    handleUsernamePassword = (e, type) => {
        if (e) {
            if (type === 'username') {
             this.setState({ userName : e.target.value })
            } else if (type === 'password') {
                this.setState({ passWord : e.target.value })
            }
        } 
    }
  render() {
    return (
        <form onSubmit={(e ) => this.props.handleSubmit(e, this.state.userName, this.state.passWord)}>
            <div className='imgcontainer'>
                <img src={'https://www.w3schools.com/howto/img_avatar2.png'} alt='Avatar' className="avatar" />
            </div>

            <div className='container'>
                <label htmlFor='uname'><b>Username</b></label>
                <input type='text' placeholder='Enter Username' name='uname'
                value={this.state.userName}
                onChange={(e) => this.handleUsernamePassword(e, 'username')}
                required />

                <label htmlFor='psw'><b>Password</b></label>
                <input type='password' placeholder='Enter Password' name='psw'
                value={this.state.passWord}
                onChange={(e) => this.handleUsernamePassword(e, 'password')}
                required />

                <button type='submit'>Login </button>
            </div>
        </form>
    );
  }
}

export default Header;