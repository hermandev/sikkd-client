import { SET_LOGIN } from "../actions";

const intialState = {
  loginLoad: false
};

const App = (state = intialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        loginLoad: action.data,
      };
    }

    default:
      return state;
  }
};

export default App;
