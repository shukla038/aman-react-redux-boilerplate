import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from 'Container/HomePage/Lodable'
import NotFoundPage from 'Container/NotFoundPage/Lodable'
import 'styles/globalStyle.scss';

function App(props) {
  return (
    <div className='App'>
    <Helmet>
      <meta name='description' content="A React.js Boilerplate application" />
    </Helmet>
      <Switch>
        <Route
         exact
          path='/'
         render={({ location }) => (
          <Redirect to={{ ...location, pathname: "/angular/angular/node" }} />
        )}
         />
         <Route
         path= '/angular/angular/node'
         component={HomePage}
         />
        <Route path='*' component={NotFoundPage}/>
      </Switch>
    </div>
  );
}

export default App;
