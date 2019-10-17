import React from 'react'

import { context } from './stores'

export const useStore = () => React.useContext(context)
