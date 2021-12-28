
// TYPES 
export const types = {
    CHANGE_THEME_TO_DEFAULT: '[Theme] - CHANGE_THEME_TO_DEFAULT',
    CHANGE_THEME_TO_DARK: '[Theme] - CHANGE_THEME_TO_DARK',
    FILL_THEME_COLOR: '[Theme] - FILL_THEME_COLOR'
  };

  export const types = {
    NEW_TOAST_UPDATED: 'airbnb/savetToListModal/NEW_TOAST_UPDATED',
  };

  export const types = {
    NEW_TOAST_UPDATED: 'NEW_TOAST_UPDATED',
  };

  export const NEW_TOAST_UPDATED = 'NEW_TOAST_UPDATED';
  



// REDUCER  
const initialState = {
    current: 'default',
    color: 'black'
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.CHANGE_THEME_TO_DEFAULT:
        return {
          ...state,
          current: 'default'
        };
      case types.CHANGE_THEME_TO_DARK:
        return {
          ...state,
          current: 'dark'
        };
      case types.FILL_THEME_COLOR:
        return {
          ...state,
          color: action.payload
        };
  
      default:
        return state;
    }
  };
  

// ACTIONS 
export const themeActions = {
    changeThemeToDefault: () => {
      return {
        type: types.CHANGE_THEME_TO_DEFAULT
      }
    },
    changeThemeToDark: () => {
      return {
        type: types.CHANGE_THEME_TO_DARK
      }
    },
    fillThemeColor: (color) => {
      return {
        type: types.FILL_THEME_COLOR,
        payload: color
      }
    }
  };
  


//React Hook would be 
import { useSelector, useDispatch } from 'react-redux';

export const useTheme = () => {
    const selector = (state) => state.theme;
    const { current, color } = useSelector(selector);
    const dispatch = useDispatch();
  
    const applyDefault = () => {
      dispatch(themeActions.changeThemeToDefault());
    };
  
    const applyDark = () => {
      dispatch(themeActions.changeThemeToDark());
    };
  
    const applyColor = (_color) => {
      dispatch(themeActions.fillThemeColor(_color))
    };
  
    return {
      current,
      color,
      applyDefault,
      applyDark,
      applyColor
    };
  };
  