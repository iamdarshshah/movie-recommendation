import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import React from 'react'
import App from './components/App'

const Root = () => {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/movies' />
          <Route exact path='/movies' render={() => <App type='movies' />} />
          <Route
            exact
            path='/movies/now-playing'
            render={() => <App type='nowPlaying' />}
          />
          <Route
            exact
            path='/movies/top-rated'
            render={() => <App type='topRated' />}
          />
          <Route
            exact
            path='/movies/upcoming'
            render={() => <App type='upcoming' />}
          />
        </Switch>
      </Router>
    </>
  )
}

export default Root
