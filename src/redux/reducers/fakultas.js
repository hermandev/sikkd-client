import { GET_FAKULTAS, GET_MHS_FAKULTAS } from "../actions";

const intialState = {
  fakultas: [],
  mahasiswa: [],
};

const Fakultas = (state = intialState, action) => {
  switch (action.type) {
    case GET_FAKULTAS: {
      return {
        ...state,
        fakultas: action.data,
      };
    }

    case GET_MHS_FAKULTAS: {
      return {
        ...state,
        mahasiswa: action.data,
      };
    }

    default:
      return state;
  }
};

export default Fakultas;
