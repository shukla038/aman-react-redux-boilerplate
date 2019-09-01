import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component {
  render() {
    return (
        <div class="header">
            <a class="active" onClick={ ()=> this.props.history.push('/home')}>Home</a>
            <div class="header-right">
                <a onClick={ ()=> this.props.history.push('/')}>Logout</a>
            </div>
        </div>
    );
  }
}

export default Header;