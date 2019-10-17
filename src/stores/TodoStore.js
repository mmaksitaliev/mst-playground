import { decorate, observable, computed } from 'mobx'

export class Todos {
  todos = [
    { id: 1, text: 'Buy eggs', completed: true },
    { id: 2, text: 'Write a post', completed: false }
  ]

  get remainingTodos() {
    return this.todos.filter(t => !t.completed).length
  }

  toggleTodo = index => {
    this.todos[index].completed = !this.todos[index]
      .completed
  }
}

decorate(Todos, {
  todos: observable,
  remainingTodos: computed
})
