
import {combineReducers} from 'redux'
import countReducer from './countReducer'
import productReducer from './ProductReducer'
export default combineReducers({

    products:productReducer,
    counter:countReducer
})