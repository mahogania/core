import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CargoDeclarationList } from "./cargoDeclaration/CargoDeclarationList";
import { CargoDeclarationCreate } from "./cargoDeclaration/CargoDeclarationCreate";
import { CargoDeclarationEdit } from "./cargoDeclaration/CargoDeclarationEdit";
import { CargoDeclarationShow } from "./cargoDeclaration/CargoDeclarationShow";
import { CargoDeclarationContainerList } from "./cargoDeclarationContainer/CargoDeclarationContainerList";
import { CargoDeclarationContainerCreate } from "./cargoDeclarationContainer/CargoDeclarationContainerCreate";
import { CargoDeclarationContainerEdit } from "./cargoDeclarationContainer/CargoDeclarationContainerEdit";
import { CargoDeclarationContainerShow } from "./cargoDeclarationContainer/CargoDeclarationContainerShow";
import { CargoDeclarationTrailerList } from "./cargoDeclarationTrailer/CargoDeclarationTrailerList";
import { CargoDeclarationTrailerCreate } from "./cargoDeclarationTrailer/CargoDeclarationTrailerCreate";
import { CargoDeclarationTrailerEdit } from "./cargoDeclarationTrailer/CargoDeclarationTrailerEdit";
import { CargoDeclarationTrailerShow } from "./cargoDeclarationTrailer/CargoDeclarationTrailerShow";
import { CargoDeclarationVehicleList } from "./cargoDeclarationVehicle/CargoDeclarationVehicleList";
import { CargoDeclarationVehicleCreate } from "./cargoDeclarationVehicle/CargoDeclarationVehicleCreate";
import { CargoDeclarationVehicleEdit } from "./cargoDeclarationVehicle/CargoDeclarationVehicleEdit";
import { CargoDeclarationVehicleShow } from "./cargoDeclarationVehicle/CargoDeclarationVehicleShow";
import { CargoDeclarationTransportList } from "./cargoDeclarationTransport/CargoDeclarationTransportList";
import { CargoDeclarationTransportCreate } from "./cargoDeclarationTransport/CargoDeclarationTransportCreate";
import { CargoDeclarationTransportEdit } from "./cargoDeclarationTransport/CargoDeclarationTransportEdit";
import { CargoDeclarationTransportShow } from "./cargoDeclarationTransport/CargoDeclarationTransportShow";
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
          name="CargoDeclaration"
          list={CargoDeclarationList}
          edit={CargoDeclarationEdit}
          create={CargoDeclarationCreate}
          show={CargoDeclarationShow}
        />
        <Resource
          name="CargoDeclarationContainer"
          list={CargoDeclarationContainerList}
          edit={CargoDeclarationContainerEdit}
          create={CargoDeclarationContainerCreate}
          show={CargoDeclarationContainerShow}
        />
        <Resource
          name="CargoDeclarationTrailer"
          list={CargoDeclarationTrailerList}
          edit={CargoDeclarationTrailerEdit}
          create={CargoDeclarationTrailerCreate}
          show={CargoDeclarationTrailerShow}
        />
        <Resource
          name="CargoDeclarationVehicle"
          list={CargoDeclarationVehicleList}
          edit={CargoDeclarationVehicleEdit}
          create={CargoDeclarationVehicleCreate}
          show={CargoDeclarationVehicleShow}
        />
        <Resource
          name="CargoDeclarationTransport"
          list={CargoDeclarationTransportList}
          edit={CargoDeclarationTransportEdit}
          create={CargoDeclarationTransportCreate}
          show={CargoDeclarationTransportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
