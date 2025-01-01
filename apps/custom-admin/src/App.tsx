import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClearanceDeclarationList } from "./clearanceDeclaration/ClearanceDeclarationList";
import { ClearanceDeclarationCreate } from "./clearanceDeclaration/ClearanceDeclarationCreate";
import { ClearanceDeclarationEdit } from "./clearanceDeclaration/ClearanceDeclarationEdit";
import { ClearanceDeclarationShow } from "./clearanceDeclaration/ClearanceDeclarationShow";
import { TbClreDedPdlsList } from "./tbClreDedPdls/TbClreDedPdlsList";
import { TbClreDedPdlsCreate } from "./tbClreDedPdls/TbClreDedPdlsCreate";
import { TbClreDedPdlsEdit } from "./tbClreDedPdls/TbClreDedPdlsEdit";
import { TbClreDedPdlsShow } from "./tbClreDedPdls/TbClreDedPdlsShow";
import { TbClreDedMdlStszList } from "./tbClreDedMdlStsz/TbClreDedMdlStszList";
import { TbClreDedMdlStszCreate } from "./tbClreDedMdlStsz/TbClreDedMdlStszCreate";
import { TbClreDedMdlStszEdit } from "./tbClreDedMdlStsz/TbClreDedMdlStszEdit";
import { TbClreDedMdlStszShow } from "./tbClreDedMdlStsz/TbClreDedMdlStszShow";
import { TbClreDedVlutComnList } from "./tbClreDedVlutComn/TbClreDedVlutComnList";
import { TbClreDedVlutComnCreate } from "./tbClreDedVlutComn/TbClreDedVlutComnCreate";
import { TbClreDedVlutComnEdit } from "./tbClreDedVlutComn/TbClreDedVlutComnEdit";
import { TbClreDedVlutComnShow } from "./tbClreDedVlutComn/TbClreDedVlutComnShow";
import { TbClreDedVlutPdlsList } from "./tbClreDedVlutPdls/TbClreDedVlutPdlsList";
import { TbClreDedVlutPdlsCreate } from "./tbClreDedVlutPdls/TbClreDedVlutPdlsCreate";
import { TbClreDedVlutPdlsEdit } from "./tbClreDedVlutPdls/TbClreDedVlutPdlsEdit";
import { TbClreDedVlutPdlsShow } from "./tbClreDedVlutPdls/TbClreDedVlutPdlsShow";
import { ClearanceDeclarationContainerList } from "./clearanceDeclarationContainer/ClearanceDeclarationContainerList";
import { ClearanceDeclarationContainerCreate } from "./clearanceDeclarationContainer/ClearanceDeclarationContainerCreate";
import { ClearanceDeclarationContainerEdit } from "./clearanceDeclarationContainer/ClearanceDeclarationContainerEdit";
import { ClearanceDeclarationContainerShow } from "./clearanceDeclarationContainer/ClearanceDeclarationContainerShow";
import { TbClreDedCoList } from "./tbClreDedCo/TbClreDedCoList";
import { TbClreDedCoCreate } from "./tbClreDedCo/TbClreDedCoCreate";
import { TbClreDedCoEdit } from "./tbClreDedCo/TbClreDedCoEdit";
import { TbClreDedCoShow } from "./tbClreDedCo/TbClreDedCoShow";
import { TbClreDedMgList } from "./tbClreDedMg/TbClreDedMgList";
import { TbClreDedMgCreate } from "./tbClreDedMg/TbClreDedMgCreate";
import { TbClreDedMgEdit } from "./tbClreDedMg/TbClreDedMgEdit";
import { TbClreDedMgShow } from "./tbClreDedMg/TbClreDedMgShow";
import { TbClreDedPrcDclrList } from "./tbClreDedPrcDclr/TbClreDedPrcDclrList";
import { TbClreDedPrcDclrCreate } from "./tbClreDedPrcDclr/TbClreDedPrcDclrCreate";
import { TbClreDedPrcDclrEdit } from "./tbClreDedPrcDclr/TbClreDedPrcDclrEdit";
import { TbClreDedPrcDclrShow } from "./tbClreDedPrcDclr/TbClreDedPrcDclrShow";
import { TbClreDedPrcDclrPdlsList } from "./tbClreDedPrcDclrPdls/TbClreDedPrcDclrPdlsList";
import { TbClreDedPrcDclrPdlsCreate } from "./tbClreDedPrcDclrPdls/TbClreDedPrcDclrPdlsCreate";
import { TbClreDedPrcDclrPdlsEdit } from "./tbClreDedPrcDclrPdls/TbClreDedPrcDclrPdlsEdit";
import { TbClreDedPrcDclrPdlsShow } from "./tbClreDedPrcDclrPdls/TbClreDedPrcDclrPdlsShow";
import { TbClreDedRwmsList } from "./tbClreDedRwms/TbClreDedRwmsList";
import { TbClreDedRwmsCreate } from "./tbClreDedRwms/TbClreDedRwmsCreate";
import { TbClreDedRwmsEdit } from "./tbClreDedRwms/TbClreDedRwmsEdit";
import { TbClreDedRwmsShow } from "./tbClreDedRwms/TbClreDedRwmsShow";
import { TbClreDedTaxList } from "./tbClreDedTax/TbClreDedTaxList";
import { TbClreDedTaxCreate } from "./tbClreDedTax/TbClreDedTaxCreate";
import { TbClreDedTaxEdit } from "./tbClreDedTax/TbClreDedTaxEdit";
import { TbClreDedTaxShow } from "./tbClreDedTax/TbClreDedTaxShow";
import { TbClreDedVhclList } from "./tbClreDedVhcl/TbClreDedVhclList";
import { TbClreDedVhclCreate } from "./tbClreDedVhcl/TbClreDedVhclCreate";
import { TbClreDedVhclEdit } from "./tbClreDedVhcl/TbClreDedVhclEdit";
import { TbClreDedVhclShow } from "./tbClreDedVhcl/TbClreDedVhclShow";
import { TbClreDedRimexPrngPdlsList } from "./tbClreDedRimexPrngPdls/TbClreDedRimexPrngPdlsList";
import { TbClreDedRimexPrngPdlsCreate } from "./tbClreDedRimexPrngPdls/TbClreDedRimexPrngPdlsCreate";
import { TbClreDedRimexPrngPdlsEdit } from "./tbClreDedRimexPrngPdls/TbClreDedRimexPrngPdlsEdit";
import { TbClreDedRimexPrngPdlsShow } from "./tbClreDedRimexPrngPdls/TbClreDedRimexPrngPdlsShow";
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
          name="ClearanceDeclaration"
          list={ClearanceDeclarationList}
          edit={ClearanceDeclarationEdit}
          create={ClearanceDeclarationCreate}
          show={ClearanceDeclarationShow}
        />
        <Resource
          name="TbClreDedPdls"
          list={TbClreDedPdlsList}
          edit={TbClreDedPdlsEdit}
          create={TbClreDedPdlsCreate}
          show={TbClreDedPdlsShow}
        />
        <Resource
          name="TbClreDedMdlStsz"
          list={TbClreDedMdlStszList}
          edit={TbClreDedMdlStszEdit}
          create={TbClreDedMdlStszCreate}
          show={TbClreDedMdlStszShow}
        />
        <Resource
          name="TbClreDedVlutComn"
          list={TbClreDedVlutComnList}
          edit={TbClreDedVlutComnEdit}
          create={TbClreDedVlutComnCreate}
          show={TbClreDedVlutComnShow}
        />
        <Resource
          name="TbClreDedVlutPdls"
          list={TbClreDedVlutPdlsList}
          edit={TbClreDedVlutPdlsEdit}
          create={TbClreDedVlutPdlsCreate}
          show={TbClreDedVlutPdlsShow}
        />
        <Resource
          name="ClearanceDeclarationContainer"
          list={ClearanceDeclarationContainerList}
          edit={ClearanceDeclarationContainerEdit}
          create={ClearanceDeclarationContainerCreate}
          show={ClearanceDeclarationContainerShow}
        />
        <Resource
          name="TbClreDedCo"
          list={TbClreDedCoList}
          edit={TbClreDedCoEdit}
          create={TbClreDedCoCreate}
          show={TbClreDedCoShow}
        />
        <Resource
          name="TbClreDedMg"
          list={TbClreDedMgList}
          edit={TbClreDedMgEdit}
          create={TbClreDedMgCreate}
          show={TbClreDedMgShow}
        />
        <Resource
          name="TbClreDedPrcDclr"
          list={TbClreDedPrcDclrList}
          edit={TbClreDedPrcDclrEdit}
          create={TbClreDedPrcDclrCreate}
          show={TbClreDedPrcDclrShow}
        />
        <Resource
          name="TbClreDedPrcDclrPdls"
          list={TbClreDedPrcDclrPdlsList}
          edit={TbClreDedPrcDclrPdlsEdit}
          create={TbClreDedPrcDclrPdlsCreate}
          show={TbClreDedPrcDclrPdlsShow}
        />
        <Resource
          name="TbClreDedRwms"
          list={TbClreDedRwmsList}
          edit={TbClreDedRwmsEdit}
          create={TbClreDedRwmsCreate}
          show={TbClreDedRwmsShow}
        />
        <Resource
          name="TbClreDedTax"
          list={TbClreDedTaxList}
          edit={TbClreDedTaxEdit}
          create={TbClreDedTaxCreate}
          show={TbClreDedTaxShow}
        />
        <Resource
          name="TbClreDedVhcl"
          list={TbClreDedVhclList}
          edit={TbClreDedVhclEdit}
          create={TbClreDedVhclCreate}
          show={TbClreDedVhclShow}
        />
        <Resource
          name="TbClreDedRimexPrngPdls"
          list={TbClreDedRimexPrngPdlsList}
          edit={TbClreDedRimexPrngPdlsEdit}
          create={TbClreDedRimexPrngPdlsCreate}
          show={TbClreDedRimexPrngPdlsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
