

//  Example 

// State 
const globalState = {
    movies: [],
    filter: '',

    auth: {
      user: {
        name: null,
        avatar: null,
      },
      token: null,
    },

    role: 'admin',
    theme: 'light',
    loading: false
  };

// Reducer - returns new State 
const stateReducer = (state = globalState, action) => {
    switch (action.type) {
      
        case "SET_MOVIES":
          return {
            ...state,
            movies: [{name: 'pp'}]
          };
    
        case "SET_FILTER":

        // const newDate =  state.movies.filter( .... ) 
          return {
            ...state,
            movies: newDate,
            filter: action.payload.value
          };

        case "SET_LOADING":{
          return{
            ...state,
            loading: true
          }
        }

        case "REMOVE_LOADING":{
          return{
            ...state,
            loading: false
          }
        }

        case "SET_ROLE_ADMIN":
          return {};
        
    
        default:
          return state;
      }
}

// Action Creators 

// onClick = { ()=> setFilter(value)  }

// Action 
const setLoading = {
  type: "SET_LOADING"
}

const removeLoading = {
  type: "REMOVE_LOADING"
}

// Action Creator 
const setFilter = value => ({
    type: 'SET_FILTER',
    payload: {
        value,
    },
  });


