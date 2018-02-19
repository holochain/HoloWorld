import React from 'react'
import { Provider } from 'react-redux'
import Index from './pages/indexContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <Index />
  </Provider>
)

export default Root
