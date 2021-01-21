import React, { useState, useEffect } from "react";
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
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateDosen } from "../../../../redux/actions/dosen";

function Modal({ modal, setModal, items, setItemUpdate }) {
  const prodi = useSelector((data) => data.prodi.prodi);
  const dispatch = useDispatch();
  const [id, setId] = useState(items.id);
  const [nidn, setNidn] = useState(items.nidn);
  const [errnidn, setErrNidn] = useState(false);
  const [nama, setNama] = useState(items.nama);
  const [errnama, setErrNama] = useState(false);
  const [kelamin, setKelamin] = useState(items.kelamin);
  const [errkelamin, setErrKelamin] = useState(false);
  const [agama, setAgama] = useState(items.agama);
  const [erragama, setErrAgama] = useState(false);
  const [tempLahir, setTempLahir] = useState(items.temp_lahir);
  const [errtempLahir, setErrTempLahir] = useState(false);
  const [tglLahir, setTglLahir] = useState(
    moment(items.tgl_lahir).format("yyyy-MM-DD")
  );
  const [errtglLahir, setErrTglLahir] = useState(false);
  const [idProdi, setIdProdi] = useState(items.id_prodi);
  const [erridProdi, setErrIdProdi] = useState(false);
  const [fakultas, setFakultas] = useState("");
  const [nohp, setNohp] = useState(items.no_hp);
  const [errnohp, setErrNohp] = useState(false);

  const handleUpdate = () => {
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
        updateDosen(
          id,
          nidn,
          nama,
          tempLahir,
          tglLahir,
          kelamin,
          agama,
          nohp,
          idProdi
        )
      );
      setModal(false);
      kosong();
      setItemUpdate(null);
    }
  };

  const kosong = () => {
    setNidn("");
    setNama("");
    setKelamin("");
    setAgama("0");
    setTempLahir("");
    setTglLahir("");
    setIdProdi("0");
    setNohp("");
  };

  useEffect(() => {
    prodi.filter((item) => {
      items.id_prodi == item.id && setFakultas(item.nama_fakultas);
    });
  }, []);
  return (
    <CModal
      show={modal}
      onClose={() => {
        setModal(false);
        setItemUpdate(null);
      }}
    >
      <CModalHeader closeButton>
        <CModalTitle>Tambah Dosen</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="nidnUp">NIDN</CLabel>
              <CInput
                className="form-control-warning"
                id="nidnUp"
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
              <CLabel htmlFor="namaUp">Nama Dosen</CLabel>
              <CInput
                className="form-control-warning"
                id="namaUp"
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
                  id="lakiUp"
                  name="kelaminUp"
                  value="1"
                  checked={kelamin == "1" ? true:false}
                  onChange={(e) => setKelamin(e.target.value)}
                />
                <CLabel variant="custom-checkbox" htmlFor="lakiUp">
                  Laki-Laki
                </CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="perempuanUp"
                  name="kelaminUp"
                  value="2"
                  checked={kelamin == "2" ? true:false}
                  onChange={(e) => setKelamin(e.target.value)}
                />
                <CLabel variant="custom-checkbox" htmlFor="perempuanUp">
                  Perempuan
                </CLabel>
              </CFormGroup>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFormGroup>
              <CLabel htmlFor="agamaUp">Agama</CLabel>
              <CSelect
                custom
                name="agamaUp"
                id="agamaUp"
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
              <CLabel htmlFor="tempatUp">Tempat Lahir</CLabel>
              <CInput
                className="form-control-warning"
                id="tempatUp"
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
                name="date-inputUp"
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
              <CLabel htmlFor="prodiUp">Program Studi</CLabel>
              <CSelect
                custom
                name="prodiUp"
                id="prodiUp"
                value={idProdi}
                className="form-control-warning"
                invalid={erridProdi}
                onChange={(e) => {
                  setIdProdi(e.target.value);
                  setFakultas("");
                  e.target.value !== "0" &&
                    prodi.filter((item) => {
                      e.target.value == item.id &&
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
              <CLabel htmlFor="fakultasUp">Fakultas</CLabel>
              <CInput
                className="form-control-warning"
                id="fakultasUp"
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
              <CLabel htmlFor="nohpUp">Nomor HP</CLabel>
              <CInputGroup>
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <IoCallSharp />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  id="nohpUp"
                  name="nohpUp"
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
        <CButton color="success" onClick={() => handleUpdate()}>
          Update
        </CButton>
        <CButton color="secondary" onClick={() => setModal(false)}>
          Batal
        </CButton>
      </CModalFooter>
    </CModal>
  );
}

export default Modal;
