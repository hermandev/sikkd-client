import React, { lazy, useState, useEffect } from "react";
import {
  CButton,
  CCol,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
  CSelect,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { registrasi } from "../../../redux/actions/fakultas";

const Modal = ({ modal, setModal, fakultas }) => {
  const dispatch = useDispatch();
  const prodi = useSelector((data) => data.prodi.prodi);
  const [nim, setNim] = useState("");
  const [errnim, setErrNim] = useState(false);
  const [nama, setNama] = useState("");
  const [errnama, setErrNama] = useState(false);
  const [idProdi, setIdProdi] = useState("0");
  const [erridProdi, setErrIdProdi] = useState(false);

  const filterProd = prodi.filter((item) => {
    return item.id_fakultas === fakultas;
  });

  const handleSimpan = () => {
    nim === "" ? setErrNim(true) : setErrNim(false);
    nama === "" ? setErrNama(true) : setErrNama(false);
    idProdi === "0" ? setErrIdProdi(true) : setErrIdProdi(false);

    if (nim !== "" && nama !== "" && idProdi !== "0") {
      dispatch(registrasi(nim, nama, fakultas,idProdi));
      setModal(false);
      setNim("");
      setNama("");
      setIdProdi("0");
    }
  };

  return (
    <>
      <CModal show={modal} onClose={() => setModal(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Registrasi</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="nim">NIM</CLabel>
                <CInput
                  className="form-control-warning"
                  id="nim"
                  invalid={errnim}
                  value={nim}
                  placeholder="Masukan NIM"
                  onChange={(e) => setNim(e.target.value)}
                />
                {errnim && (
                  <CInvalidFeedback className="help-block">
                    NIM tidak boleh kosong
                  </CInvalidFeedback>
                )}
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="nama">Nama Mahasiswa</CLabel>
                <CInput
                  className="form-control-warning"
                  id="nama"
                  invalid={errnama}
                  value={nama}
                  placeholder="Masukan Nama"
                  onChange={(e) => setNama(e.target.value)}
                />
                {errnama && (
                  <CInvalidFeedback className="help-block">
                    Nama tidak boleh kosong
                  </CInvalidFeedback>
                )}
              </CFormGroup>
            </CCol>
            <CCol xs="12">
              <CFormGroup>
                <CLabel htmlFor="prodi">Program Studi</CLabel>
                <CSelect
                  custom
                  name="prodi"
                  id="prodi"
                  value={idProdi}
                  className="form-control-warning"
                  invalid={erridProdi}
                  onChange={(e) => setIdProdi(e.target.value)}
                >
                  <option value="0">Pilih Prodi</option>
                  {filterProd.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                      onClick={() => alert("OK")}
                    >
                      {item.nama}
                    </option>
                  ))}
                </CSelect>
                {erridProdi && (
                  <CInvalidFeedback className="help-block">
                    Program studi harus dipilih
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
    </>
  );
};

export default Modal;
