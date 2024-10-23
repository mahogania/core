import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EntityList } from "./entity/EntityList";
import { EntityCreate } from "./entity/EntityCreate";
import { EntityEdit } from "./entity/EntityEdit";
import { EntityShow } from "./entity/EntityShow";
import { AssociationList } from "./association/AssociationList";
import { AssociationCreate } from "./association/AssociationCreate";
import { AssociationEdit } from "./association/AssociationEdit";
import { AssociationShow } from "./association/AssociationShow";
import { TraitList } from "./trait/TraitList";
import { TraitCreate } from "./trait/TraitCreate";
import { TraitEdit } from "./trait/TraitEdit";
import { TraitShow } from "./trait/TraitShow";
import { ProcessorList } from "./processor/ProcessorList";
import { ProcessorCreate } from "./processor/ProcessorCreate";
import { ProcessorEdit } from "./processor/ProcessorEdit";
import { ProcessorShow } from "./processor/ProcessorShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { CommandList } from "./command/CommandList";
import { CommandCreate } from "./command/CommandCreate";
import { CommandEdit } from "./command/CommandEdit";
import { CommandShow } from "./command/CommandShow";
import { FragmentList } from "./fragment/FragmentList";
import { FragmentCreate } from "./fragment/FragmentCreate";
import { FragmentEdit } from "./fragment/FragmentEdit";
import { FragmentShow } from "./fragment/FragmentShow";
import { ViewList } from "./view/ViewList";
import { ViewCreate } from "./view/ViewCreate";
import { ViewEdit } from "./view/ViewEdit";
import { ViewShow } from "./view/ViewShow";
import { RealmList } from "./realm/RealmList";
import { RealmCreate } from "./realm/RealmCreate";
import { RealmEdit } from "./realm/RealmEdit";
import { RealmShow } from "./realm/RealmShow";
import { WorldList } from "./world/WorldList";
import { WorldCreate } from "./world/WorldCreate";
import { WorldEdit } from "./world/WorldEdit";
import { WorldShow } from "./world/WorldShow";
import { AttributeList } from "./attribute/AttributeList";
import { AttributeCreate } from "./attribute/AttributeCreate";
import { AttributeEdit } from "./attribute/AttributeEdit";
import { AttributeShow } from "./attribute/AttributeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Entity"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Entity"
          list={EntityList}
          edit={EntityEdit}
          create={EntityCreate}
          show={EntityShow}
        />
        <Resource
          name="Association"
          list={AssociationList}
          edit={AssociationEdit}
          create={AssociationCreate}
          show={AssociationShow}
        />
        <Resource
          name="Trait"
          list={TraitList}
          edit={TraitEdit}
          create={TraitCreate}
          show={TraitShow}
        />
        <Resource
          name="Processor"
          list={ProcessorList}
          edit={ProcessorEdit}
          create={ProcessorCreate}
          show={ProcessorShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="Command"
          list={CommandList}
          edit={CommandEdit}
          create={CommandCreate}
          show={CommandShow}
        />
        <Resource
          name="Fragment"
          list={FragmentList}
          edit={FragmentEdit}
          create={FragmentCreate}
          show={FragmentShow}
        />
        <Resource
          name="View"
          list={ViewList}
          edit={ViewEdit}
          create={ViewCreate}
          show={ViewShow}
        />
        <Resource
          name="Realm"
          list={RealmList}
          edit={RealmEdit}
          create={RealmCreate}
          show={RealmShow}
        />
        <Resource
          name="World"
          list={WorldList}
          edit={WorldEdit}
          create={WorldCreate}
          show={WorldShow}
        />
        <Resource
          name="Attribute"
          list={AttributeList}
          edit={AttributeEdit}
          create={AttributeCreate}
          show={AttributeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
