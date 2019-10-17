import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import TodoList from './components/TodoList'
import Footer from './components/Footer'

import { context, stores } from './stores'
import { useStore } from './useStore'

const Component = observer(() => {
  const { todos, idStore } = useStore()

  const updateIdStore = () => {
    const completedIds = todos.todos.filter(t => t.completed).map(t => t.id)
    idStore.setSelected(completedIds)
  }

  useEffect(updateIdStore, [])

  return (
    <div className='App'>
      <h2>A Todo App yet again!</h2>
      <TodoList todos={todos.todos} toggleTodo={(index) => {
        todos.toggleTodo(index)

        updateIdStore()
      }} />
      <Footer remaining={todos.remainingTodos} total={todos.todos.length} />

      {JSON.stringify(idStore.ids)}
    </div>
  )
})

function App() {
  return (
    <context.Provider value={stores}>
      <Component />
    </context.Provider>
  )
}

export default App
