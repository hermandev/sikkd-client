import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";
import { useSelector } from "react-redux";

// routes config
import routesAdmin from "../routes/admin";
import routesFakultas from "../routes/fakultas";
import routesMahasiswa from "../routes/mahasiswa";
import CheckProfil from "../pages/mahasiswa/check";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  const permission = useSelector((data) => data.auth.authentication.role);
  const profil = useSelector((data) => data.auth.authentication.status_profil);
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {permission == "Admin" && (
              <>
                {routesAdmin.map((route, idx) => {
                  return (
                    route.component && (
                      <>
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => (
                            <CFade>
                              <route.component {...props} />
                            </CFade>
                          )}
                        />
                        <Redirect from="/" to="/dashboard" />
                      </>
                    )
                  );
                })}
              </>
            )}

            {permission == "Fakultas" && (
              <>
                {routesFakultas.map((route, idx) => {
                  return (
                    route.component && (
                      <>
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => (
                            <CFade>
                              <route.component {...props} />
                            </CFade>
                          )}
                        />

                        <Redirect from="/" to="/dashboard" />
                      </>
                    )
                  );
                })}
              </>
            )}

            {permission == "Mahasiswa" && (
              <>
                {routesMahasiswa.map((route, idx) => {
                  return (
                    route.component && (
                      <>
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => (
                            <CFade>
                              <route.component {...props} />
                            </CFade>
                          )}
                        />
                        <Redirect from="/" to="/dashboard" />
                      </>
                    )
                  );
                })}
              </>
            )}
          </Switch>
        </Suspense>

        {profil === 0 && <CheckProfil />}
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
