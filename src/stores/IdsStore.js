import { types } from 'mobx-state-tree'

export const Ids = types.model({
  ids: types.array(types.number)
}).actions(self => ({
  setSelected(selected) {
    self.ids = selected
  },

  push(id) {
    self.ids.push(id)
  }
}))
