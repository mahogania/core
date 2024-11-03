import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlanketOrderItemList } from "./blanketOrderItem/BlanketOrderItemList";
import { BlanketOrderItemCreate } from "./blanketOrderItem/BlanketOrderItemCreate";
import { BlanketOrderItemEdit } from "./blanketOrderItem/BlanketOrderItemEdit";
import { BlanketOrderItemShow } from "./blanketOrderItem/BlanketOrderItemShow";
import { BlanketOrderList } from "./blanketOrder/BlanketOrderList";
import { BlanketOrderCreate } from "./blanketOrder/BlanketOrderCreate";
import { BlanketOrderEdit } from "./blanketOrder/BlanketOrderEdit";
import { BlanketOrderShow } from "./blanketOrder/BlanketOrderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Order"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BlanketOrderItem"
          list={BlanketOrderItemList}
          edit={BlanketOrderItemEdit}
          create={BlanketOrderItemCreate}
          show={BlanketOrderItemShow}
        />
        <Resource
          name="BlanketOrder"
          list={BlanketOrderList}
          edit={BlanketOrderEdit}
          create={BlanketOrderCreate}
          show={BlanketOrderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
