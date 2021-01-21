import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import './scss/style.scss';
import { checkLogin } from "./redux/actions/auth"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const AuthRoute = React.lazy(() => import('./utils/AuthRoute'));
const DashboardRoute = React.lazy(() => import('./utils/DashboardRoute'));
// Pages
const Login = React.lazy(() => import('./pages/login/Login'));


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin())
  }, []);

    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <AuthRoute exact path="/login" component={Login} />
              <DashboardRoute path="/" name="Home"/>
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }

export default App;
