import React from 'react';

import './LoginPage.scss';

function LoginPage() {
  return (
    <div className='App'>
    <label>User Name</label>
    <input type='text'/>
    {console.log('aman')}
    <label>Password</label>
    <input type='password'/>
    </div>
  );
}

export default LoginPage;
