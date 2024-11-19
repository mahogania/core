import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeEducationList } from "./employeeEducation/EmployeeEducationList";
import { EmployeeEducationCreate } from "./employeeEducation/EmployeeEducationCreate";
import { EmployeeEducationEdit } from "./employeeEducation/EmployeeEducationEdit";
import { EmployeeEducationShow } from "./employeeEducation/EmployeeEducationShow";
import { EmployeeExternalWorkHistoryList } from "./employeeExternalWorkHistory/EmployeeExternalWorkHistoryList";
import { EmployeeExternalWorkHistoryCreate } from "./employeeExternalWorkHistory/EmployeeExternalWorkHistoryCreate";
import { EmployeeExternalWorkHistoryEdit } from "./employeeExternalWorkHistory/EmployeeExternalWorkHistoryEdit";
import { EmployeeExternalWorkHistoryShow } from "./employeeExternalWorkHistory/EmployeeExternalWorkHistoryShow";
import { EmployeeGroupTableList } from "./employeeGroupTable/EmployeeGroupTableList";
import { EmployeeGroupTableCreate } from "./employeeGroupTable/EmployeeGroupTableCreate";
import { EmployeeGroupTableEdit } from "./employeeGroupTable/EmployeeGroupTableEdit";
import { EmployeeGroupTableShow } from "./employeeGroupTable/EmployeeGroupTableShow";
import { EmployeeGroupList } from "./employeeGroup/EmployeeGroupList";
import { EmployeeGroupCreate } from "./employeeGroup/EmployeeGroupCreate";
import { EmployeeGroupEdit } from "./employeeGroup/EmployeeGroupEdit";
import { EmployeeGroupShow } from "./employeeGroup/EmployeeGroupShow";
import { EmployeeInternalWorkHistoryList } from "./employeeInternalWorkHistory/EmployeeInternalWorkHistoryList";
import { EmployeeInternalWorkHistoryCreate } from "./employeeInternalWorkHistory/EmployeeInternalWorkHistoryCreate";
import { EmployeeInternalWorkHistoryEdit } from "./employeeInternalWorkHistory/EmployeeInternalWorkHistoryEdit";
import { EmployeeInternalWorkHistoryShow } from "./employeeInternalWorkHistory/EmployeeInternalWorkHistoryShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Employee"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmployeeEducation"
          list={EmployeeEducationList}
          edit={EmployeeEducationEdit}
          create={EmployeeEducationCreate}
          show={EmployeeEducationShow}
        />
        <Resource
          name="EmployeeExternalWorkHistory"
          list={EmployeeExternalWorkHistoryList}
          edit={EmployeeExternalWorkHistoryEdit}
          create={EmployeeExternalWorkHistoryCreate}
          show={EmployeeExternalWorkHistoryShow}
        />
        <Resource
          name="EmployeeGroupTable"
          list={EmployeeGroupTableList}
          edit={EmployeeGroupTableEdit}
          create={EmployeeGroupTableCreate}
          show={EmployeeGroupTableShow}
        />
        <Resource
          name="EmployeeGroup"
          list={EmployeeGroupList}
          edit={EmployeeGroupEdit}
          create={EmployeeGroupCreate}
          show={EmployeeGroupShow}
        />
        <Resource
          name="EmployeeInternalWorkHistory"
          list={EmployeeInternalWorkHistoryList}
          edit={EmployeeInternalWorkHistoryEdit}
          create={EmployeeInternalWorkHistoryCreate}
          show={EmployeeInternalWorkHistoryShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
