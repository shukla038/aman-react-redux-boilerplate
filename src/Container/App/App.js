import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from 'Container/HomePage/Lodable'
import 'styles/globalStyle.scss';

function App(props) {
  return (
    <div className='App'>
    <Helmet>
      <meta name='description' content="A React.js Boilerplate application" />
    </Helmet>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
