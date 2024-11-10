import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DashboardChartFieldList } from "./dashboardChartField/DashboardChartFieldList";
import { DashboardChartFieldCreate } from "./dashboardChartField/DashboardChartFieldCreate";
import { DashboardChartFieldEdit } from "./dashboardChartField/DashboardChartFieldEdit";
import { DashboardChartFieldShow } from "./dashboardChartField/DashboardChartFieldShow";
import { DashboardChartLinkList } from "./dashboardChartLink/DashboardChartLinkList";
import { DashboardChartLinkCreate } from "./dashboardChartLink/DashboardChartLinkCreate";
import { DashboardChartLinkEdit } from "./dashboardChartLink/DashboardChartLinkEdit";
import { DashboardChartLinkShow } from "./dashboardChartLink/DashboardChartLinkShow";
import { DashboardChartSourceList } from "./dashboardChartSource/DashboardChartSourceList";
import { DashboardChartSourceCreate } from "./dashboardChartSource/DashboardChartSourceCreate";
import { DashboardChartSourceEdit } from "./dashboardChartSource/DashboardChartSourceEdit";
import { DashboardChartSourceShow } from "./dashboardChartSource/DashboardChartSourceShow";
import { DashboardChartList } from "./dashboardChart/DashboardChartList";
import { DashboardChartCreate } from "./dashboardChart/DashboardChartCreate";
import { DashboardChartEdit } from "./dashboardChart/DashboardChartEdit";
import { DashboardChartShow } from "./dashboardChart/DashboardChartShow";
import { DashboardSettingsList } from "./dashboardSettings/DashboardSettingsList";
import { DashboardSettingsCreate } from "./dashboardSettings/DashboardSettingsCreate";
import { DashboardSettingsEdit } from "./dashboardSettings/DashboardSettingsEdit";
import { DashboardSettingsShow } from "./dashboardSettings/DashboardSettingsShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Dashboard"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DashboardChartField"
          list={DashboardChartFieldList}
          edit={DashboardChartFieldEdit}
          create={DashboardChartFieldCreate}
          show={DashboardChartFieldShow}
        />
        <Resource
          name="DashboardChartLink"
          list={DashboardChartLinkList}
          edit={DashboardChartLinkEdit}
          create={DashboardChartLinkCreate}
          show={DashboardChartLinkShow}
        />
        <Resource
          name="DashboardChartSource"
          list={DashboardChartSourceList}
          edit={DashboardChartSourceEdit}
          create={DashboardChartSourceCreate}
          show={DashboardChartSourceShow}
        />
        <Resource
          name="DashboardChart"
          list={DashboardChartList}
          edit={DashboardChartEdit}
          create={DashboardChartCreate}
          show={DashboardChartShow}
        />
        <Resource
          name="DashboardSettings"
          list={DashboardSettingsList}
          edit={DashboardSettingsEdit}
          create={DashboardSettingsCreate}
          show={DashboardSettingsShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
      </Admin>
    </div>
  );
};

export default App;
