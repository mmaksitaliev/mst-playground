import React from 'react'

import { Todos } from './TodoStore'
import { Ids } from './IdsStore'

export const stores = {
  todos: new Todos(),
  idStore: Ids.create()
}

export const context = React.createContext(stores)

window.s = stores
