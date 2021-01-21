import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";
import { GET_FAKULTAS, GET_MHS_FAKULTAS } from "./index";
import { ToastSuccess } from "../../config/notifications";

export const getFakultas = () => async (dispatch) => {
  try {
    const fakultas = await axios.get(`${BASE_URL}/fakultas`);
    if (fakultas) {
      dispatch({ type: GET_FAKULTAS, data: fakultas.data.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addFakultas = (nama, singkatan) => async (dispatch) => {
  try {
    const fakultas = await axios.post(`${BASE_URL}/fakultas`, {
      nama,
      singkatan,
    });
    if (fakultas.status == 201) {
      ToastSuccess.fire({
        icon: "success",
        title: "Fakultas berhasil disimpan",
      });
      dispatch(getFakultas());
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteFakultas = (id) => async (dispatch) => {
  try {
    const fakultas = await axios.delete(`${BASE_URL}/fakultas/${id}`);
    if (fakultas.status == 200) {
      ToastSuccess.fire({
        icon: "success",
        title: "Fakultas berhasil dihapus",
      });
      dispatch(getFakultas());
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateFakultas = (id, nama, singkatan) => async (dispatch) => {
  try {
    const fakultas = await axios.put(`${BASE_URL}/fakultas`, {
      id,
      nama,
      singkatan,
    });
    if (fakultas.status == 200) {
      ToastSuccess.fire({
        icon: "success",
        title: "Fakultas berhasil diupdate!",
      });
      dispatch(getFakultas());
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMahasiswaByProdi = (id) => async (dispatch) => {
  try {
    const fakultas = await axios.get(`${BASE_URL}/fakultas/${id}`);
    if (fakultas) {
      dispatch({ type: GET_MHS_FAKULTAS, data: fakultas.data.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const registrasi = (nim, nama, id_fakultas,id_prodi) => async (dispatch) => {
  try {
    const mahasiswa = await axios.post(`${BASE_URL}/auth/register`, {
      nim,
      nama,
      username: nim,
      password: nim,
      role: "Mahasiswa",
      fakultas: id_fakultas,
      prodi: id_prodi,
    });
    if (mahasiswa) {
      ToastSuccess.fire({
        icon: "success",
        title: "Registrasi berhasil!",
      });
      dispatch(getMahasiswaByProdi(id_fakultas));
    }
  } catch (error) {}
};

export const deleteMahasiswaByNim = (nim, id_prodi) => async (dispatch) => {
  try {
    const mahasiswa = await axios.delete(
      `${BASE_URL}/fakultas/mahasiswa/${nim}`
    );
    console.log(mahasiswa)
    if (mahasiswa.data.success == true) {
      ToastSuccess.fire({
        icon: "success",
        title: "Registrasi berhasil!",
      });
      dispatch(getMahasiswaByProdi(id_prodi));
    }
  } catch (error) {
    console.log(error);
  }
};
