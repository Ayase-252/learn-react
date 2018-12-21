import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Clock from './components/Clock'
import { Link, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './App.css'

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about/'>About</Link>
          <Link to='/users/'>Users</Link>
          <Link to='/hello-world/'>Hello World</Link>
          <NavLink to='/clock/' activeStyle={{color: 'red'}}>Clock</NavLink>
        </nav>
        <Switch>
          <Route path='/' exact component={Index}></Route>
          <Route path='/about/' component={About}></Route>
          <Route path='/users/' component={Users}></Route>
          <Route path='/hello-world/' render={() => <HelloWorld name='Mr.J'></HelloWorld>}></Route>
          <Route path='/clock/' component={Clock}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
