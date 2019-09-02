import React from 'react';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
        <div className='header'>
            <a href className='active' onClick={ ()=> this.props.history.push('/home')}>Home</a>
            <div className='header-right'>
                <a href onClick={ ()=> this.props.history.push('/')}>Logout</a>
            </div>
        </div>
    );
  }
}

export default Header;