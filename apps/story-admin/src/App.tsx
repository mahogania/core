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
import { AreaQuestTriggerList } from "./areaQuestTrigger/AreaQuestTriggerList";
import { AreaQuestTriggerCreate } from "./areaQuestTrigger/AreaQuestTriggerCreate";
import { AreaQuestTriggerEdit } from "./areaQuestTrigger/AreaQuestTriggerEdit";
import { AreaQuestTriggerShow } from "./areaQuestTrigger/AreaQuestTriggerShow";
import { AreaScenarioTriggerList } from "./areaScenarioTrigger/AreaScenarioTriggerList";
import { AreaScenarioTriggerCreate } from "./areaScenarioTrigger/AreaScenarioTriggerCreate";
import { AreaScenarioTriggerEdit } from "./areaScenarioTrigger/AreaScenarioTriggerEdit";
import { AreaScenarioTriggerShow } from "./areaScenarioTrigger/AreaScenarioTriggerShow";
import { AreaTeleportTriggerList } from "./areaTeleportTrigger/AreaTeleportTriggerList";
import { AreaTeleportTriggerCreate } from "./areaTeleportTrigger/AreaTeleportTriggerCreate";
import { AreaTeleportTriggerEdit } from "./areaTeleportTrigger/AreaTeleportTriggerEdit";
import { AreaTeleportTriggerShow } from "./areaTeleportTrigger/AreaTeleportTriggerShow";
import { PointsOfInterestLocaleList } from "./pointsOfInterestLocale/PointsOfInterestLocaleList";
import { PointsOfInterestLocaleCreate } from "./pointsOfInterestLocale/PointsOfInterestLocaleCreate";
import { PointsOfInterestLocaleEdit } from "./pointsOfInterestLocale/PointsOfInterestLocaleEdit";
import { PointsOfInterestLocaleShow } from "./pointsOfInterestLocale/PointsOfInterestLocaleShow";
import { PointOfInterestList } from "./pointOfInterest/PointOfInterestList";
import { PointOfInterestCreate } from "./pointOfInterest/PointOfInterestCreate";
import { PointOfInterestEdit } from "./pointOfInterest/PointOfInterestEdit";
import { PointOfInterestShow } from "./pointOfInterest/PointOfInterestShow";
import { QuestRegionList } from "./questRegion/QuestRegionList";
import { QuestRegionCreate } from "./questRegion/QuestRegionCreate";
import { QuestRegionEdit } from "./questRegion/QuestRegionEdit";
import { QuestRegionShow } from "./questRegion/QuestRegionShow";
import { QuestRewardItemList } from "./questRewardItem/QuestRewardItemList";
import { QuestRewardItemCreate } from "./questRewardItem/QuestRewardItemCreate";
import { QuestRewardItemEdit } from "./questRewardItem/QuestRewardItemEdit";
import { QuestRewardItemShow } from "./questRewardItem/QuestRewardItemShow";
import { PoolMemberList } from "./poolMember/PoolMemberList";
import { PoolMemberCreate } from "./poolMember/PoolMemberCreate";
import { PoolMemberEdit } from "./poolMember/PoolMemberEdit";
import { PoolMemberShow } from "./poolMember/PoolMemberShow";
import { PoolList } from "./pool/PoolList";
import { PoolCreate } from "./pool/PoolCreate";
import { PoolEdit } from "./pool/PoolEdit";
import { PoolShow } from "./pool/PoolShow";
import { QuestPoiList } from "./questPoi/QuestPoiList";
import { QuestPoiCreate } from "./questPoi/QuestPoiCreate";
import { QuestPoiEdit } from "./questPoi/QuestPoiEdit";
import { QuestPoiShow } from "./questPoi/QuestPoiShow";
import { QuestPoolList } from "./questPool/QuestPoolList";
import { QuestPoolCreate } from "./questPool/QuestPoolCreate";
import { QuestPoolEdit } from "./questPool/QuestPoolEdit";
import { QuestPoolShow } from "./questPool/QuestPoolShow";
import { QuestTemplateList } from "./questTemplate/QuestTemplateList";
import { QuestTemplateCreate } from "./questTemplate/QuestTemplateCreate";
import { QuestTemplateEdit } from "./questTemplate/QuestTemplateEdit";
import { QuestTemplateShow } from "./questTemplate/QuestTemplateShow";
import { QuestRequestItemList } from "./questRequestItem/QuestRequestItemList";
import { QuestRequestItemCreate } from "./questRequestItem/QuestRequestItemCreate";
import { QuestRequestItemEdit } from "./questRequestItem/QuestRequestItemEdit";
import { QuestRequestItemShow } from "./questRequestItem/QuestRequestItemShow";
import { QuestRewardSpellList } from "./questRewardSpell/QuestRewardSpellList";
import { QuestRewardSpellCreate } from "./questRewardSpell/QuestRewardSpellCreate";
import { QuestRewardSpellEdit } from "./questRewardSpell/QuestRewardSpellEdit";
import { QuestRewardSpellShow } from "./questRewardSpell/QuestRewardSpellShow";
import { QuestDescriptionConditionalList } from "./questDescriptionConditional/QuestDescriptionConditionalList";
import { QuestDescriptionConditionalCreate } from "./questDescriptionConditional/QuestDescriptionConditionalCreate";
import { QuestDescriptionConditionalEdit } from "./questDescriptionConditional/QuestDescriptionConditionalEdit";
import { QuestDescriptionConditionalShow } from "./questDescriptionConditional/QuestDescriptionConditionalShow";
import { QuestGreetingLocaleList } from "./questGreetingLocale/QuestGreetingLocaleList";
import { QuestGreetingLocaleCreate } from "./questGreetingLocale/QuestGreetingLocaleCreate";
import { QuestGreetingLocaleEdit } from "./questGreetingLocale/QuestGreetingLocaleEdit";
import { QuestGreetingLocaleShow } from "./questGreetingLocale/QuestGreetingLocaleShow";
import { QuestMailList } from "./questMail/QuestMailList";
import { QuestMailCreate } from "./questMail/QuestMailCreate";
import { QuestMailEdit } from "./questMail/QuestMailEdit";
import { QuestMailShow } from "./questMail/QuestMailShow";
import { QuestGreetingList } from "./questGreeting/QuestGreetingList";
import { QuestGreetingCreate } from "./questGreeting/QuestGreetingCreate";
import { QuestGreetingEdit } from "./questGreeting/QuestGreetingEdit";
import { QuestGreetingShow } from "./questGreeting/QuestGreetingShow";
import { QuestCompletionConditionalList } from "./questCompletionConditional/QuestCompletionConditionalList";
import { QuestCompletionConditionalCreate } from "./questCompletionConditional/QuestCompletionConditionalCreate";
import { QuestCompletionConditionalEdit } from "./questCompletionConditional/QuestCompletionConditionalEdit";
import { QuestCompletionConditionalShow } from "./questCompletionConditional/QuestCompletionConditionalShow";
import { QuestRequestItemConditionalList } from "./questRequestItemConditional/QuestRequestItemConditionalList";
import { QuestRequestItemConditionalCreate } from "./questRequestItemConditional/QuestRequestItemConditionalCreate";
import { QuestRequestItemConditionalEdit } from "./questRequestItemConditional/QuestRequestItemConditionalEdit";
import { QuestRequestItemConditionalShow } from "./questRequestItemConditional/QuestRequestItemConditionalShow";
import { QuestTemplateLocaleList } from "./questTemplateLocale/QuestTemplateLocaleList";
import { QuestTemplateLocaleCreate } from "./questTemplateLocale/QuestTemplateLocaleCreate";
import { QuestTemplateLocaleEdit } from "./questTemplateLocale/QuestTemplateLocaleEdit";
import { QuestTemplateLocaleShow } from "./questTemplateLocale/QuestTemplateLocaleShow";
import { QuestDetailList } from "./questDetail/QuestDetailList";
import { QuestDetailCreate } from "./questDetail/QuestDetailCreate";
import { QuestDetailEdit } from "./questDetail/QuestDetailEdit";
import { QuestDetailShow } from "./questDetail/QuestDetailShow";
import { QuestPoolMemberList } from "./questPoolMember/QuestPoolMemberList";
import { QuestPoolMemberCreate } from "./questPoolMember/QuestPoolMemberCreate";
import { QuestPoolMemberEdit } from "./questPoolMember/QuestPoolMemberEdit";
import { QuestPoolMemberShow } from "./questPoolMember/QuestPoolMemberShow";
import { QuestCueEffectList } from "./questCueEffect/QuestCueEffectList";
import { QuestCueEffectCreate } from "./questCueEffect/QuestCueEffectCreate";
import { QuestCueEffectEdit } from "./questCueEffect/QuestCueEffectEdit";
import { QuestCueEffectShow } from "./questCueEffect/QuestCueEffectShow";
import { QuestObjectiveList } from "./questObjective/QuestObjectiveList";
import { QuestObjectiveCreate } from "./questObjective/QuestObjectiveCreate";
import { QuestObjectiveEdit } from "./questObjective/QuestObjectiveEdit";
import { QuestObjectiveShow } from "./questObjective/QuestObjectiveShow";
import { QuestObjectiveLocaleList } from "./questObjectiveLocale/QuestObjectiveLocaleList";
import { QuestObjectiveLocaleCreate } from "./questObjectiveLocale/QuestObjectiveLocaleCreate";
import { QuestObjectiveLocaleEdit } from "./questObjectiveLocale/QuestObjectiveLocaleEdit";
import { QuestObjectiveLocaleShow } from "./questObjectiveLocale/QuestObjectiveLocaleShow";
import { QuestRequestItemsLocaleList } from "./questRequestItemsLocale/QuestRequestItemsLocaleList";
import { QuestRequestItemsLocaleCreate } from "./questRequestItemsLocale/QuestRequestItemsLocaleCreate";
import { QuestRequestItemsLocaleEdit } from "./questRequestItemsLocale/QuestRequestItemsLocaleEdit";
import { QuestRequestItemsLocaleShow } from "./questRequestItemsLocale/QuestRequestItemsLocaleShow";
import { QuestOfferRewardConditionalList } from "./questOfferRewardConditional/QuestOfferRewardConditionalList";
import { QuestOfferRewardConditionalCreate } from "./questOfferRewardConditional/QuestOfferRewardConditionalCreate";
import { QuestOfferRewardConditionalEdit } from "./questOfferRewardConditional/QuestOfferRewardConditionalEdit";
import { QuestOfferRewardConditionalShow } from "./questOfferRewardConditional/QuestOfferRewardConditionalShow";
import { QuestObjectiveCompletionEffectList } from "./questObjectiveCompletionEffect/QuestObjectiveCompletionEffectList";
import { QuestObjectiveCompletionEffectCreate } from "./questObjectiveCompletionEffect/QuestObjectiveCompletionEffectCreate";
import { QuestObjectiveCompletionEffectEdit } from "./questObjectiveCompletionEffect/QuestObjectiveCompletionEffectEdit";
import { QuestObjectiveCompletionEffectShow } from "./questObjectiveCompletionEffect/QuestObjectiveCompletionEffectShow";
import { QuestOfferRewardList } from "./questOfferReward/QuestOfferRewardList";
import { QuestOfferRewardCreate } from "./questOfferReward/QuestOfferRewardCreate";
import { QuestOfferRewardEdit } from "./questOfferReward/QuestOfferRewardEdit";
import { QuestOfferRewardShow } from "./questOfferReward/QuestOfferRewardShow";
import { QuestOfferRewardLocaleList } from "./questOfferRewardLocale/QuestOfferRewardLocaleList";
import { QuestOfferRewardLocaleCreate } from "./questOfferRewardLocale/QuestOfferRewardLocaleCreate";
import { QuestOfferRewardLocaleEdit } from "./questOfferRewardLocale/QuestOfferRewardLocaleEdit";
import { QuestOfferRewardLocaleShow } from "./questOfferRewardLocale/QuestOfferRewardLocaleShow";
import { ScenarioPoiList } from "./scenarioPoi/ScenarioPoiList";
import { ScenarioPoiCreate } from "./scenarioPoi/ScenarioPoiCreate";
import { ScenarioPoiEdit } from "./scenarioPoi/ScenarioPoiEdit";
import { ScenarioPoiShow } from "./scenarioPoi/ScenarioPoiShow";
import { ScenarioRegionList } from "./scenarioRegion/ScenarioRegionList";
import { ScenarioRegionCreate } from "./scenarioRegion/ScenarioRegionCreate";
import { ScenarioRegionEdit } from "./scenarioRegion/ScenarioRegionEdit";
import { ScenarioRegionShow } from "./scenarioRegion/ScenarioRegionShow";
import { ScenarioList } from "./scenario/ScenarioList";
import { ScenarioCreate } from "./scenario/ScenarioCreate";
import { ScenarioEdit } from "./scenario/ScenarioEdit";
import { ScenarioShow } from "./scenario/ScenarioShow";
import { SceneTemplateList } from "./sceneTemplate/SceneTemplateList";
import { SceneTemplateCreate } from "./sceneTemplate/SceneTemplateCreate";
import { SceneTemplateEdit } from "./sceneTemplate/SceneTemplateEdit";
import { SceneTemplateShow } from "./sceneTemplate/SceneTemplateShow";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { PortalList } from "./portal/PortalList";
import { PortalCreate } from "./portal/PortalCreate";
import { PortalEdit } from "./portal/PortalEdit";
import { PortalShow } from "./portal/PortalShow";
import { QuestList } from "./quest/QuestList";
import { QuestCreate } from "./quest/QuestCreate";
import { QuestEdit } from "./quest/QuestEdit";
import { QuestShow } from "./quest/QuestShow";
import { ZoneList } from "./zone/ZoneList";
import { ZoneCreate } from "./zone/ZoneCreate";
import { ZoneEdit } from "./zone/ZoneEdit";
import { ZoneShow } from "./zone/ZoneShow";
import { MapList } from "./map/MapList";
import { MapCreate } from "./map/MapCreate";
import { MapEdit } from "./map/MapEdit";
import { MapShow } from "./map/MapShow";
import { EpicList } from "./epic/EpicList";
import { EpicCreate } from "./epic/EpicCreate";
import { EpicEdit } from "./epic/EpicEdit";
import { EpicShow } from "./epic/EpicShow";

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
        title={"Story"}
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
          name="AreaQuestTrigger"
          list={AreaQuestTriggerList}
          edit={AreaQuestTriggerEdit}
          create={AreaQuestTriggerCreate}
          show={AreaQuestTriggerShow}
        />
        <Resource
          name="AreaScenarioTrigger"
          list={AreaScenarioTriggerList}
          edit={AreaScenarioTriggerEdit}
          create={AreaScenarioTriggerCreate}
          show={AreaScenarioTriggerShow}
        />
        <Resource
          name="AreaTeleportTrigger"
          list={AreaTeleportTriggerList}
          edit={AreaTeleportTriggerEdit}
          create={AreaTeleportTriggerCreate}
          show={AreaTeleportTriggerShow}
        />
        <Resource
          name="PointsOfInterestLocale"
          list={PointsOfInterestLocaleList}
          edit={PointsOfInterestLocaleEdit}
          create={PointsOfInterestLocaleCreate}
          show={PointsOfInterestLocaleShow}
        />
        <Resource
          name="PointOfInterest"
          list={PointOfInterestList}
          edit={PointOfInterestEdit}
          create={PointOfInterestCreate}
          show={PointOfInterestShow}
        />
        <Resource
          name="QuestRegion"
          list={QuestRegionList}
          edit={QuestRegionEdit}
          create={QuestRegionCreate}
          show={QuestRegionShow}
        />
        <Resource
          name="QuestRewardItem"
          list={QuestRewardItemList}
          edit={QuestRewardItemEdit}
          create={QuestRewardItemCreate}
          show={QuestRewardItemShow}
        />
        <Resource
          name="PoolMember"
          list={PoolMemberList}
          edit={PoolMemberEdit}
          create={PoolMemberCreate}
          show={PoolMemberShow}
        />
        <Resource
          name="Pool"
          list={PoolList}
          edit={PoolEdit}
          create={PoolCreate}
          show={PoolShow}
        />
        <Resource
          name="QuestPoi"
          list={QuestPoiList}
          edit={QuestPoiEdit}
          create={QuestPoiCreate}
          show={QuestPoiShow}
        />
        <Resource
          name="QuestPool"
          list={QuestPoolList}
          edit={QuestPoolEdit}
          create={QuestPoolCreate}
          show={QuestPoolShow}
        />
        <Resource
          name="QuestTemplate"
          list={QuestTemplateList}
          edit={QuestTemplateEdit}
          create={QuestTemplateCreate}
          show={QuestTemplateShow}
        />
        <Resource
          name="QuestRequestItem"
          list={QuestRequestItemList}
          edit={QuestRequestItemEdit}
          create={QuestRequestItemCreate}
          show={QuestRequestItemShow}
        />
        <Resource
          name="QuestRewardSpell"
          list={QuestRewardSpellList}
          edit={QuestRewardSpellEdit}
          create={QuestRewardSpellCreate}
          show={QuestRewardSpellShow}
        />
        <Resource
          name="QuestDescriptionConditional"
          list={QuestDescriptionConditionalList}
          edit={QuestDescriptionConditionalEdit}
          create={QuestDescriptionConditionalCreate}
          show={QuestDescriptionConditionalShow}
        />
        <Resource
          name="QuestGreetingLocale"
          list={QuestGreetingLocaleList}
          edit={QuestGreetingLocaleEdit}
          create={QuestGreetingLocaleCreate}
          show={QuestGreetingLocaleShow}
        />
        <Resource
          name="QuestMail"
          list={QuestMailList}
          edit={QuestMailEdit}
          create={QuestMailCreate}
          show={QuestMailShow}
        />
        <Resource
          name="QuestGreeting"
          list={QuestGreetingList}
          edit={QuestGreetingEdit}
          create={QuestGreetingCreate}
          show={QuestGreetingShow}
        />
        <Resource
          name="QuestCompletionConditional"
          list={QuestCompletionConditionalList}
          edit={QuestCompletionConditionalEdit}
          create={QuestCompletionConditionalCreate}
          show={QuestCompletionConditionalShow}
        />
        <Resource
          name="QuestRequestItemConditional"
          list={QuestRequestItemConditionalList}
          edit={QuestRequestItemConditionalEdit}
          create={QuestRequestItemConditionalCreate}
          show={QuestRequestItemConditionalShow}
        />
        <Resource
          name="QuestTemplateLocale"
          list={QuestTemplateLocaleList}
          edit={QuestTemplateLocaleEdit}
          create={QuestTemplateLocaleCreate}
          show={QuestTemplateLocaleShow}
        />
        <Resource
          name="QuestDetail"
          list={QuestDetailList}
          edit={QuestDetailEdit}
          create={QuestDetailCreate}
          show={QuestDetailShow}
        />
        <Resource
          name="QuestPoolMember"
          list={QuestPoolMemberList}
          edit={QuestPoolMemberEdit}
          create={QuestPoolMemberCreate}
          show={QuestPoolMemberShow}
        />
        <Resource
          name="QuestCueEffect"
          list={QuestCueEffectList}
          edit={QuestCueEffectEdit}
          create={QuestCueEffectCreate}
          show={QuestCueEffectShow}
        />
        <Resource
          name="QuestObjective"
          list={QuestObjectiveList}
          edit={QuestObjectiveEdit}
          create={QuestObjectiveCreate}
          show={QuestObjectiveShow}
        />
        <Resource
          name="QuestObjectiveLocale"
          list={QuestObjectiveLocaleList}
          edit={QuestObjectiveLocaleEdit}
          create={QuestObjectiveLocaleCreate}
          show={QuestObjectiveLocaleShow}
        />
        <Resource
          name="QuestRequestItemsLocale"
          list={QuestRequestItemsLocaleList}
          edit={QuestRequestItemsLocaleEdit}
          create={QuestRequestItemsLocaleCreate}
          show={QuestRequestItemsLocaleShow}
        />
        <Resource
          name="QuestOfferRewardConditional"
          list={QuestOfferRewardConditionalList}
          edit={QuestOfferRewardConditionalEdit}
          create={QuestOfferRewardConditionalCreate}
          show={QuestOfferRewardConditionalShow}
        />
        <Resource
          name="QuestObjectiveCompletionEffect"
          list={QuestObjectiveCompletionEffectList}
          edit={QuestObjectiveCompletionEffectEdit}
          create={QuestObjectiveCompletionEffectCreate}
          show={QuestObjectiveCompletionEffectShow}
        />
        <Resource
          name="QuestOfferReward"
          list={QuestOfferRewardList}
          edit={QuestOfferRewardEdit}
          create={QuestOfferRewardCreate}
          show={QuestOfferRewardShow}
        />
        <Resource
          name="QuestOfferRewardLocale"
          list={QuestOfferRewardLocaleList}
          edit={QuestOfferRewardLocaleEdit}
          create={QuestOfferRewardLocaleCreate}
          show={QuestOfferRewardLocaleShow}
        />
        <Resource
          name="ScenarioPoi"
          list={ScenarioPoiList}
          edit={ScenarioPoiEdit}
          create={ScenarioPoiCreate}
          show={ScenarioPoiShow}
        />
        <Resource
          name="ScenarioRegion"
          list={ScenarioRegionList}
          edit={ScenarioRegionEdit}
          create={ScenarioRegionCreate}
          show={ScenarioRegionShow}
        />
        <Resource
          name="Scenario"
          list={ScenarioList}
          edit={ScenarioEdit}
          create={ScenarioCreate}
          show={ScenarioShow}
        />
        <Resource
          name="SceneTemplate"
          list={SceneTemplateList}
          edit={SceneTemplateEdit}
          create={SceneTemplateCreate}
          show={SceneTemplateShow}
        />
        <Resource
          name="Area"
          list={AreaList}
          edit={AreaEdit}
          create={AreaCreate}
          show={AreaShow}
        />
        <Resource
          name="Portal"
          list={PortalList}
          edit={PortalEdit}
          create={PortalCreate}
          show={PortalShow}
        />
        <Resource
          name="Quest"
          list={QuestList}
          edit={QuestEdit}
          create={QuestCreate}
          show={QuestShow}
        />
        <Resource
          name="Zone"
          list={ZoneList}
          edit={ZoneEdit}
          create={ZoneCreate}
          show={ZoneShow}
        />
        <Resource
          name="Map"
          list={MapList}
          edit={MapEdit}
          create={MapCreate}
          show={MapShow}
        />
        <Resource
          name="Epic"
          list={EpicList}
          edit={EpicEdit}
          create={EpicCreate}
          show={EpicShow}
        />
      </Admin>
    </div>
  );
};

export default App;
