// redux/reducers.js
const initialState = {
  display: '0',
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return {
        ...state,
        display: action.payload,
      };
    default:
      return state;
  }
};

export default calculatorReducer;
