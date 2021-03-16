import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from 'Container/HomePage/Lodable';
import DetailsPage from 'Container/HomePage/DetailsPage';
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
          <Redirect to={{ ...location, pathname: "/1" }} />
        )}
        />
        <Route exact path='/:pageId' component={HomePage}/>
        <Route exact path='/details/:itemId' component={DetailsPage}/>
      </Switch>
    </div>
  );
}

export default App;
