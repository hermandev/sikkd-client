import { LOGIN, LOGOUT } from "../actions";

const intialState = {
  authentication: null,
};

const Dosen = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authentication: action.data,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        authentication: null,
      };
    }

    default:
      return state;
  }
};

export default Dosen;
