import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from './Reader';
import publications from '../../data/publications.json';

const ReaderRouter = () => {
  const wrappedReader = props => <Reader items={publications} {...props} />;
  return (
    <Switch>
      <Redirect from="/reader"  to="/reader?item=1" />
      <Route path="/reader?item=" component={wrappedReader} />
    </Switch>
  );
};

export default ReaderRouter;