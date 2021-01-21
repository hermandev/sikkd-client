import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";
import { GET_PRODI } from "./index";
import { ToastSuccess } from "../../config/notifications";

export const getProdi = () => async (dispatch) => {
  try {
    const prodi = await axios.get(`${BASE_URL}/prodi`);
    if (prodi) {
      dispatch({ type: GET_PRODI, data: prodi.data.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addProdi = (nama, id_fakultas) => async (dispatch) => {
  try {
    const prodi = await axios.post(`${BASE_URL}/prodi`, {
      nama,
      id_fakultas,
    });
    if (prodi.status == 201) {
      ToastSuccess.fire({
        icon: "success",
        title: "Fakultas berhasil disimpan",
      });
      dispatch(getProdi());
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProdi = (id) => async (dispatch) => {
  try {
    const fakultas = await axios.delete(`${BASE_URL}/prodi/${id}`);
    if (fakultas.status == 200) {
      ToastSuccess.fire({
        icon: "success",
        title: "Prodi berhasil dihapus",
      });
      dispatch(getProdi());
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateProdi = (id, nama, id_fakultas) => async (dispatch) => {
  try {
    const prodi = await axios.put(`${BASE_URL}/prodi`, {
      id,
      nama,
      id_fakultas,
    });
    if (prodi.status == 200) {
      ToastSuccess.fire({
        icon: "success",
        title: "Prodi berhasil diupdate!",
      });
      dispatch(getProdi());
    }
  } catch (error) {
    console.log(error);
  }
};
