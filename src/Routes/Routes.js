import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from '../Pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth" component={Pages.Auth} />
      <Route path="/log" component={Pages.MoodLog} />
      <Route path="/log2" component={Pages.MoodLog2} />
      <Route path="/test" component={Pages.CustomSelect} />
      <Route exact path="/logs/:id" component={Pages.ShowLog} />
      <Route exact path="/" component={Pages.Home} />
    </Switch>
  );
};

export default Routes;
