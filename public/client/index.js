//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import LoggingExercise from './components/exercise/LoggingExercise';
import UserView from './components/userView/UserView';
import Overview from './components/overview/Overview';
import Dashboard from './components/adminDashboard/Dashboard';
<<<<<<< HEAD
import LoginPage from './components/LoginPage';

=======
import NewChallenge from './components/userView/NewChallenge';

>>>>>>> cde8ebabcb98ff69c622ad8979288283921ff3e6
render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Overview}/>
      <Route path="/user" component={UserView}/>
      <Route path="/overview" component={Overview}/>
      <Route path="/exercise" component={LoggingExercise}/>
      <Route path="/admin" component={Dashboard} />
      <Route path="/loginpage" component={LoginPage} />
      <Route path="/newChallenge" component={NewChallenge} />
    </Route>
  </Router>
), document.getElementById('app'))
