
// TYPES 
export const type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CHANGE_STEP: 'CHANGE_STEP',
};

// REDUCER  
const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return state + action.payload;

    case type.DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

const stepReducer = (state = { value: 5, label: '5' }, action) => {
  switch (action.type) {
    case type.CHANGE_STEP:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});



// CREATE ACTIONS 
export const increment = value => ({
  type: Type.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value,
});

export const changeStep = step => ({
  type: Type.CHANGE_STEP,
  payload: Number(step),
});

