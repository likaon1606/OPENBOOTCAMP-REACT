import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css'

import LoginPage from './pages/auth/LoginPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';

const AppRoutingFinal = () => {

  // TODO Change to value from sesionStorage (something)
  let loggedIn = true;

  return (
   <Router>
    <div className='App'>
    {/* Route Switch */}
    <Switch>
      {/* Redirections to protect our routes */}
      <Route exact path='/'>
        {
          loggedIn ?
          (<Redirect from='/' to='/dashboard' />)// from va desde la raiz hacia adelante
          :
          (<Redirect from='/' to='/login' />)
        }
      </Route>
      {/* Login Route */}
      <Route exact path='/login' component={LoginPage} />
      {/* Dashboard Route */}
      <Route exact path='/dashboard'>
        {
          loggedIn ?
          (<Dashboardpage />)// from va desde la raiz hacia adelante
          :
          (<Redirect from='/' to='/login' />)
        }
      </Route>
      <Route component={ Notfoundpage } />
    </Switch>
    </div>
   </Router>
  );
};

export default AppRoutingFinal;