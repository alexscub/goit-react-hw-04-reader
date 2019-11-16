import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from '../Reader/Reader';
import publications from '../../data/publications.json';

const App = () => {
  const wrappedReader = props => <Reader items={publications} {...props} />;
  return (
    <Switch>
      <Route exact path="/reader" component={wrappedReader} />
      <Redirect from="/" to="/reader" />
    </Switch>
  );
};

export default App;
