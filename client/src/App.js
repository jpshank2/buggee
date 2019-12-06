import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './reba-components/layout/Navbar'
import Landing from './reba-components/layout/Landing'
import Register from './reba-components/auth/Register'
import Login from './reba-components/auth/Login'
import Alert from './reba-components/layout/Alert'
import Dashboard from './reba-components/dashboard/Dashboard'
import CreateProfile from './reba-components/profile-forms/CreateProfile'
import EditProfile from './reba-components/profile-forms/EditProfile'
import PrivateRoute from './reba-components/routing/PrivateRoute'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register'component={Register} />
              <Route exact path='/login'component={Login} />
              <PrivateRoute exact path='/dashboard'component={Dashboard} />
              <PrivateRoute exact path='/create-profile'component={CreateProfile} />
              <PrivateRoute exact path='/edit-profile'component={EditProfile} />
            </Switch>
          </section>
        </Fragment>
      </Router>  
    </Provider>    
)}

export default App
