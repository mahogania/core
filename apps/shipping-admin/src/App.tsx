import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShipmentList } from "./shipment/ShipmentList";
import { ShipmentCreate } from "./shipment/ShipmentCreate";
import { ShipmentEdit } from "./shipment/ShipmentEdit";
import { ShipmentShow } from "./shipment/ShipmentShow";
import { ShipmentDeliveryNoteList } from "./shipmentDeliveryNote/ShipmentDeliveryNoteList";
import { ShipmentDeliveryNoteCreate } from "./shipmentDeliveryNote/ShipmentDeliveryNoteCreate";
import { ShipmentDeliveryNoteEdit } from "./shipmentDeliveryNote/ShipmentDeliveryNoteEdit";
import { ShipmentDeliveryNoteShow } from "./shipmentDeliveryNote/ShipmentDeliveryNoteShow";
import { ShipmentParcelList } from "./shipmentParcel/ShipmentParcelList";
import { ShipmentParcelCreate } from "./shipmentParcel/ShipmentParcelCreate";
import { ShipmentParcelEdit } from "./shipmentParcel/ShipmentParcelEdit";
import { ShipmentParcelShow } from "./shipmentParcel/ShipmentParcelShow";
import { ShipmentParcelTemplateList } from "./shipmentParcelTemplate/ShipmentParcelTemplateList";
import { ShipmentParcelTemplateCreate } from "./shipmentParcelTemplate/ShipmentParcelTemplateCreate";
import { ShipmentParcelTemplateEdit } from "./shipmentParcelTemplate/ShipmentParcelTemplateEdit";
import { ShipmentParcelTemplateShow } from "./shipmentParcelTemplate/ShipmentParcelTemplateShow";
import { ShippingRuleList } from "./shippingRule/ShippingRuleList";
import { ShippingRuleCreate } from "./shippingRule/ShippingRuleCreate";
import { ShippingRuleEdit } from "./shippingRule/ShippingRuleEdit";
import { ShippingRuleShow } from "./shippingRule/ShippingRuleShow";
import { ShippingRuleConditionList } from "./shippingRuleCondition/ShippingRuleConditionList";
import { ShippingRuleConditionCreate } from "./shippingRuleCondition/ShippingRuleConditionCreate";
import { ShippingRuleConditionEdit } from "./shippingRuleCondition/ShippingRuleConditionEdit";
import { ShippingRuleConditionShow } from "./shippingRuleCondition/ShippingRuleConditionShow";
import { ShippingRuleCountryList } from "./shippingRuleCountry/ShippingRuleCountryList";
import { ShippingRuleCountryCreate } from "./shippingRuleCountry/ShippingRuleCountryCreate";
import { ShippingRuleCountryEdit } from "./shippingRuleCountry/ShippingRuleCountryEdit";
import { ShippingRuleCountryShow } from "./shippingRuleCountry/ShippingRuleCountryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Shipment"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Shipment"
          list={ShipmentList}
          edit={ShipmentEdit}
          create={ShipmentCreate}
          show={ShipmentShow}
        />
        <Resource
          name="ShipmentDeliveryNote"
          list={ShipmentDeliveryNoteList}
          edit={ShipmentDeliveryNoteEdit}
          create={ShipmentDeliveryNoteCreate}
          show={ShipmentDeliveryNoteShow}
        />
        <Resource
          name="ShipmentParcel"
          list={ShipmentParcelList}
          edit={ShipmentParcelEdit}
          create={ShipmentParcelCreate}
          show={ShipmentParcelShow}
        />
        <Resource
          name="ShipmentParcelTemplate"
          list={ShipmentParcelTemplateList}
          edit={ShipmentParcelTemplateEdit}
          create={ShipmentParcelTemplateCreate}
          show={ShipmentParcelTemplateShow}
        />
        <Resource
          name="ShippingRule"
          list={ShippingRuleList}
          edit={ShippingRuleEdit}
          create={ShippingRuleCreate}
          show={ShippingRuleShow}
        />
        <Resource
          name="ShippingRuleCondition"
          list={ShippingRuleConditionList}
          edit={ShippingRuleConditionEdit}
          create={ShippingRuleConditionCreate}
          show={ShippingRuleConditionShow}
        />
        <Resource
          name="ShippingRuleCountry"
          list={ShippingRuleCountryList}
          edit={ShippingRuleCountryEdit}
          create={ShippingRuleCountryCreate}
          show={ShippingRuleCountryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
