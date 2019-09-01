import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from 'Container/HomePage/Lodable'
import LoginPage from 'Container/LoginPage/Lodable'
import PostsDetailPage from 'Container/PostsDetailPage/Lodable' 
import 'styles/globalStyle.scss';

function App() {
  return (
    <div className='App'>
    <Helmet>
      <meta name='description' content="A React.js Boilerplate application" />
    </Helmet>
    <Switch>
      <Route exact path='/' component={LoginPage}/>
      <Route path='/home' component={HomePage}/>
      <Route path='/posts/:id' component={PostsDetailPage}/>
    </Switch>
    </div>
  );
}

export default App;
