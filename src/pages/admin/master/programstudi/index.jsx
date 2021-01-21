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
  CSelect,
  CInvalidFeedback,
} from "@coreui/react";
import { IoAdd, IoEyeSharp, IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getFakultas } from "../../../../redux/actions/fakultas";
import {
  getProdi,
  addProdi,
  deleteProdi,
  updateProdi,
} from "../../../../redux/actions/prodi";

const ProgramStudi = () => {
  const dispatch = useDispatch();
  const prodi = useSelector((data) => data.prodi.prodi);
  const fakultas = useSelector((data) => data.fakultas.fakultas);
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [id, setId] = useState("");
  const [idFak, setIdFak] = useState(0);
  const [namaProdi, setNamaProdi] = useState("");
  const [errProdi, setErrProdi] = useState(false);
  const [errFak, setErrFak] = useState(false);

  const fields = [
    { key: "nama", label: "Nama Program Studi", sorter: true },
    { key: "nama_fakultas", label: "Fakultas", sorter: true },
    "aksi",
  ];

  const handleSimpan = () => {
    idFak === 0 ? setErrFak(true) : setErrFak(false);
    namaProdi === "" ? setErrProdi(true) : setErrProdi(false);

    if (namaProdi !== "" && idFak !== 0) {
      dispatch(addProdi(namaProdi, idFak));
      setNamaProdi("");
      setIdFak(0);
      setModal(false);
    }
  };

  const handleUpdate = () => {
    idFak === 0 ? setErrFak(true) : setErrFak(false);
    namaProdi === "" ? setErrProdi(true) : setErrProdi(false);

    if (namaProdi !== "" && idFak !== 0) {
      dispatch(updateProdi(id, namaProdi, idFak));
      setId("");
      setNamaProdi("");
      setIdFak(0);
      setErrProdi(false);
      setErrFak(false);
      setModalUpdate(false);
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
        dispatch(deleteProdi(item.id));
      }
    });
    // console.log(item);
  };

  const itemUpdate = (item) => {
    setId(item.id);
    setIdFak(item.id_fakultas);
    setNamaProdi(item.nama);
    setModalUpdate(true);
  };

  useEffect(() => {
    dispatch(getProdi());
    dispatch(getFakultas());
  }, []);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Data Program Studi Universitas Muhammadiyah Gorontalo
              <div className="card-header-actions">
                <CButton color="success" onClick={() => setModal(!modal)}>
                  <IoAdd /> Tambah
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={prodi}
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
                <CModalTitle>Tambah Program Studi</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="name">Nama Program Studi</CLabel>
                      <CInput
                        id="name"
                        placeholder="Masukan Nama Program Studi"
                        value={namaProdi}
                        className="form-control-warning"
                        invalid={errProdi}
                        onChange={(e) => setNamaProdi(e.target.value)}
                      />
                      {errProdi && (
                        <CInvalidFeedback className="help-block">
                          Nama Prodi tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="fakultas">Fakultas</CLabel>
                      <CSelect
                        custom
                        name="fakultas"
                        id="fakultas"
                        value={idFak}
                        className="form-control-warning"
                        invalid={errFak}
                        onChange={(e) => setIdFak(e.target.value)}
                      >
                        <option value="0">Pilih Fakultas</option>
                        {fakultas.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.nama}
                          </option>
                        ))}
                      </CSelect>
                      {errFak && (
                        <CInvalidFeedback className="help-block">
                          Nama Fakultas harus dipilih
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
                <CModalTitle>Update Program Studi</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="nameUpdate">Nama Program Studi</CLabel>
                      <CInput
                        id="nameUpdate"
                        placeholder="Masukan Nama Program Studi"
                        value={namaProdi}
                        className="form-control-warning"
                        invalid={errProdi}
                        onChange={(e) => setNamaProdi(e.target.value)}
                      />
                      {errProdi && (
                        <CInvalidFeedback className="help-block">
                          Nama Prodi tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="fakultasUpdate">Fakultas</CLabel>
                      <CSelect
                        custom
                        name="fakultasUpdate"
                        id="fakultasUpdate"
                        value={idFak}
                        className="form-control-warning"
                        invalid={errFak}
                        onChange={(e) => setIdFak(e.target.value)}
                      >
                        <option value="0">Pilih Fakultas</option>
                        {fakultas.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.nama}
                          </option>
                        ))}
                      </CSelect>
                      {errFak && (
                        <CInvalidFeedback className="help-block">
                          Nama Fakultas harus dipilih
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

export default ProgramStudi;
