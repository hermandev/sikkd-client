import { GET_DOSEN } from "../actions";

const intialState = {
  dosen: [],
};

const Dosen = (state = intialState, action) => {
  switch (action.type) {
    case GET_DOSEN: {
      return {
        ...state,
        dosen: action.data,
      };
    }

    default:
      return state;
  }
};

export default Dosen;
