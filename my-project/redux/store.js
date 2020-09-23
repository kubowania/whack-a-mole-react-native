import { createStore } from 'redux'
import scoreReducer from './reducer'

const store = createStore(scoreReducer)

export default store
