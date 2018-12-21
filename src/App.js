import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Clock from './components/Clock'
import Blog from './pages/Blog'
import Todo from './pages/Todo'
import { Link, Route, Switch, NavLink } from 'react-router-dom'
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
          <NavLink to='/clock/' activeStyle={{ color: 'red' }}>
            Clock
          </NavLink>
          <Link to='/blog/'>Blog</Link>
          <Link to='/todo/'></Link>
        </nav>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/about/' component={About} />
          <Route path='/users/' component={Users} />
          <Route
            path='/hello-world/'
            render={() => <HelloWorld name='Mr.J' />}
          />
          <Route path='/clock/' component={Clock} />
          <Route path='/blog/' component={Blog} />
          <Route path='/todo/' component={Todo}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
