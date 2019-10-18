import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle, withHandlers, withProps } from 'recompose'
import _ from 'lodash/fp'

import TodoList from './TodoList'
import Footer from './Footer'

const MainFC = observer(({
  todos,
  idStore,
  // updateIdStore,
}) => (
  <div className='App'>
    <h2>A Todo App yet again!</h2>
    <TodoList todos={todos.todos} toggleTodo={(index) => {
      todos.toggleTodo(index)

      const completedIds = _.pipe(
        _.filter('completed'),
        _.map('id'),
      )(todos.todos)
      idStore.setSelected(completedIds)
    }} />
    <Footer remaining={todos.remainingTodos} total={todos.todos.length} />

    <h3>Completed todos {JSON.stringify(idStore.ids)}</h3>
  </div>
))



/* class Wrapper extends React.Component {
  updateIdStore = () => {
    const { todos, idStore } = this.props

    const completedIds = _.pipe(
      _.filter('completed'),
      _.map('id'),
    )(todos.todos)

    idStore.setSelected(completedIds)
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props.idStore.ids, nextProps.idStore.ids)
  }

  componentDidMount() {
    console.log('componentDid Mount')
    console.log({...this.props.idStore.ids})

    this.updateIdStore()

    console.log({...this.props.idStore.ids})
  }

  componentDidUpdate(prevProps) {
    console.log('componentDid Update')

    if (_.isEqual(this.props.idStore.ids, prevProps.idStore.ids)) {
      console.log('debug, ids changed')
    }
  }

  render() {
    return <MainFC updateIdStore={this.updateIdStore} {...this.props}/>
  }
} */



export const Main = compose(
  inject('todos', 'idStore'),
/*
  observer,

  withProps(({ idStore, todos }) => ({
    ids: [...idStore.ids],
  })), */

  withHandlers({
    updateIdStore: ({ idStore, todos }) => () => {
      const completedIds = _.pipe(
        _.filter('completed'),
        _.map('id'),
      )(todos.todos)

      idStore.setSelected(completedIds)
    }
  }),

  observer,

  lifecycle({
    componentDidMount() {
      console.log('componentDid Mount')

      this.props.updateIdStore()
    },

    componentDidUpdate(prevProps) {
      console.log('componentDid Update')

      if (_.isEqual(this.props.ids, prevProps.ids)) {
        console.log('debug, ids changed')
      }
    },
  }),
)(MainFC)
