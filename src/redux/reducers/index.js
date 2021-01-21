import { combineReducers } from "redux";
import changeState from "./sidebar";
import Fakultas from "./fakultas";
import Prodi from "./prodi";
import Dosen from "./dosen";
import Auth from "./auth";
import App from "./app";

export default combineReducers({
  changeState,
  app: App,
  fakultas: Fakultas,
  prodi: Prodi,
  dosen: Dosen,
  auth: Auth,
});
