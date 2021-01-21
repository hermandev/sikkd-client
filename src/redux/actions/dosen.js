import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";
import { GET_DOSEN } from "./index";
import { ToastSuccess } from "../../config/notifications";

export const getDosen = () => async (dispatch) => {
  try {
    const dosen = await axios.get(`${BASE_URL}/dosen`);
    if (dosen) {
      dispatch({ type: GET_DOSEN, data: dosen.data.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addDosen = (
  nidn,
  nama,
  temp_lahir,
  tgl_lahir,
  kelamin,
  agama,
  no_hp,
  id_prodi
) => async (dispatch) => {
  try {
    const dosen = await axios.post(`${BASE_URL}/dosen`, {
      nidn,
      nama,
      temp_lahir,
      tgl_lahir,
      kelamin,
      agama,
      no_hp,
      id_prodi,
    });
    if (dosen.status == 201) {
      ToastSuccess.fire({
        icon: "success",
        title: "Dosen berhasil disimpan",
      });
      dispatch(getDosen());
    } else {
      ToastSuccess.fire({
        icon: "error",
        title: "Dosen gagal disimpan",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteDosen = (id) => async (dispatch) => {
  try {
    const dosen = await axios.delete(`${BASE_URL}/dosen/${id}`);
    if (dosen.status == 200) {
      ToastSuccess.fire({
        icon: "success",
        title: "Dosen berhasil dihapus",
      });
      dispatch(getDosen());
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateDosen = (
  id,
  nidn,
  nama,
  temp_lahir,
  tgl_lahir,
  kelamin,
  agama,
  no_hp,
  id_prodi
) => async (dispatch) => {
  try {
    const dosen = await axios.put(`${BASE_URL}/dosen`, {
      id,
      nidn,
      nama,
      temp_lahir,
      tgl_lahir,
      kelamin: parseInt(kelamin),
      agama,
      no_hp,
      id_prodi: parseInt(id_prodi),
    });
    if (dosen.status == 200) {
      ToastSuccess.fire({
        icon: "success",
        title: "Dosen berhasil diupdate!",
      });
      dispatch(getDosen());
    }
  } catch (error) {
    console.log(error);
  }
};
