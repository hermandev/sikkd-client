import React, { lazy, useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
} from "@coreui/react";
import { IoAdd, IoEyeSharp, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Modal from "./Modal";
import ModalUpdate from "./ModalUpdate";
import {
  getMahasiswaByProdi,
  deleteMahasiswaByNim,
} from "../../../redux/actions/fakultas";
import { getProdi } from "../../../redux/actions/prodi";

const Fakultas = () => {
  const dispatch = useDispatch();
  const auth = useSelector((data) => data.auth.authentication);
  const mahasiswa = useSelector((data) => data.fakultas.mahasiswa);
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const fields = [
    { key: "nim", label: "NIM" },
    { key: "nama", label: "Nama Mahasiswa" },
    { key: "prodi", label: "Program Studi" },
    "aksi",
  ];

  const handleHapus = (item) => {
    Swal.fire({
      title: "Apa anda yakin.?",
      text: "Anda akan menghapus data ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMahasiswaByNim(item.nim, auth.id_fakultas));
      }
    });
  };

  const itemUpdate = (item) => {
    // setId(item.id);
    // setNama(item.nama);
    // setSingkatan(item.singkatan);
    // setModalUpdate(true);
  };

  useEffect(() => {
    dispatch(getMahasiswaByProdi(auth.id_fakultas));
    dispatch(getProdi());
  }, []);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Data Mahasiswa Universitas Muhammadiyah Gorontalo
              <div className="card-header-actions">
                <CButton
                  color="success"
                  onClick={() => {
                    // setNama("");
                    // setSingkatan("");
                    // setId("");
                    setModal(!modal);
                  }}
                >
                  <IoAdd /> Tambah
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={mahasiswa}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                itemsPerPageSelect
                tableFilter
                scopedSlots={{
                  aksi: (item) => (
                    <td>
                      <CButton
                        color="warning"
                        size="sm"
                        style={{ marginRight: 5 }}
                        onClick={() => itemUpdate(item)}
                      >
                        <IoEyeSharp />
                      </CButton>
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => handleHapus(item)}
                      >
                        <IoTrashOutline />
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
          <Modal modal={modal} setModal={setModal} fakultas={auth.id_fakultas} />
        </CCol>
      </CRow>
    </>
  );
};

export default Fakultas;
