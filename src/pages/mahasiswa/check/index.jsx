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

const CheckProfil = ({ modal, setModal, fakultas }) => {
  
 
  return (
    <>
      <CModal show={true}  closeOnBackdrop={false} >
        <CModalHeader>
          <CModalTitle>Registrasi</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h1>Check Prfile Mahasiswa</h1>
        </CModalBody>
        <CModalFooter>
          <CButton color="success" >
            Simpan
          </CButton>
          <CButton color="secondary">
            Batal
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CheckProfil;
