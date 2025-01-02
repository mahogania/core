import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CariCagDcshBlCntrList } from "./cariCagDcshBlCntr/CariCagDcshBlCntrList";
import { CariCagDcshBlCntrCreate } from "./cariCagDcshBlCntr/CariCagDcshBlCntrCreate";
import { CariCagDcshBlCntrEdit } from "./cariCagDcshBlCntr/CariCagDcshBlCntrEdit";
import { CariCagDcshBlCntrShow } from "./cariCagDcshBlCntr/CariCagDcshBlCntrShow";
import { CariCagDcshBlTrlrList } from "./cariCagDcshBlTrlr/CariCagDcshBlTrlrList";
import { CariCagDcshBlTrlrCreate } from "./cariCagDcshBlTrlr/CariCagDcshBlTrlrCreate";
import { CariCagDcshBlTrlrEdit } from "./cariCagDcshBlTrlr/CariCagDcshBlTrlrEdit";
import { CariCagDcshBlTrlrShow } from "./cariCagDcshBlTrlr/CariCagDcshBlTrlrShow";
import { CariCagDcshBlVhclList } from "./cariCagDcshBlVhcl/CariCagDcshBlVhclList";
import { CariCagDcshBlVhclCreate } from "./cariCagDcshBlVhcl/CariCagDcshBlVhclCreate";
import { CariCagDcshBlVhclEdit } from "./cariCagDcshBlVhcl/CariCagDcshBlVhclEdit";
import { CariCagDcshBlVhclShow } from "./cariCagDcshBlVhcl/CariCagDcshBlVhclShow";
import { CariCagDcshBlTrnpList } from "./cariCagDcshBlTrnp/CariCagDcshBlTrnpList";
import { CariCagDcshBlTrnpCreate } from "./cariCagDcshBlTrnp/CariCagDcshBlTrnpCreate";
import { CariCagDcshBlTrnpEdit } from "./cariCagDcshBlTrnp/CariCagDcshBlTrnpEdit";
import { CariCagDcshBlTrnpShow } from "./cariCagDcshBlTrnp/CariCagDcshBlTrnpShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Cargo"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CariCagDcshBlCntr"
          list={CariCagDcshBlCntrList}
          edit={CariCagDcshBlCntrEdit}
          create={CariCagDcshBlCntrCreate}
          show={CariCagDcshBlCntrShow}
        />
        <Resource
          name="CariCagDcshBlTrlr"
          list={CariCagDcshBlTrlrList}
          edit={CariCagDcshBlTrlrEdit}
          create={CariCagDcshBlTrlrCreate}
          show={CariCagDcshBlTrlrShow}
        />
        <Resource
          name="CariCagDcshBlVhcl"
          list={CariCagDcshBlVhclList}
          edit={CariCagDcshBlVhclEdit}
          create={CariCagDcshBlVhclCreate}
          show={CariCagDcshBlVhclShow}
        />
        <Resource
          name="CariCagDcshBlTrnp"
          list={CariCagDcshBlTrnpList}
          edit={CariCagDcshBlTrnpEdit}
          create={CariCagDcshBlTrnpCreate}
          show={CariCagDcshBlTrnpShow}
        />
      </Admin>
    </div>
  );
};

export default App;
