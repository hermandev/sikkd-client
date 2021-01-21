import axios from "axios";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";
import { LOGIN, LOGOUT, SET_LOGIN } from "./index";

export const checkLogin = () => (dispatch) => {
  if (!localStorage.getItem("token")) {
    localStorage.removeItem("token");
    // dispatch(userLogout());
  } else {
    const decode = jwtDecode(localStorage.getItem("token"));
    if (decode.status === 0) {
      dispatch({ type: SET_LOGIN, data: false });
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Maaf anda sedang di blokir, silahkan hubungi admin",
      });
    }
    dispatch({ type: LOGIN, data: decode });
  }
};

export const userLogout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  window.location.reload();
};

export const userLogin = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOGIN, data: true });
    const login = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password,
    });

    if (login.data.success == true) {
      localStorage.setItem("token", login.data.token);
      dispatch(setAuth(login.data.token));
    } else {
      dispatch({ type: SET_LOGIN, data: false });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${login.data.message}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setAuth = (token) => (dispatch) => {
  const decode = jwtDecode(token);
  if (decode.status === 0) {
    dispatch({ type: SET_LOGIN, data: false });
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Maaf anda sedang di blokir, silahkan hubungi admin",
    });
  }
  dispatch({ type: LOGIN, data: decode });
  Swal.fire("Login Success", `Welcome ${decode.nama}`, "success");
};
