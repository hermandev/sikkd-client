import { CEHCK_PROFIL } from "../actions";

const intialState = {
  modal: false
};

const Mahasiswa = (state = intialState, action) => {
  switch (action.type) {
    case CEHCK_PROFIL: {
      return {
        ...state,
        modal: action.data,
      };
    }

    default:
      return state;
  }
};

export default Mahasiswa;
