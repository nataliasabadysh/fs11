

# REDUX base


```js

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
```



# STORE 

```js
// 1
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// todosReducer

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;

// 2
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  timer: timerReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;

```


```js
export default {
  ADD: 'todos/add',
  DELETE: 'todos/delete'
};

const todosReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

```



```js

   
import shortid from 'shortid';

// TYPES 
export default {
    ADD: 'notes/add',
    DELETE: 'notes/delete',
    TOGGLE_COMPLETED: 'notes/toggleCompleted',
    CHANGE_FILTER: 'notes/changeFilter',
  };
  

// ACTIONS 
const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// REDUCER 
const notesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

```

# Theme 


```js

// Reducer  
const initialState = {
    current: 'default'
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_THEME_TO_DEFAULT':
        return {
          current: 'default'
        };
      case 'CHANGE_THEME_TO_DARK':
        return {
          current: 'dark'
        };
  
      default:
        return state;
    }
  };
  
  
// Action 
export const changeThemeToDefault = () => {
    return {
      type: 'CHANGE_THEME_TO_DEFAULT'
    }
  };

  
  export const changeThemeToDark = () => {
    return {
      type: 'CHANGE_THEME_TO_DARK'
    }
  };



// React Hook would be 
  import { useSelector, useDispatch } from 'react-redux';

  // useDispatch -  for the actions, call the action 
  // useSelector = how to get ALL state 

  export const useTheme = () => {

  const selector = (state) => state.theme;
  
  const current = useSelector((globalState)=> globalState.theme.current);


  const dispatch = useDispatch();

  const applyDefault = () => {
    dispatch(changeThemeToDefault());
  };

  const applyDark = () => {
    dispatch(changeThemeToDark());
  };

  return { current: theme.current, applyDefault, applyDark };
};
  ```



# ASYNC 


```js

// Sync
export const fillPostSync = (data) => {
    return {
        type: FILL_POST,
        payload: data

    }
}

export const startLoading = {
    type: START_LOADING,
}

export const stopLoading = {
    type: STOP_LOADING,
}

export const setErrorMessage = (msg) => ({
    type: SET_ERROR,
    payload: msg
})


// Async
export const fetchPost = (params) => (dispatch) => {
    dispatch(startLoading)
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => dispatch(fillPostSync(data)))
        .catch(error => setErrorMessage(error))
        .finally(() => dispatch(stopLoading))
}
````
