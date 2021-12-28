
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
