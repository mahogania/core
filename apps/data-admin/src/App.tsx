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
import { DocFieldList } from "./docField/DocFieldList";
import { DocFieldCreate } from "./docField/DocFieldCreate";
import { DocFieldEdit } from "./docField/DocFieldEdit";
import { DocFieldShow } from "./docField/DocFieldShow";
import { DocPermList } from "./docPerm/DocPermList";
import { DocPermCreate } from "./docPerm/DocPermCreate";
import { DocPermEdit } from "./docPerm/DocPermEdit";
import { DocPermShow } from "./docPerm/DocPermShow";
import { DocShareList } from "./docShare/DocShareList";
import { DocShareCreate } from "./docShare/DocShareCreate";
import { DocShareEdit } from "./docShare/DocShareEdit";
import { DocShareShow } from "./docShare/DocShareShow";
import { DocTypeActionList } from "./docTypeAction/DocTypeActionList";
import { DocTypeActionCreate } from "./docTypeAction/DocTypeActionCreate";
import { DocTypeActionEdit } from "./docTypeAction/DocTypeActionEdit";
import { DocTypeActionShow } from "./docTypeAction/DocTypeActionShow";
import { DocTypeLayoutFieldList } from "./docTypeLayoutField/DocTypeLayoutFieldList";
import { DocTypeLayoutFieldCreate } from "./docTypeLayoutField/DocTypeLayoutFieldCreate";
import { DocTypeLayoutFieldEdit } from "./docTypeLayoutField/DocTypeLayoutFieldEdit";
import { DocTypeLayoutFieldShow } from "./docTypeLayoutField/DocTypeLayoutFieldShow";
import { DocTypeLayoutList } from "./docTypeLayout/DocTypeLayoutList";
import { DocTypeLayoutCreate } from "./docTypeLayout/DocTypeLayoutCreate";
import { DocTypeLayoutEdit } from "./docTypeLayout/DocTypeLayoutEdit";
import { DocTypeLayoutShow } from "./docTypeLayout/DocTypeLayoutShow";
import { DocTypeLinkList } from "./docTypeLink/DocTypeLinkList";
import { DocTypeLinkCreate } from "./docTypeLink/DocTypeLinkCreate";
import { DocTypeLinkEdit } from "./docTypeLink/DocTypeLinkEdit";
import { DocTypeLinkShow } from "./docTypeLink/DocTypeLinkShow";
import { DocTypeStateList } from "./docTypeState/DocTypeStateList";
import { DocTypeStateCreate } from "./docTypeState/DocTypeStateCreate";
import { DocTypeStateEdit } from "./docTypeState/DocTypeStateEdit";
import { DocTypeStateShow } from "./docTypeState/DocTypeStateShow";
import { DocTypeList } from "./docType/DocTypeList";
import { DocTypeCreate } from "./docType/DocTypeCreate";
import { DocTypeEdit } from "./docType/DocTypeEdit";
import { DocTypeShow } from "./docType/DocTypeShow";
import { DynamicLinkList } from "./dynamicLink/DynamicLinkList";
import { DynamicLinkCreate } from "./dynamicLink/DynamicLinkCreate";
import { DynamicLinkEdit } from "./dynamicLink/DynamicLinkEdit";
import { DynamicLinkShow } from "./dynamicLink/DynamicLinkShow";
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
        <Resource
          name="DocField"
          list={DocFieldList}
          edit={DocFieldEdit}
          create={DocFieldCreate}
          show={DocFieldShow}
        />
        <Resource
          name="DocPerm"
          list={DocPermList}
          edit={DocPermEdit}
          create={DocPermCreate}
          show={DocPermShow}
        />
        <Resource
          name="DocShare"
          list={DocShareList}
          edit={DocShareEdit}
          create={DocShareCreate}
          show={DocShareShow}
        />
        <Resource
          name="DocTypeAction"
          list={DocTypeActionList}
          edit={DocTypeActionEdit}
          create={DocTypeActionCreate}
          show={DocTypeActionShow}
        />
        <Resource
          name="DocTypeLayoutField"
          list={DocTypeLayoutFieldList}
          edit={DocTypeLayoutFieldEdit}
          create={DocTypeLayoutFieldCreate}
          show={DocTypeLayoutFieldShow}
        />
        <Resource
          name="DocTypeLayout"
          list={DocTypeLayoutList}
          edit={DocTypeLayoutEdit}
          create={DocTypeLayoutCreate}
          show={DocTypeLayoutShow}
        />
        <Resource
          name="DocTypeLink"
          list={DocTypeLinkList}
          edit={DocTypeLinkEdit}
          create={DocTypeLinkCreate}
          show={DocTypeLinkShow}
        />
        <Resource
          name="DocTypeState"
          list={DocTypeStateList}
          edit={DocTypeStateEdit}
          create={DocTypeStateCreate}
          show={DocTypeStateShow}
        />
        <Resource
          name="DocType"
          list={DocTypeList}
          edit={DocTypeEdit}
          create={DocTypeCreate}
          show={DocTypeShow}
        />
        <Resource
          name="DynamicLink"
          list={DynamicLinkList}
          edit={DynamicLinkEdit}
          create={DynamicLinkCreate}
          show={DynamicLinkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
