import React, { lazy, useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
} from "@coreui/react";
import { IoAdd, IoEyeSharp, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  getFakultas,
  addFakultas,
  deleteFakultas,
  updateFakultas,
} from "../../../../redux/actions/fakultas";

const Fakultas = () => {
  const dispatch = useDispatch();
  const fakultas = useSelector((data) => data.fakultas.fakultas);
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [singkatan, setSingkatan] = useState("");
  const [errNama, setErrNama] = useState(false);
  const [errSingkatan, setErrSingkatan] = useState(false);

  const fields = [
    { key: "nama", label: "Nama Fakultas" },
    { key: "singkatan", label: "Singkatan" },
    "aksi",
  ];

  const handleSimpan = () => {
    nama === "" ? setErrNama(true) : setErrNama(false);
    singkatan === "" ? setErrSingkatan(true) : setErrSingkatan(false);
    if (nama !== "" && singkatan !== "") {
      dispatch(addFakultas(nama, singkatan));
      setNama("");
      setSingkatan("");
      setModal(false);
    }
  };

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
        dispatch(deleteFakultas(item.id));
      }
    });
  };

  const handleUpdate = () => {
    nama === "" ? setErrNama(true) : setErrNama(false);
    singkatan === "" ? setErrSingkatan(true) : setErrSingkatan(false);
    if (nama !== "" && singkatan !== "") {
      dispatch(updateFakultas(id, nama, singkatan));
      setId("");
      setNama("");
      setSingkatan("");
      setErrNama(false);
      setErrSingkatan(false);
      setModalUpdate(false);
    }
  };

  const itemUpdate = (item) => {
    setId(item.id);
    setNama(item.nama);
    setSingkatan(item.singkatan);
    setModalUpdate(true);
  };

  useEffect(() => {
    dispatch(getFakultas());
  }, []);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Data Fakultas Universitas Muhammadiyah Gorontalo
              <div className="card-header-actions">
                <CButton
                  color="success"
                  onClick={() => {
                    setNama("");
                    setSingkatan("");
                    setId("");
                    setModal(!modal);
                  }}
                >
                  <IoAdd /> Tambah
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={fakultas}
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

            <CModal show={modal} onClose={setModal}>
              <CModalHeader closeButton>
                <CModalTitle>Tambah Fakultas</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="nama">Nama Fakultas</CLabel>
                      <CInput
                        className="form-control-warning"
                        id="nama"
                        invalid={errNama}
                        value={nama}
                        placeholder="Masukan Nama Fakultas"
                        onChange={(e) => setNama(e.target.value)}
                      />
                      {errNama && (
                        <CInvalidFeedback className="help-block">
                          Nama fakultas tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="singkatan">Singkatan</CLabel>
                      <CInput
                        className="form-control-warning"
                        id="singkatan"
                        invalid={errSingkatan}
                        value={singkatan}
                        placeholder="Masukan Singkatan"
                        onChange={(e) => setSingkatan(e.target.value)}
                      />
                      {errSingkatan && (
                        <CInvalidFeedback className="help-block">
                          Singkatan tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => handleSimpan()}>
                  Simpan
                </CButton>
                <CButton color="secondary" onClick={() => setModal(false)}>
                  Batal
                </CButton>
              </CModalFooter>
            </CModal>

            <CModal show={modalUpdate} onClose={setModalUpdate}>
              <CModalHeader closeButton>
                <CModalTitle>Update Fakultas</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="namaUpdate">Nama Fakultas</CLabel>
                      <CInput
                        className="form-control-warning"
                        id="namaUpdate"
                        invalid={errNama}
                        value={nama}
                        placeholder="Masukan Nama Fakultas"
                        onChange={(e) => setNama(e.target.value)}
                      />
                      {errNama && (
                        <CInvalidFeedback className="help-block">
                          Nama fakultas tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="singkatanUpdate">Singkatan</CLabel>
                      <CInput
                        className="form-control-warning"
                        id="singkatanUpdate"
                        invalid={errSingkatan}
                        value={singkatan}
                        placeholder="Masukan Singkatan"
                        onChange={(e) => setSingkatan(e.target.value)}
                      />
                      {errSingkatan && (
                        <CInvalidFeedback className="help-block">
                          Singkatan tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => handleUpdate()}>
                  Update
                </CButton>
                <CButton
                  color="secondary"
                  onClick={() => setModalUpdate(false)}
                >
                  Batal
                </CButton>
              </CModalFooter>
            </CModal>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Fakultas;
