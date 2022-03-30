import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/HeaderBar/Header';
import HomeIndex from './ViewPage/HomePage/HomeIndex';

const App = () => {
  return (
    <Router basename='/demoapp'> 
      <Header />
        <Switch> 
          <Route exact path='/'> <HomeIndex /> </Route>
       </Switch>
    </Router>
  )
}

export default App;