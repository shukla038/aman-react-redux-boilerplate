import React from 'react';
import './style.scss';

class Header extends React.Component {
  render() {
    var navData = ['TV', 'MOVIES', 'SPORTS','NEWS', 'PREMIUM']
    return (
        <div className='header'>
        {navData.map((data, index)=>
          <a href className='active' onClick={ ()=> this.props.history.push('/home')}>{data}</a>
          )}
            <div className='header-right'>
                <a href onClick={ ()=> this.props.history.push('/')}>Logout</a>
            </div>
        </div>
    );
  }
}

export default Header;