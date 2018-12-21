import React, {Component} from 'react'
import todoApp from './reducers'
import { createStore } from 'redux'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'