import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


import {
  ADD_NEW_USER,UPDATE_USER,DELETE_USER,
} from '../actions'



const addUser = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      var key = action.item.id;
      console.log(action.item);
      return {
              ...state,
              [key] : action.item
          };
        break;
    case UPDATE_USER:
      var key = action.item.id;
      return {
              ...state,
              [key] : action.item
          };
          break;
    case DELETE_USER:
      var key = action.item.id;
      var obj = {};
      Object.keys(state).filter(function(per_item, i){
        if(per_item !== key){
          obj[per_item] = state[per_item];
        }
      })
      return obj;
    default:
      return state
  }
}



const rootReducer = combineReducers({
  addUser,
  routing: routerReducer
})


export default rootReducer
