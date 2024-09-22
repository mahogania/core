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
import { AreaTriggerCreatePropertyList } from "./areaTriggerCreateProperty/AreaTriggerCreatePropertyList";
import { AreaTriggerCreatePropertyCreate } from "./areaTriggerCreateProperty/AreaTriggerCreatePropertyCreate";
import { AreaTriggerCreatePropertyEdit } from "./areaTriggerCreateProperty/AreaTriggerCreatePropertyEdit";
import { AreaTriggerCreatePropertyShow } from "./areaTriggerCreateProperty/AreaTriggerCreatePropertyShow";
import { AreaTriggerCreatePropertiesOrbitList } from "./areaTriggerCreatePropertiesOrbit/AreaTriggerCreatePropertiesOrbitList";
import { AreaTriggerCreatePropertiesOrbitCreate } from "./areaTriggerCreatePropertiesOrbit/AreaTriggerCreatePropertiesOrbitCreate";
import { AreaTriggerCreatePropertiesOrbitEdit } from "./areaTriggerCreatePropertiesOrbit/AreaTriggerCreatePropertiesOrbitEdit";
import { AreaTriggerCreatePropertiesOrbitShow } from "./areaTriggerCreatePropertiesOrbit/AreaTriggerCreatePropertiesOrbitShow";
import { AreaTriggerCreatePropertiesPolygonVertexList } from "./areaTriggerCreatePropertiesPolygonVertex/AreaTriggerCreatePropertiesPolygonVertexList";
import { AreaTriggerCreatePropertiesPolygonVertexCreate } from "./areaTriggerCreatePropertiesPolygonVertex/AreaTriggerCreatePropertiesPolygonVertexCreate";
import { AreaTriggerCreatePropertiesPolygonVertexEdit } from "./areaTriggerCreatePropertiesPolygonVertex/AreaTriggerCreatePropertiesPolygonVertexEdit";
import { AreaTriggerCreatePropertiesPolygonVertexShow } from "./areaTriggerCreatePropertiesPolygonVertex/AreaTriggerCreatePropertiesPolygonVertexShow";
import { AreaTriggerCreatePropertiesSplinePointList } from "./areaTriggerCreatePropertiesSplinePoint/AreaTriggerCreatePropertiesSplinePointList";
import { AreaTriggerCreatePropertiesSplinePointCreate } from "./areaTriggerCreatePropertiesSplinePoint/AreaTriggerCreatePropertiesSplinePointCreate";
import { AreaTriggerCreatePropertiesSplinePointEdit } from "./areaTriggerCreatePropertiesSplinePoint/AreaTriggerCreatePropertiesSplinePointEdit";
import { AreaTriggerCreatePropertiesSplinePointShow } from "./areaTriggerCreatePropertiesSplinePoint/AreaTriggerCreatePropertiesSplinePointShow";
import { AreaTriggerInvolvedRelationList } from "./areaTriggerInvolvedRelation/AreaTriggerInvolvedRelationList";
import { AreaTriggerInvolvedRelationCreate } from "./areaTriggerInvolvedRelation/AreaTriggerInvolvedRelationCreate";
import { AreaTriggerInvolvedRelationEdit } from "./areaTriggerInvolvedRelation/AreaTriggerInvolvedRelationEdit";
import { AreaTriggerInvolvedRelationShow } from "./areaTriggerInvolvedRelation/AreaTriggerInvolvedRelationShow";
import { AreaTriggerScriptList } from "./areaTriggerScript/AreaTriggerScriptList";
import { AreaTriggerScriptCreate } from "./areaTriggerScript/AreaTriggerScriptCreate";
import { AreaTriggerScriptEdit } from "./areaTriggerScript/AreaTriggerScriptEdit";
import { AreaTriggerScriptShow } from "./areaTriggerScript/AreaTriggerScriptShow";
import { AreaTriggerTavernList } from "./areaTriggerTavern/AreaTriggerTavernList";
import { AreaTriggerTavernCreate } from "./areaTriggerTavern/AreaTriggerTavernCreate";
import { AreaTriggerTavernEdit } from "./areaTriggerTavern/AreaTriggerTavernEdit";
import { AreaTriggerTavernShow } from "./areaTriggerTavern/AreaTriggerTavernShow";
import { AreaTriggerTeleportList } from "./areaTriggerTeleport/AreaTriggerTeleportList";
import { AreaTriggerTeleportCreate } from "./areaTriggerTeleport/AreaTriggerTeleportCreate";
import { AreaTriggerTeleportEdit } from "./areaTriggerTeleport/AreaTriggerTeleportEdit";
import { AreaTriggerTeleportShow } from "./areaTriggerTeleport/AreaTriggerTeleportShow";
import { AreaTriggerTemplateList } from "./areaTriggerTemplate/AreaTriggerTemplateList";
import { AreaTriggerTemplateCreate } from "./areaTriggerTemplate/AreaTriggerTemplateCreate";
import { AreaTriggerTemplateEdit } from "./areaTriggerTemplate/AreaTriggerTemplateEdit";
import { AreaTriggerTemplateShow } from "./areaTriggerTemplate/AreaTriggerTemplateShow";
import { AreaTriggerTemplateActionList } from "./areaTriggerTemplateAction/AreaTriggerTemplateActionList";
import { AreaTriggerTemplateActionCreate } from "./areaTriggerTemplateAction/AreaTriggerTemplateActionCreate";
import { AreaTriggerTemplateActionEdit } from "./areaTriggerTemplateAction/AreaTriggerTemplateActionEdit";
import { AreaTriggerTemplateActionShow } from "./areaTriggerTemplateAction/AreaTriggerTemplateActionShow";
import { PointsOfInterestLocaleList } from "./pointsOfInterestLocale/PointsOfInterestLocaleList";
import { PointsOfInterestLocaleCreate } from "./pointsOfInterestLocale/PointsOfInterestLocaleCreate";
import { PointsOfInterestLocaleEdit } from "./pointsOfInterestLocale/PointsOfInterestLocaleEdit";
import { PointsOfInterestLocaleShow } from "./pointsOfInterestLocale/PointsOfInterestLocaleShow";
import { PointsOfInterestList } from "./pointsOfInterest/PointsOfInterestList";
import { PointsOfInterestCreate } from "./pointsOfInterest/PointsOfInterestCreate";
import { PointsOfInterestEdit } from "./pointsOfInterest/PointsOfInterestEdit";
import { PointsOfInterestShow } from "./pointsOfInterest/PointsOfInterestShow";
import { PoolMembersList } from "./poolMembers/PoolMembersList";
import { PoolMembersCreate } from "./poolMembers/PoolMembersCreate";
import { PoolMembersEdit } from "./poolMembers/PoolMembersEdit";
import { PoolMembersShow } from "./poolMembers/PoolMembersShow";
import { PoolTemplateList } from "./poolTemplate/PoolTemplateList";
import { PoolTemplateCreate } from "./poolTemplate/PoolTemplateCreate";
import { PoolTemplateEdit } from "./poolTemplate/PoolTemplateEdit";
import { PoolTemplateShow } from "./poolTemplate/PoolTemplateShow";
import { QuestPoiList } from "./questPoi/QuestPoiList";
import { QuestPoiCreate } from "./questPoi/QuestPoiCreate";
import { QuestPoiEdit } from "./questPoi/QuestPoiEdit";
import { QuestPoiShow } from "./questPoi/QuestPoiShow";
import { QuestRewardChoiceItemsList } from "./questRewardChoiceItems/QuestRewardChoiceItemsList";
import { QuestRewardChoiceItemsCreate } from "./questRewardChoiceItems/QuestRewardChoiceItemsCreate";
import { QuestRewardChoiceItemsEdit } from "./questRewardChoiceItems/QuestRewardChoiceItemsEdit";
import { QuestRewardChoiceItemsShow } from "./questRewardChoiceItems/QuestRewardChoiceItemsShow";
import { ProspectingLootTemplateList } from "./prospectingLootTemplate/ProspectingLootTemplateList";
import { ProspectingLootTemplateCreate } from "./prospectingLootTemplate/ProspectingLootTemplateCreate";
import { ProspectingLootTemplateEdit } from "./prospectingLootTemplate/ProspectingLootTemplateEdit";
import { ProspectingLootTemplateShow } from "./prospectingLootTemplate/ProspectingLootTemplateShow";
import { QuestPoolMembersList } from "./questPoolMembers/QuestPoolMembersList";
import { QuestPoolMembersCreate } from "./questPoolMembers/QuestPoolMembersCreate";
import { QuestPoolMembersEdit } from "./questPoolMembers/QuestPoolMembersEdit";
import { QuestPoolMembersShow } from "./questPoolMembers/QuestPoolMembersShow";
import { QuestDetailsList } from "./questDetails/QuestDetailsList";
import { QuestDetailsCreate } from "./questDetails/QuestDetailsCreate";
import { QuestDetailsEdit } from "./questDetails/QuestDetailsEdit";
import { QuestDetailsShow } from "./questDetails/QuestDetailsShow";
import { QuestTemplateList } from "./questTemplate/QuestTemplateList";
import { QuestTemplateCreate } from "./questTemplate/QuestTemplateCreate";
import { QuestTemplateEdit } from "./questTemplate/QuestTemplateEdit";
import { QuestTemplateShow } from "./questTemplate/QuestTemplateShow";
import { QuestTemplateAddonList } from "./questTemplateAddon/QuestTemplateAddonList";
import { QuestTemplateAddonCreate } from "./questTemplateAddon/QuestTemplateAddonCreate";
import { QuestTemplateAddonEdit } from "./questTemplateAddon/QuestTemplateAddonEdit";
import { QuestTemplateAddonShow } from "./questTemplateAddon/QuestTemplateAddonShow";
import { QuestMailSenderList } from "./questMailSender/QuestMailSenderList";
import { QuestMailSenderCreate } from "./questMailSender/QuestMailSenderCreate";
import { QuestMailSenderEdit } from "./questMailSender/QuestMailSenderEdit";
import { QuestMailSenderShow } from "./questMailSender/QuestMailSenderShow";
import { QuestRequestItemsList } from "./questRequestItems/QuestRequestItemsList";
import { QuestRequestItemsCreate } from "./questRequestItems/QuestRequestItemsCreate";
import { QuestRequestItemsEdit } from "./questRequestItems/QuestRequestItemsEdit";
import { QuestRequestItemsShow } from "./questRequestItems/QuestRequestItemsShow";
import { QuestGreetingLocaleList } from "./questGreetingLocale/QuestGreetingLocaleList";
import { QuestGreetingLocaleCreate } from "./questGreetingLocale/QuestGreetingLocaleCreate";
import { QuestGreetingLocaleEdit } from "./questGreetingLocale/QuestGreetingLocaleEdit";
import { QuestGreetingLocaleShow } from "./questGreetingLocale/QuestGreetingLocaleShow";
import { QuestPoiPointsList } from "./questPoiPoints/QuestPoiPointsList";
import { QuestPoiPointsCreate } from "./questPoiPoints/QuestPoiPointsCreate";
import { QuestPoiPointsEdit } from "./questPoiPoints/QuestPoiPointsEdit";
import { QuestPoiPointsShow } from "./questPoiPoints/QuestPoiPointsShow";
import { QuestRewardDisplaySpellList } from "./questRewardDisplaySpell/QuestRewardDisplaySpellList";
import { QuestRewardDisplaySpellCreate } from "./questRewardDisplaySpell/QuestRewardDisplaySpellCreate";
import { QuestRewardDisplaySpellEdit } from "./questRewardDisplaySpell/QuestRewardDisplaySpellEdit";
import { QuestRewardDisplaySpellShow } from "./questRewardDisplaySpell/QuestRewardDisplaySpellShow";
import { QuestTemplateLocaleList } from "./questTemplateLocale/QuestTemplateLocaleList";
import { QuestTemplateLocaleCreate } from "./questTemplateLocale/QuestTemplateLocaleCreate";
import { QuestTemplateLocaleEdit } from "./questTemplateLocale/QuestTemplateLocaleEdit";
import { QuestTemplateLocaleShow } from "./questTemplateLocale/QuestTemplateLocaleShow";
import { QuestCompletionLogConditionalList } from "./questCompletionLogConditional/QuestCompletionLogConditionalList";
import { QuestCompletionLogConditionalCreate } from "./questCompletionLogConditional/QuestCompletionLogConditionalCreate";
import { QuestCompletionLogConditionalEdit } from "./questCompletionLogConditional/QuestCompletionLogConditionalEdit";
import { QuestCompletionLogConditionalShow } from "./questCompletionLogConditional/QuestCompletionLogConditionalShow";
import { QuestPoolTemplateList } from "./questPoolTemplate/QuestPoolTemplateList";
import { QuestPoolTemplateCreate } from "./questPoolTemplate/QuestPoolTemplateCreate";
import { QuestPoolTemplateEdit } from "./questPoolTemplate/QuestPoolTemplateEdit";
import { QuestPoolTemplateShow } from "./questPoolTemplate/QuestPoolTemplateShow";
import { QuestDescriptionConditionalList } from "./questDescriptionConditional/QuestDescriptionConditionalList";
import { QuestDescriptionConditionalCreate } from "./questDescriptionConditional/QuestDescriptionConditionalCreate";
import { QuestDescriptionConditionalEdit } from "./questDescriptionConditional/QuestDescriptionConditionalEdit";
import { QuestDescriptionConditionalShow } from "./questDescriptionConditional/QuestDescriptionConditionalShow";
import { QuestRequestItemsConditionalList } from "./questRequestItemsConditional/QuestRequestItemsConditionalList";
import { QuestRequestItemsConditionalCreate } from "./questRequestItemsConditional/QuestRequestItemsConditionalCreate";
import { QuestRequestItemsConditionalEdit } from "./questRequestItemsConditional/QuestRequestItemsConditionalEdit";
import { QuestRequestItemsConditionalShow } from "./questRequestItemsConditional/QuestRequestItemsConditionalShow";
import { QuestVisualEffectList } from "./questVisualEffect/QuestVisualEffectList";
import { QuestVisualEffectCreate } from "./questVisualEffect/QuestVisualEffectCreate";
import { QuestVisualEffectEdit } from "./questVisualEffect/QuestVisualEffectEdit";
import { QuestVisualEffectShow } from "./questVisualEffect/QuestVisualEffectShow";
import { QuestGreetingList } from "./questGreeting/QuestGreetingList";
import { QuestGreetingCreate } from "./questGreeting/QuestGreetingCreate";
import { QuestGreetingEdit } from "./questGreeting/QuestGreetingEdit";
import { QuestGreetingShow } from "./questGreeting/QuestGreetingShow";
import { QuestOfferRewardConditionalList } from "./questOfferRewardConditional/QuestOfferRewardConditionalList";
import { QuestOfferRewardConditionalCreate } from "./questOfferRewardConditional/QuestOfferRewardConditionalCreate";
import { QuestOfferRewardConditionalEdit } from "./questOfferRewardConditional/QuestOfferRewardConditionalEdit";
import { QuestOfferRewardConditionalShow } from "./questOfferRewardConditional/QuestOfferRewardConditionalShow";
import { QuestObjectivesLocaleList } from "./questObjectivesLocale/QuestObjectivesLocaleList";
import { QuestObjectivesLocaleCreate } from "./questObjectivesLocale/QuestObjectivesLocaleCreate";
import { QuestObjectivesLocaleEdit } from "./questObjectivesLocale/QuestObjectivesLocaleEdit";
import { QuestObjectivesLocaleShow } from "./questObjectivesLocale/QuestObjectivesLocaleShow";
import { QuestObjectivesList } from "./questObjectives/QuestObjectivesList";
import { QuestObjectivesCreate } from "./questObjectives/QuestObjectivesCreate";
import { QuestObjectivesEdit } from "./questObjectives/QuestObjectivesEdit";
import { QuestObjectivesShow } from "./questObjectives/QuestObjectivesShow";
import { QuestOfferRewardList } from "./questOfferReward/QuestOfferRewardList";
import { QuestOfferRewardCreate } from "./questOfferReward/QuestOfferRewardCreate";
import { QuestOfferRewardEdit } from "./questOfferReward/QuestOfferRewardEdit";
import { QuestOfferRewardShow } from "./questOfferReward/QuestOfferRewardShow";
import { QuestOfferRewardLocaleList } from "./questOfferRewardLocale/QuestOfferRewardLocaleList";
import { QuestOfferRewardLocaleCreate } from "./questOfferRewardLocale/QuestOfferRewardLocaleCreate";
import { QuestOfferRewardLocaleEdit } from "./questOfferRewardLocale/QuestOfferRewardLocaleEdit";
import { QuestOfferRewardLocaleShow } from "./questOfferRewardLocale/QuestOfferRewardLocaleShow";
import { QuestObjectivesCompletionEffectList } from "./questObjectivesCompletionEffect/QuestObjectivesCompletionEffectList";
import { QuestObjectivesCompletionEffectCreate } from "./questObjectivesCompletionEffect/QuestObjectivesCompletionEffectCreate";
import { QuestObjectivesCompletionEffectEdit } from "./questObjectivesCompletionEffect/QuestObjectivesCompletionEffectEdit";
import { QuestObjectivesCompletionEffectShow } from "./questObjectivesCompletionEffect/QuestObjectivesCompletionEffectShow";
import { QuestRequestItemsLocaleList } from "./questRequestItemsLocale/QuestRequestItemsLocaleList";
import { QuestRequestItemsLocaleCreate } from "./questRequestItemsLocale/QuestRequestItemsLocaleCreate";
import { QuestRequestItemsLocaleEdit } from "./questRequestItemsLocale/QuestRequestItemsLocaleEdit";
import { QuestRequestItemsLocaleShow } from "./questRequestItemsLocale/QuestRequestItemsLocaleShow";
import { ScenarioPoiPointsList } from "./scenarioPoiPoints/ScenarioPoiPointsList";
import { ScenarioPoiPointsCreate } from "./scenarioPoiPoints/ScenarioPoiPointsCreate";
import { ScenarioPoiPointsEdit } from "./scenarioPoiPoints/ScenarioPoiPointsEdit";
import { ScenarioPoiPointsShow } from "./scenarioPoiPoints/ScenarioPoiPointsShow";
import { ScenarioPoiList } from "./scenarioPoi/ScenarioPoiList";
import { ScenarioPoiCreate } from "./scenarioPoi/ScenarioPoiCreate";
import { ScenarioPoiEdit } from "./scenarioPoi/ScenarioPoiEdit";
import { ScenarioPoiShow } from "./scenarioPoi/ScenarioPoiShow";
import { ScenariosList } from "./scenarios/ScenariosList";
import { ScenariosCreate } from "./scenarios/ScenariosCreate";
import { ScenariosEdit } from "./scenarios/ScenariosEdit";
import { ScenariosShow } from "./scenarios/ScenariosShow";
import { SceneTemplateList } from "./sceneTemplate/SceneTemplateList";
import { SceneTemplateCreate } from "./sceneTemplate/SceneTemplateCreate";
import { SceneTemplateEdit } from "./sceneTemplate/SceneTemplateEdit";
import { SceneTemplateShow } from "./sceneTemplate/SceneTemplateShow";
import { ScriptSplineChainWaypointsList } from "./scriptSplineChainWaypoints/ScriptSplineChainWaypointsList";
import { ScriptSplineChainWaypointsCreate } from "./scriptSplineChainWaypoints/ScriptSplineChainWaypointsCreate";
import { ScriptSplineChainWaypointsEdit } from "./scriptSplineChainWaypoints/ScriptSplineChainWaypointsEdit";
import { ScriptSplineChainWaypointsShow } from "./scriptSplineChainWaypoints/ScriptSplineChainWaypointsShow";
import { ScriptSplineChainMetaList } from "./scriptSplineChainMeta/ScriptSplineChainMetaList";
import { ScriptSplineChainMetaCreate } from "./scriptSplineChainMeta/ScriptSplineChainMetaCreate";
import { ScriptSplineChainMetaEdit } from "./scriptSplineChainMeta/ScriptSplineChainMetaEdit";
import { ScriptSplineChainMetaShow } from "./scriptSplineChainMeta/ScriptSplineChainMetaShow";

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
        title={"Area"}
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
          name="AreaTriggerCreateProperty"
          list={AreaTriggerCreatePropertyList}
          edit={AreaTriggerCreatePropertyEdit}
          create={AreaTriggerCreatePropertyCreate}
          show={AreaTriggerCreatePropertyShow}
        />
        <Resource
          name="AreaTriggerCreatePropertiesOrbit"
          list={AreaTriggerCreatePropertiesOrbitList}
          edit={AreaTriggerCreatePropertiesOrbitEdit}
          create={AreaTriggerCreatePropertiesOrbitCreate}
          show={AreaTriggerCreatePropertiesOrbitShow}
        />
        <Resource
          name="AreaTriggerCreatePropertiesPolygonVertex"
          list={AreaTriggerCreatePropertiesPolygonVertexList}
          edit={AreaTriggerCreatePropertiesPolygonVertexEdit}
          create={AreaTriggerCreatePropertiesPolygonVertexCreate}
          show={AreaTriggerCreatePropertiesPolygonVertexShow}
        />
        <Resource
          name="AreaTriggerCreatePropertiesSplinePoint"
          list={AreaTriggerCreatePropertiesSplinePointList}
          edit={AreaTriggerCreatePropertiesSplinePointEdit}
          create={AreaTriggerCreatePropertiesSplinePointCreate}
          show={AreaTriggerCreatePropertiesSplinePointShow}
        />
        <Resource
          name="AreaTriggerInvolvedRelation"
          list={AreaTriggerInvolvedRelationList}
          edit={AreaTriggerInvolvedRelationEdit}
          create={AreaTriggerInvolvedRelationCreate}
          show={AreaTriggerInvolvedRelationShow}
        />
        <Resource
          name="AreaTriggerScript"
          list={AreaTriggerScriptList}
          edit={AreaTriggerScriptEdit}
          create={AreaTriggerScriptCreate}
          show={AreaTriggerScriptShow}
        />
        <Resource
          name="AreaTriggerTavern"
          list={AreaTriggerTavernList}
          edit={AreaTriggerTavernEdit}
          create={AreaTriggerTavernCreate}
          show={AreaTriggerTavernShow}
        />
        <Resource
          name="AreaTriggerTeleport"
          list={AreaTriggerTeleportList}
          edit={AreaTriggerTeleportEdit}
          create={AreaTriggerTeleportCreate}
          show={AreaTriggerTeleportShow}
        />
        <Resource
          name="AreaTriggerTemplate"
          list={AreaTriggerTemplateList}
          edit={AreaTriggerTemplateEdit}
          create={AreaTriggerTemplateCreate}
          show={AreaTriggerTemplateShow}
        />
        <Resource
          name="AreaTriggerTemplateAction"
          list={AreaTriggerTemplateActionList}
          edit={AreaTriggerTemplateActionEdit}
          create={AreaTriggerTemplateActionCreate}
          show={AreaTriggerTemplateActionShow}
        />
        <Resource
          name="PointsOfInterestLocale"
          list={PointsOfInterestLocaleList}
          edit={PointsOfInterestLocaleEdit}
          create={PointsOfInterestLocaleCreate}
          show={PointsOfInterestLocaleShow}
        />
        <Resource
          name="PointsOfInterest"
          list={PointsOfInterestList}
          edit={PointsOfInterestEdit}
          create={PointsOfInterestCreate}
          show={PointsOfInterestShow}
        />
        <Resource
          name="PoolMembers"
          list={PoolMembersList}
          edit={PoolMembersEdit}
          create={PoolMembersCreate}
          show={PoolMembersShow}
        />
        <Resource
          name="PoolTemplate"
          list={PoolTemplateList}
          edit={PoolTemplateEdit}
          create={PoolTemplateCreate}
          show={PoolTemplateShow}
        />
        <Resource
          name="QuestPoi"
          list={QuestPoiList}
          edit={QuestPoiEdit}
          create={QuestPoiCreate}
          show={QuestPoiShow}
        />
        <Resource
          name="QuestRewardChoiceItems"
          list={QuestRewardChoiceItemsList}
          edit={QuestRewardChoiceItemsEdit}
          create={QuestRewardChoiceItemsCreate}
          show={QuestRewardChoiceItemsShow}
        />
        <Resource
          name="ProspectingLootTemplate"
          list={ProspectingLootTemplateList}
          edit={ProspectingLootTemplateEdit}
          create={ProspectingLootTemplateCreate}
          show={ProspectingLootTemplateShow}
        />
        <Resource
          name="QuestPoolMembers"
          list={QuestPoolMembersList}
          edit={QuestPoolMembersEdit}
          create={QuestPoolMembersCreate}
          show={QuestPoolMembersShow}
        />
        <Resource
          name="QuestDetails"
          list={QuestDetailsList}
          edit={QuestDetailsEdit}
          create={QuestDetailsCreate}
          show={QuestDetailsShow}
        />
        <Resource
          name="QuestTemplate"
          list={QuestTemplateList}
          edit={QuestTemplateEdit}
          create={QuestTemplateCreate}
          show={QuestTemplateShow}
        />
        <Resource
          name="QuestTemplateAddon"
          list={QuestTemplateAddonList}
          edit={QuestTemplateAddonEdit}
          create={QuestTemplateAddonCreate}
          show={QuestTemplateAddonShow}
        />
        <Resource
          name="QuestMailSender"
          list={QuestMailSenderList}
          edit={QuestMailSenderEdit}
          create={QuestMailSenderCreate}
          show={QuestMailSenderShow}
        />
        <Resource
          name="QuestRequestItems"
          list={QuestRequestItemsList}
          edit={QuestRequestItemsEdit}
          create={QuestRequestItemsCreate}
          show={QuestRequestItemsShow}
        />
        <Resource
          name="QuestGreetingLocale"
          list={QuestGreetingLocaleList}
          edit={QuestGreetingLocaleEdit}
          create={QuestGreetingLocaleCreate}
          show={QuestGreetingLocaleShow}
        />
        <Resource
          name="QuestPoiPoints"
          list={QuestPoiPointsList}
          edit={QuestPoiPointsEdit}
          create={QuestPoiPointsCreate}
          show={QuestPoiPointsShow}
        />
        <Resource
          name="QuestRewardDisplaySpell"
          list={QuestRewardDisplaySpellList}
          edit={QuestRewardDisplaySpellEdit}
          create={QuestRewardDisplaySpellCreate}
          show={QuestRewardDisplaySpellShow}
        />
        <Resource
          name="QuestTemplateLocale"
          list={QuestTemplateLocaleList}
          edit={QuestTemplateLocaleEdit}
          create={QuestTemplateLocaleCreate}
          show={QuestTemplateLocaleShow}
        />
        <Resource
          name="QuestCompletionLogConditional"
          list={QuestCompletionLogConditionalList}
          edit={QuestCompletionLogConditionalEdit}
          create={QuestCompletionLogConditionalCreate}
          show={QuestCompletionLogConditionalShow}
        />
        <Resource
          name="QuestPoolTemplate"
          list={QuestPoolTemplateList}
          edit={QuestPoolTemplateEdit}
          create={QuestPoolTemplateCreate}
          show={QuestPoolTemplateShow}
        />
        <Resource
          name="QuestDescriptionConditional"
          list={QuestDescriptionConditionalList}
          edit={QuestDescriptionConditionalEdit}
          create={QuestDescriptionConditionalCreate}
          show={QuestDescriptionConditionalShow}
        />
        <Resource
          name="QuestRequestItemsConditional"
          list={QuestRequestItemsConditionalList}
          edit={QuestRequestItemsConditionalEdit}
          create={QuestRequestItemsConditionalCreate}
          show={QuestRequestItemsConditionalShow}
        />
        <Resource
          name="QuestVisualEffect"
          list={QuestVisualEffectList}
          edit={QuestVisualEffectEdit}
          create={QuestVisualEffectCreate}
          show={QuestVisualEffectShow}
        />
        <Resource
          name="QuestGreeting"
          list={QuestGreetingList}
          edit={QuestGreetingEdit}
          create={QuestGreetingCreate}
          show={QuestGreetingShow}
        />
        <Resource
          name="QuestOfferRewardConditional"
          list={QuestOfferRewardConditionalList}
          edit={QuestOfferRewardConditionalEdit}
          create={QuestOfferRewardConditionalCreate}
          show={QuestOfferRewardConditionalShow}
        />
        <Resource
          name="QuestObjectivesLocale"
          list={QuestObjectivesLocaleList}
          edit={QuestObjectivesLocaleEdit}
          create={QuestObjectivesLocaleCreate}
          show={QuestObjectivesLocaleShow}
        />
        <Resource
          name="QuestObjectives"
          list={QuestObjectivesList}
          edit={QuestObjectivesEdit}
          create={QuestObjectivesCreate}
          show={QuestObjectivesShow}
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
          name="QuestObjectivesCompletionEffect"
          list={QuestObjectivesCompletionEffectList}
          edit={QuestObjectivesCompletionEffectEdit}
          create={QuestObjectivesCompletionEffectCreate}
          show={QuestObjectivesCompletionEffectShow}
        />
        <Resource
          name="QuestRequestItemsLocale"
          list={QuestRequestItemsLocaleList}
          edit={QuestRequestItemsLocaleEdit}
          create={QuestRequestItemsLocaleCreate}
          show={QuestRequestItemsLocaleShow}
        />
        <Resource
          name="ScenarioPoiPoints"
          list={ScenarioPoiPointsList}
          edit={ScenarioPoiPointsEdit}
          create={ScenarioPoiPointsCreate}
          show={ScenarioPoiPointsShow}
        />
        <Resource
          name="ScenarioPoi"
          list={ScenarioPoiList}
          edit={ScenarioPoiEdit}
          create={ScenarioPoiCreate}
          show={ScenarioPoiShow}
        />
        <Resource
          name="Scenarios"
          list={ScenariosList}
          edit={ScenariosEdit}
          create={ScenariosCreate}
          show={ScenariosShow}
        />
        <Resource
          name="SceneTemplate"
          list={SceneTemplateList}
          edit={SceneTemplateEdit}
          create={SceneTemplateCreate}
          show={SceneTemplateShow}
        />
        <Resource
          name="ScriptSplineChainWaypoints"
          list={ScriptSplineChainWaypointsList}
          edit={ScriptSplineChainWaypointsEdit}
          create={ScriptSplineChainWaypointsCreate}
          show={ScriptSplineChainWaypointsShow}
        />
        <Resource
          name="ScriptSplineChainMeta"
          list={ScriptSplineChainMetaList}
          edit={ScriptSplineChainMetaEdit}
          create={ScriptSplineChainMetaCreate}
          show={ScriptSplineChainMetaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
