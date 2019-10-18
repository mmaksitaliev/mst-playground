import React, { useEffect } from 'react'
import { inject, observer, Provider } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import TodoList from './components/TodoList'
import Footer from './components/Footer'

import { context, stores } from './stores'
import { useStore } from './useStore'

import { Main } from './components/Main'

function App() {
  return (
    <Provider {...stores}>
      <Main />
    </Provider>
  )
}

export default App
