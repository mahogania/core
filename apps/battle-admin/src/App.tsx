import React, { useEffect, useState, useRef } from "react";
import { Admin, AuthProvider, DataProvider, Resource } from "react-admin";
import Keycloak from "keycloak-js";
import {
  keycloakClient,
  keycloakAuthProvider,
} from "./auth-provider/ra-auth-keycloak";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BattlePetBreedsList } from "./battlePetBreeds/BattlePetBreedsList";
import { BattlePetBreedsCreate } from "./battlePetBreeds/BattlePetBreedsCreate";
import { BattlePetBreedsEdit } from "./battlePetBreeds/BattlePetBreedsEdit";
import { BattlePetBreedsShow } from "./battlePetBreeds/BattlePetBreedsShow";
import { BattlePetQualityList } from "./battlePetQuality/BattlePetQualityList";
import { BattlePetQualityCreate } from "./battlePetQuality/BattlePetQualityCreate";
import { BattlePetQualityEdit } from "./battlePetQuality/BattlePetQualityEdit";
import { BattlePetQualityShow } from "./battlePetQuality/BattlePetQualityShow";
import { BattlegroundTemplateList } from "./battlegroundTemplate/BattlegroundTemplateList";
import { BattlegroundTemplateCreate } from "./battlegroundTemplate/BattlegroundTemplateCreate";
import { BattlegroundTemplateEdit } from "./battlegroundTemplate/BattlegroundTemplateEdit";
import { BattlegroundTemplateShow } from "./battlegroundTemplate/BattlegroundTemplateShow";
import { BattlefieldTemplateList } from "./battlefieldTemplate/BattlefieldTemplateList";
import { BattlefieldTemplateCreate } from "./battlefieldTemplate/BattlefieldTemplateCreate";
import { BattlefieldTemplateEdit } from "./battlefieldTemplate/BattlefieldTemplateEdit";
import { BattlefieldTemplateShow } from "./battlefieldTemplate/BattlefieldTemplateShow";
import { BattlemasterEntryList } from "./battlemasterEntry/BattlemasterEntryList";
import { BattlemasterEntryCreate } from "./battlemasterEntry/BattlemasterEntryCreate";
import { BattlemasterEntryEdit } from "./battlemasterEntry/BattlemasterEntryEdit";
import { BattlemasterEntryShow } from "./battlemasterEntry/BattlemasterEntryShow";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [keycloak, setKeycloak] = useState<Keycloak | null>();
  const authProvider = useRef<AuthProvider | null>();

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initKeyCloakClient = async () => {
      await keycloakClient.init({
        onLoad: "login-required",
      });
      authProvider.current = keycloakAuthProvider(keycloakClient, {});
      setKeycloak(keycloakClient);
    };
    if (!keycloak) {
      initKeyCloakClient();
    }
  }, [keycloak]);

  if (!dataProvider || !authProvider.current) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <Admin
        title={"Battle"}
        dataProvider={dataProvider}
        authProvider={authProvider.current}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BattlePetBreeds"
          list={BattlePetBreedsList}
          edit={BattlePetBreedsEdit}
          create={BattlePetBreedsCreate}
          show={BattlePetBreedsShow}
        />
        <Resource
          name="BattlePetQuality"
          list={BattlePetQualityList}
          edit={BattlePetQualityEdit}
          create={BattlePetQualityCreate}
          show={BattlePetQualityShow}
        />
        <Resource
          name="BattlegroundTemplate"
          list={BattlegroundTemplateList}
          edit={BattlegroundTemplateEdit}
          create={BattlegroundTemplateCreate}
          show={BattlegroundTemplateShow}
        />
        <Resource
          name="BattlefieldTemplate"
          list={BattlefieldTemplateList}
          edit={BattlefieldTemplateEdit}
          create={BattlefieldTemplateCreate}
          show={BattlefieldTemplateShow}
        />
        <Resource
          name="BattlemasterEntry"
          list={BattlemasterEntryList}
          edit={BattlemasterEntryEdit}
          create={BattlemasterEntryCreate}
          show={BattlemasterEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
