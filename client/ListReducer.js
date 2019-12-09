import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    "Olive Oil", "Garlic", "White Wine", "Chicken Stock", "Parsley", "Oregano", "Salt", "Pepper"
  ],
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  list: listReducer,
});