import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClreDedComnList } from "./clreDedComn/ClreDedComnList";
import { ClreDedComnCreate } from "./clreDedComn/ClreDedComnCreate";
import { ClreDedComnEdit } from "./clreDedComn/ClreDedComnEdit";
import { ClreDedComnShow } from "./clreDedComn/ClreDedComnShow";
import { ClreDedPdlsList } from "./clreDedPdls/ClreDedPdlsList";
import { ClreDedPdlsCreate } from "./clreDedPdls/ClreDedPdlsCreate";
import { ClreDedPdlsEdit } from "./clreDedPdls/ClreDedPdlsEdit";
import { ClreDedPdlsShow } from "./clreDedPdls/ClreDedPdlsShow";
import { ClreDedMdlStszList } from "./clreDedMdlStsz/ClreDedMdlStszList";
import { ClreDedMdlStszCreate } from "./clreDedMdlStsz/ClreDedMdlStszCreate";
import { ClreDedMdlStszEdit } from "./clreDedMdlStsz/ClreDedMdlStszEdit";
import { ClreDedMdlStszShow } from "./clreDedMdlStsz/ClreDedMdlStszShow";
import { ClreDedVlutComnList } from "./clreDedVlutComn/ClreDedVlutComnList";
import { ClreDedVlutComnCreate } from "./clreDedVlutComn/ClreDedVlutComnCreate";
import { ClreDedVlutComnEdit } from "./clreDedVlutComn/ClreDedVlutComnEdit";
import { ClreDedVlutComnShow } from "./clreDedVlutComn/ClreDedVlutComnShow";
import { ClreDedVlutPdlList } from "./clreDedVlutPdl/ClreDedVlutPdlList";
import { ClreDedVlutPdlCreate } from "./clreDedVlutPdl/ClreDedVlutPdlCreate";
import { ClreDedVlutPdlEdit } from "./clreDedVlutPdl/ClreDedVlutPdlEdit";
import { ClreDedVlutPdlShow } from "./clreDedVlutPdl/ClreDedVlutPdlShow";
import { ClreDedCntrList } from "./clreDedCntr/ClreDedCntrList";
import { ClreDedCntrCreate } from "./clreDedCntr/ClreDedCntrCreate";
import { ClreDedCntrEdit } from "./clreDedCntr/ClreDedCntrEdit";
import { ClreDedCntrShow } from "./clreDedCntr/ClreDedCntrShow";
import { ClreDedCoList } from "./clreDedCo/ClreDedCoList";
import { ClreDedCoCreate } from "./clreDedCo/ClreDedCoCreate";
import { ClreDedCoEdit } from "./clreDedCo/ClreDedCoEdit";
import { ClreDedCoShow } from "./clreDedCo/ClreDedCoShow";
import { ClreDedMgList } from "./clreDedMg/ClreDedMgList";
import { ClreDedMgCreate } from "./clreDedMg/ClreDedMgCreate";
import { ClreDedMgEdit } from "./clreDedMg/ClreDedMgEdit";
import { ClreDedMgShow } from "./clreDedMg/ClreDedMgShow";
import { ClreDedPrcDclrList } from "./clreDedPrcDclr/ClreDedPrcDclrList";
import { ClreDedPrcDclrCreate } from "./clreDedPrcDclr/ClreDedPrcDclrCreate";
import { ClreDedPrcDclrEdit } from "./clreDedPrcDclr/ClreDedPrcDclrEdit";
import { ClreDedPrcDclrShow } from "./clreDedPrcDclr/ClreDedPrcDclrShow";
import { ClreDedPrcDclrPdlList } from "./clreDedPrcDclrPdl/ClreDedPrcDclrPdlList";
import { ClreDedPrcDclrPdlCreate } from "./clreDedPrcDclrPdl/ClreDedPrcDclrPdlCreate";
import { ClreDedPrcDclrPdlEdit } from "./clreDedPrcDclrPdl/ClreDedPrcDclrPdlEdit";
import { ClreDedPrcDclrPdlShow } from "./clreDedPrcDclrPdl/ClreDedPrcDclrPdlShow";
import { ClreDedRwmList } from "./clreDedRwm/ClreDedRwmList";
import { ClreDedRwmCreate } from "./clreDedRwm/ClreDedRwmCreate";
import { ClreDedRwmEdit } from "./clreDedRwm/ClreDedRwmEdit";
import { ClreDedRwmShow } from "./clreDedRwm/ClreDedRwmShow";
import { ClreDedTaxList } from "./clreDedTax/ClreDedTaxList";
import { ClreDedTaxCreate } from "./clreDedTax/ClreDedTaxCreate";
import { ClreDedTaxEdit } from "./clreDedTax/ClreDedTaxEdit";
import { ClreDedTaxShow } from "./clreDedTax/ClreDedTaxShow";
import { ClreDedVhclList } from "./clreDedVhcl/ClreDedVhclList";
import { ClreDedVhclCreate } from "./clreDedVhcl/ClreDedVhclCreate";
import { ClreDedVhclEdit } from "./clreDedVhcl/ClreDedVhclEdit";
import { ClreDedVhclShow } from "./clreDedVhcl/ClreDedVhclShow";
import { ClreDedRimexPrngPdlList } from "./clreDedRimexPrngPdl/ClreDedRimexPrngPdlList";
import { ClreDedRimexPrngPdlCreate } from "./clreDedRimexPrngPdl/ClreDedRimexPrngPdlCreate";
import { ClreDedRimexPrngPdlEdit } from "./clreDedRimexPrngPdl/ClreDedRimexPrngPdlEdit";
import { ClreDedRimexPrngPdlShow } from "./clreDedRimexPrngPdl/ClreDedRimexPrngPdlShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Custom"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ClreDedComn"
          list={ClreDedComnList}
          edit={ClreDedComnEdit}
          create={ClreDedComnCreate}
          show={ClreDedComnShow}
        />
        <Resource
          name="ClreDedPdls"
          list={ClreDedPdlsList}
          edit={ClreDedPdlsEdit}
          create={ClreDedPdlsCreate}
          show={ClreDedPdlsShow}
        />
        <Resource
          name="ClreDedMdlStsz"
          list={ClreDedMdlStszList}
          edit={ClreDedMdlStszEdit}
          create={ClreDedMdlStszCreate}
          show={ClreDedMdlStszShow}
        />
        <Resource
          name="ClreDedVlutComn"
          list={ClreDedVlutComnList}
          edit={ClreDedVlutComnEdit}
          create={ClreDedVlutComnCreate}
          show={ClreDedVlutComnShow}
        />
        <Resource
          name="ClreDedVlutPdl"
          list={ClreDedVlutPdlList}
          edit={ClreDedVlutPdlEdit}
          create={ClreDedVlutPdlCreate}
          show={ClreDedVlutPdlShow}
        />
        <Resource
          name="ClreDedCntr"
          list={ClreDedCntrList}
          edit={ClreDedCntrEdit}
          create={ClreDedCntrCreate}
          show={ClreDedCntrShow}
        />
        <Resource
          name="ClreDedCo"
          list={ClreDedCoList}
          edit={ClreDedCoEdit}
          create={ClreDedCoCreate}
          show={ClreDedCoShow}
        />
        <Resource
          name="ClreDedMg"
          list={ClreDedMgList}
          edit={ClreDedMgEdit}
          create={ClreDedMgCreate}
          show={ClreDedMgShow}
        />
        <Resource
          name="ClreDedPrcDclr"
          list={ClreDedPrcDclrList}
          edit={ClreDedPrcDclrEdit}
          create={ClreDedPrcDclrCreate}
          show={ClreDedPrcDclrShow}
        />
        <Resource
          name="ClreDedPrcDclrPdl"
          list={ClreDedPrcDclrPdlList}
          edit={ClreDedPrcDclrPdlEdit}
          create={ClreDedPrcDclrPdlCreate}
          show={ClreDedPrcDclrPdlShow}
        />
        <Resource
          name="ClreDedRwm"
          list={ClreDedRwmList}
          edit={ClreDedRwmEdit}
          create={ClreDedRwmCreate}
          show={ClreDedRwmShow}
        />
        <Resource
          name="ClreDedTax"
          list={ClreDedTaxList}
          edit={ClreDedTaxEdit}
          create={ClreDedTaxCreate}
          show={ClreDedTaxShow}
        />
        <Resource
          name="ClreDedVhcl"
          list={ClreDedVhclList}
          edit={ClreDedVhclEdit}
          create={ClreDedVhclCreate}
          show={ClreDedVhclShow}
        />
        <Resource
          name="ClreDedRimexPrngPdl"
          list={ClreDedRimexPrngPdlList}
          edit={ClreDedRimexPrngPdlEdit}
          create={ClreDedRimexPrngPdlCreate}
          show={ClreDedRimexPrngPdlShow}
        />
      </Admin>
    </div>
  );
};

export default App;
