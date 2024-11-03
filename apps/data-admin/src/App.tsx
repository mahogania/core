import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataImportList } from "./dataImport/DataImportList";
import { DataImportCreate } from "./dataImport/DataImportCreate";
import { DataImportEdit } from "./dataImport/DataImportEdit";
import { DataImportShow } from "./dataImport/DataImportShow";
import { DataImportLogList } from "./dataImportLog/DataImportLogList";
import { DataImportLogCreate } from "./dataImportLog/DataImportLogCreate";
import { DataImportLogEdit } from "./dataImportLog/DataImportLogEdit";
import { DataImportLogShow } from "./dataImportLog/DataImportLogShow";
import { DefaultValueList } from "./defaultValue/DefaultValueList";
import { DefaultValueCreate } from "./defaultValue/DefaultValueCreate";
import { DefaultValueEdit } from "./defaultValue/DefaultValueEdit";
import { DefaultValueShow } from "./defaultValue/DefaultValueShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Data"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataImport"
          list={DataImportList}
          edit={DataImportEdit}
          create={DataImportCreate}
          show={DataImportShow}
        />
        <Resource
          name="DataImportLog"
          list={DataImportLogList}
          edit={DataImportLogEdit}
          create={DataImportLogCreate}
          show={DataImportLogShow}
        />
        <Resource
          name="DefaultValue"
          list={DefaultValueList}
          edit={DefaultValueEdit}
          create={DefaultValueCreate}
          show={DefaultValueShow}
        />
      </Admin>
    </div>
  );
};

export default App;
