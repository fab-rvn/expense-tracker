import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Switch>
          <Route path="/reports" component={Reports} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
