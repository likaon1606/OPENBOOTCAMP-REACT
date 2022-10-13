import React, { useEffect }   from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailpage from './pages/tasks/TaskDetailpage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

const AppRoutingOne = () => {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged);
  }, []);

  return (
    <Router>

      <div className='App'>

        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| No Existing Rooute ||</Link>
          <Link to='/login'>| LOGIN |</Link>
        </aside>

        <main>
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/online-state' component={ StatePage } />
            <Route path='/login' component={ LoginPage }>
              {
                logged ?
                  () => {
                    alert('You are logged in. Redirecting to home...')
                    return (<Redirect to='/' />)
                  }
                :
                  () => {
                    return (<LoginPage />)
                  }
              }
            </Route>
            <Route path='/(about|faqs)' component={ AboutPage } />
            <Route path='/profile' component={ ProfilePage }>
              {
                logged ? 
                <ProfilePage />
                :
                () => {
                  alert('You must logged in. Redirecting to Login...')
                  return (<Redirect to='/login' />)
                }
              }
            </Route>
            <Route path='/tasks' component={ TasksPage } />
            <Route 
              exact 
              path='/task/:id'
              render = {
                ({match}) => (<TaskDetailpage task={taskList[match.params.id-1]} />)//? accedemos a la posicion 0 con -1, así pasamos props a una ruta
              }
              >

            </Route>

            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
          </Switch>
        </main>

      </div>

    </Router>
  );
};

export default AppRoutingOne;