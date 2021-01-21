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
import {
  getFakultas,
  deleteFakultas,
} from "../../../../redux/actions/fakultas";

import { getProdi } from "../../../../redux/actions/prodi";
import { getDosen, deleteDosen } from "../../../../redux/actions/dosen";

const Modal = lazy(() => import("./Modal"));
const ModalUpdate = lazy(() => import("./ModalUpdate"));

const Dosen = () => {
  const dispatch = useDispatch();
  const prodi = useSelector((data) => data.prodi.prodi);
  const dosen = useSelector((data) => data.dosen.dosen);
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [itemUpdate, setItemUpdate] = useState(null);

  const fields = [
    { key: "nama", label: "Nama Dosen" },
    { key: "nidn", label: "NIDN" },
    { key: "prodi", label: "Program Studi" },
    { key: "kelamin", label: "L / P" },
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
        dispatch(deleteDosen(item.id));
      }
    });
  };

  const onUpdate = (item) => {
    setItemUpdate(item);
    setModalUpdate(true);
  };

  useEffect(() => {
    dispatch(getDosen());
    dispatch(getProdi());
    dispatch(getFakultas());
  }, []);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Data Dosen Universitas Muhammadiyah Gorontalo
              <div className="card-header-actions">
                <CButton
                  color="success"
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  <IoAdd /> Tambah
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={dosen}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                itemsPerPageSelect
                tableFilter
                scopedSlots={{
                  kelamin: (item) => (
                    <td>{item.kelamin == 1 ? "Laki-Laki" : "Perempuan"}</td>
                  ),
                  aksi: (item) => (
                    <td>
                      <CButton
                        color="warning"
                        size="sm"
                        style={{ marginRight: 5 }}
                        onClick={() => onUpdate(item)}
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

            <Modal modal={modal} setModal={setModal} />
            {itemUpdate !== null && (
              <ModalUpdate
                modal={modalUpdate}
                setModal={setModalUpdate}
                items={itemUpdate}
                setItemUpdate={setItemUpdate}
              />
            )}
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dosen;
