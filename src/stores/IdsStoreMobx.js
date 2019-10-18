import { decorate, observable, computed } from 'mobx'

export class Ids {
  ids = []

  setSelected(selected) {
    this.ids = selected
  }

  push(id) {
    this.ids.push(id)
  }
}

decorate(Ids, {
  todos: observable,
  remainingTodos: computed
})
