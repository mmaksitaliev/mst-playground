import React from 'react'

import { Todos } from './TodoStore'
import { Ids } from './IdsStore'
// import { Ids } from './IdsStoreMobx'

export const stores = {
  todos: new Todos(),
  idStore: Ids.create(),
  // idStore: new Ids(),
}

export const context = React.createContext(stores)

window.s = stores
