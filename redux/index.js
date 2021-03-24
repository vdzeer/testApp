import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// actions
export const onClickImage = ({imageUrl}) => {
  return dispatch => {
    dispatch({type: 'ADD_IMAGE_URL', payload: imageUrl});
  };
};

// reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_IMAGE_URL':
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  reducer,
});

// store
export const store = createStore(rootReducer, applyMiddleware(thunk));
