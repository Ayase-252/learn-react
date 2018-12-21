import React, { Component } from 'react'
import './Blog.css'

const ThemeContext = React.createContext('red')

class BlogContent extends Component {
  render() {
    let theme = this.context
    return <div className={`content ${theme}`}>{this.props.children}</div>
  }
}

BlogContent.contextType = ThemeContext

const BlogContentFuncVer = props => (
  <div className={`content ${props.theme}`}>{props.children}</div>
)

export default class Blog extends Component {
  render() {
    return (
      <ThemeContext.Provider value='red'>
        <article>
          <h2>This is a naive blog</h2>
          <ThemeContext.Consumer>
            {value => <BlogContentFuncVer theme={value}>
              <p>this is a function component consuming themecontext</p>
            </BlogContentFuncVer>}
          </ThemeContext.Consumer>
          <BlogContent className='content'>
            <p>Hello react, the color of text will change based on theme</p>
          </BlogContent>
        </article>
      </ThemeContext.Provider>
    )
  }
}
