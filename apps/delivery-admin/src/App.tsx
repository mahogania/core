import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeliveryNoteItemList } from "./deliveryNoteItem/DeliveryNoteItemList";
import { DeliveryNoteItemCreate } from "./deliveryNoteItem/DeliveryNoteItemCreate";
import { DeliveryNoteItemEdit } from "./deliveryNoteItem/DeliveryNoteItemEdit";
import { DeliveryNoteItemShow } from "./deliveryNoteItem/DeliveryNoteItemShow";
import { DeliveryNoteList } from "./deliveryNote/DeliveryNoteList";
import { DeliveryNoteCreate } from "./deliveryNote/DeliveryNoteCreate";
import { DeliveryNoteEdit } from "./deliveryNote/DeliveryNoteEdit";
import { DeliveryNoteShow } from "./deliveryNote/DeliveryNoteShow";
import { DeliveryStopList } from "./deliveryStop/DeliveryStopList";
import { DeliveryStopCreate } from "./deliveryStop/DeliveryStopCreate";
import { DeliveryStopEdit } from "./deliveryStop/DeliveryStopEdit";
import { DeliveryStopShow } from "./deliveryStop/DeliveryStopShow";
import { DeliveryTripList } from "./deliveryTrip/DeliveryTripList";
import { DeliveryTripCreate } from "./deliveryTrip/DeliveryTripCreate";
import { DeliveryTripEdit } from "./deliveryTrip/DeliveryTripEdit";
import { DeliveryTripShow } from "./deliveryTrip/DeliveryTripShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Delivery"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DeliveryNoteItem"
          list={DeliveryNoteItemList}
          edit={DeliveryNoteItemEdit}
          create={DeliveryNoteItemCreate}
          show={DeliveryNoteItemShow}
        />
        <Resource
          name="DeliveryNote"
          list={DeliveryNoteList}
          edit={DeliveryNoteEdit}
          create={DeliveryNoteCreate}
          show={DeliveryNoteShow}
        />
        <Resource
          name="DeliveryStop"
          list={DeliveryStopList}
          edit={DeliveryStopEdit}
          create={DeliveryStopCreate}
          show={DeliveryStopShow}
        />
        <Resource
          name="DeliveryTrip"
          list={DeliveryTripList}
          edit={DeliveryTripEdit}
          create={DeliveryTripCreate}
          show={DeliveryTripShow}
        />
      </Admin>
    </div>
  );
};

export default App;
