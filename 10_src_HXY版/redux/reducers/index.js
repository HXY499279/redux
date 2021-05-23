import count from './count'
import persons from './person'

import { combineReducers } from 'redux'

export default combineReducers({
    count,
    persons
})