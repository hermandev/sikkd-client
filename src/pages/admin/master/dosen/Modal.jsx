import React, { useState } from "react";
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
  CInputRadio,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import { IoCallSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addDosen } from "../../../../redux/actions/dosen";

function Modal({ modal, setModal }) {
  const prodi = useSelector((data) => data.prodi.prodi);
  const dispatch = useDispatch();
  const [nidn, setNidn] = useState("");
  const [errnidn, setErrNidn] = useState(false);
  const [nama, setNama] = useState("");
  const [errnama, setErrNama] = useState(false);
  const [kelamin, setKelamin] = useState("");
  const [errkelamin, setErrKelamin] = useState(false);
  const [agama, setAgama] = useState("0");
  const [erragama, setErrAgama] = useState(false);
  const [tempLahir, setTempLahir] = useState("");
  const [errtempLahir, setErrTempLahir] = useState(false);
  const [tglLahir, setTglLahir] = useState("");
  const [errtglLahir, setErrTglLahir] = useState(false);
  const [idProdi, setIdProdi] = useState("0");
  const [erridProdi, setErrIdProdi] = useState(false);
  const [fakultas, setFakultas] = useState("");
  const [nohp, setNohp] = useState("");
  const [errnohp, setErrNohp] = useState(false);

  const handleSimpan = () => {
    nidn === "" ? setErrNidn(true) : setErrNidn(false);
    nama === "" ? setErrNama(true) : setErrNama(false);
    kelamin === "" ? setErrKelamin(true) : setErrKelamin(false);
    agama === "0" ? setErrAgama(true) : setErrAgama(false);
    tempLahir === "" ? setErrTempLahir(true) : setErrTempLahir(false);
    tglLahir === "" ? setErrTglLahir(true) : setErrTglLahir(false);
    idProdi === "0" ? setErrIdProdi(true) : setErrIdProdi(false);
    nohp === "" ? setErrNohp(true) : setErrNohp(false);

    if (
      nidn !== "" &&
      nama !== "" &&
      kelamin !== "" &&
      agama !== "0" &&
      tempLahir !== "" &&
      tglLahir !== "" &&
      idProdi !== "0" &&
      nohp !== ""
    ) {
      dispatch(
        addDosen(nidn, nama, tempLahir, tglLahir, kelamin, agama, nohp, idProdi)
      );
      setModal(false)
      kosong()
    }
  };


  const kosong = () => {
      setNidn("")
      setNama("")
      setKelamin("")
      setAgama("0")
      setTempLahir("")
      setTglLahir("")
      setIdProdi("0")
      setNohp("")
  }

  return (
    <CModal show={modal} onClose={setModal}>
      <CModalHeader closeButton>
        <CModalTitle>Tambah Dosen</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="nidn">NIDN</CLabel>
              <CInput
                className="form-control-warning"
                id="nidn"
                invalid={errnidn}
                value={nidn}
                placeholder="Masukan NIDN Dosen"
                onChange={(e) => setNidn(e.target.value)}
              />
              {errnidn && (
                <CInvalidFeedback className="help-block">
                  NIDN Dosen tidak boleh kosong
                </CInvalidFeedback>
              )}
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="nama">Nama Dosen</CLabel>
              <CInput
                className="form-control-warning"
                id="nama"
                invalid={errnama}
                value={nama}
                placeholder="Masukan Nama Dosen"
                onChange={(e) => setNama(e.target.value)}
              />
              {errnama && (
                <CInvalidFeedback className="help-block">
                  Nama Dosen tidak boleh kosong
                </CInvalidFeedback>
              )}
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol md="12">
            <CFormGroup>
              <CLabel>Jenis Kelamin</CLabel>
              <br />
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="laki"
                  name="kelamin"
                  value="1"
                  onChange={(e) => setKelamin(e.target.value)}
                />
                <CLabel variant="custom-checkbox" htmlFor="laki">
                  Laki-Laki
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="perempuan"
                  name="kelamin"
                  value="2"
                  onChange={(e) => setKelamin(e.target.value)}
                />
                <CLabel variant="custom-checkbox" htmlFor="perempuan">
                  Perempuan
                </CLabel>
              </CFormGroup>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="agama">Agama</CLabel>
              <CSelect
                custom
                name="agama"
                id="agama"
                value={agama}
                className="form-control-warning"
                invalid={erragama}
                onChange={(e) => setAgama(e.target.value)}
              >
                <option value="0">Pilih Agama</option>
                <option value="Islam">Islam</option>
                <option value="Kristen">Kristen</option>
                <option value="Hindu">Hindu</option>
                <option value="Budha">Budha</option>
                <option value="Katolik">Katolik</option>
              </CSelect>
              {erragama && (
                <CInvalidFeedback className="help-block">
                  Program studi harus dipilih
                </CInvalidFeedback>
              )}
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="tempat">Tempat Lahir</CLabel>
              <CInput
                className="form-control-warning"
                id="tempat"
                invalid={errtempLahir}
                value={tempLahir}
                placeholder="Masukan Tempat Lahir"
                onChange={(e) => setTempLahir(e.target.value)}
              />
              {errtempLahir && (
                <CInvalidFeedback className="help-block">
                  Tempat lahir tidak boleh kosong
                </CInvalidFeedback>
              )}
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="ccyear">Tanggal Lahir</CLabel>
              <CInput
                type="date"
                value={tglLahir}
                id="date-input"
                invalid={errtglLahir}
                name="date-input"
                placeholder="date"
                onChange={(e) => setTglLahir(e.target.value)}
              />
              {errtglLahir && (
                <CInvalidFeedback className="help-block">
                  Tanggal lahir tidak boleh kosong
                </CInvalidFeedback>
              )}
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
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
                onChange={(e) => {
                  setIdProdi(e.target.value);
                  setFakultas("");
                  e.target.value !== "0" &&
                    prodi.filter((item) => {
                      setFakultas(item.nama_fakultas);
                    });
                }}
              >
                <option value="0">Pilih Prodi</option>
                {prodi.map((item) => (
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
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="fakultas">Fakultas</CLabel>
              <CInput
                className="form-control-warning"
                id="fakultas"
                disabled
                value={fakultas}
                placeholder="Masukan Fakultas"
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="nohp">Nomor HP</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <IoCallSharp />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  id="nohp"
                  name="nohp"
                  value={nohp}
                  invalid={errnohp}
                  onChange={(e) => setNohp(e.target.value)}
                  placeholder="+62 8000000"
                />
                {errnohp && (
                  <CInvalidFeedback className="help-block">
                    Program studi harus dipilih
                  </CInvalidFeedback>
                )}
              </CInputGroup>
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
  );
}

export default Modal;
