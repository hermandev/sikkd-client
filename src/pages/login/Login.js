import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CInvalidFeedback,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((data) => data.app.loginLoad);
  const [username, setUsername] = useState("");
  const [errUsername, setErrUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState(false);

  const handleLogin = () => {
    username === "" ? setErrUsername(true) : setErrUsername(false);
    password === "" ? setErrPassword(true) : setErrPassword(false);
    if (username !== "" && password !== "") {
      dispatch(userLogin(username, password));
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        invalid={errUsername}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      {errUsername && (
                        <CInvalidFeedback className="help-block">
                          Username tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        invalid={errPassword}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errPassword && (
                        <CInvalidFeedback className="help-block">
                          Password tidak boleh kosong
                        </CInvalidFeedback>
                      )}
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={() => handleLogin()}
                          disabled={loading}
                        >
                          {loading && (
                            <div
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                              style={{ marginRight: 10 }}
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          )}
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h1>SIKKD - UMGO</h1>
                    <p>
                      Sistem Informasi Kuliah Kerja Dakwah Universitas
                      Muhammadiyah Gorontalo.
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
