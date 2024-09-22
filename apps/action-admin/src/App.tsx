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
import { ConditionsList } from "./conditions/ConditionsList";
import { ConditionsCreate } from "./conditions/ConditionsCreate";
import { ConditionsEdit } from "./conditions/ConditionsEdit";
import { ConditionsShow } from "./conditions/ConditionsShow";
import { CommandList } from "./command/CommandList";
import { CommandCreate } from "./command/CommandCreate";
import { CommandEdit } from "./command/CommandEdit";
import { CommandShow } from "./command/CommandShow";
import { ConversationLineTemplateList } from "./conversationLineTemplate/ConversationLineTemplateList";
import { ConversationLineTemplateCreate } from "./conversationLineTemplate/ConversationLineTemplateCreate";
import { ConversationLineTemplateEdit } from "./conversationLineTemplate/ConversationLineTemplateEdit";
import { ConversationLineTemplateShow } from "./conversationLineTemplate/ConversationLineTemplateShow";
import { CreatureQuestStarterList } from "./creatureQuestStarter/CreatureQuestStarterList";
import { CreatureQuestStarterCreate } from "./creatureQuestStarter/CreatureQuestStarterCreate";
import { CreatureQuestStarterEdit } from "./creatureQuestStarter/CreatureQuestStarterEdit";
import { CreatureQuestStarterShow } from "./creatureQuestStarter/CreatureQuestStarterShow";
import { ConversationActorsList } from "./conversationActors/ConversationActorsList";
import { ConversationActorsCreate } from "./conversationActors/ConversationActorsCreate";
import { ConversationActorsEdit } from "./conversationActors/ConversationActorsEdit";
import { ConversationActorsShow } from "./conversationActors/ConversationActorsShow";
import { CreatureTemplateGossipList } from "./creatureTemplateGossip/CreatureTemplateGossipList";
import { CreatureTemplateGossipCreate } from "./creatureTemplateGossip/CreatureTemplateGossipCreate";
import { CreatureTemplateGossipEdit } from "./creatureTemplateGossip/CreatureTemplateGossipEdit";
import { CreatureTemplateGossipShow } from "./creatureTemplateGossip/CreatureTemplateGossipShow";
import { CreatureClassLevelStatsList } from "./creatureClassLevelStats/CreatureClassLevelStatsList";
import { CreatureClassLevelStatsCreate } from "./creatureClassLevelStats/CreatureClassLevelStatsCreate";
import { CreatureClassLevelStatsEdit } from "./creatureClassLevelStats/CreatureClassLevelStatsEdit";
import { CreatureClassLevelStatsShow } from "./creatureClassLevelStats/CreatureClassLevelStatsShow";
import { CreatureTemplateList } from "./creatureTemplate/CreatureTemplateList";
import { CreatureTemplateCreate } from "./creatureTemplate/CreatureTemplateCreate";
import { CreatureTemplateEdit } from "./creatureTemplate/CreatureTemplateEdit";
import { CreatureTemplateShow } from "./creatureTemplate/CreatureTemplateShow";
import { CreatureAddonList } from "./creatureAddon/CreatureAddonList";
import { CreatureAddonCreate } from "./creatureAddon/CreatureAddonCreate";
import { CreatureAddonEdit } from "./creatureAddon/CreatureAddonEdit";
import { CreatureAddonShow } from "./creatureAddon/CreatureAddonShow";
import { CreatureTemplateAddonList } from "./creatureTemplateAddon/CreatureTemplateAddonList";
import { CreatureTemplateAddonCreate } from "./creatureTemplateAddon/CreatureTemplateAddonCreate";
import { CreatureTemplateAddonEdit } from "./creatureTemplateAddon/CreatureTemplateAddonEdit";
import { CreatureTemplateAddonShow } from "./creatureTemplateAddon/CreatureTemplateAddonShow";
import { CreatureSummonedDataList } from "./creatureSummonedData/CreatureSummonedDataList";
import { CreatureSummonedDataCreate } from "./creatureSummonedData/CreatureSummonedDataCreate";
import { CreatureSummonedDataEdit } from "./creatureSummonedData/CreatureSummonedDataEdit";
import { CreatureSummonedDataShow } from "./creatureSummonedData/CreatureSummonedDataShow";
import { CreatureList } from "./creature/CreatureList";
import { CreatureCreate } from "./creature/CreatureCreate";
import { CreatureEdit } from "./creature/CreatureEdit";
import { CreatureShow } from "./creature/CreatureShow";
import { CreatureSummonGroupsList } from "./creatureSummonGroups/CreatureSummonGroupsList";
import { CreatureSummonGroupsCreate } from "./creatureSummonGroups/CreatureSummonGroupsCreate";
import { CreatureSummonGroupsEdit } from "./creatureSummonGroups/CreatureSummonGroupsEdit";
import { CreatureSummonGroupsShow } from "./creatureSummonGroups/CreatureSummonGroupsShow";
import { CreatureTemplateLocaleList } from "./creatureTemplateLocale/CreatureTemplateLocaleList";
import { CreatureTemplateLocaleCreate } from "./creatureTemplateLocale/CreatureTemplateLocaleCreate";
import { CreatureTemplateLocaleEdit } from "./creatureTemplateLocale/CreatureTemplateLocaleEdit";
import { CreatureTemplateLocaleShow } from "./creatureTemplateLocale/CreatureTemplateLocaleShow";
import { CreatureTemplateDifficultyList } from "./creatureTemplateDifficulty/CreatureTemplateDifficultyList";
import { CreatureTemplateDifficultyCreate } from "./creatureTemplateDifficulty/CreatureTemplateDifficultyCreate";
import { CreatureTemplateDifficultyEdit } from "./creatureTemplateDifficulty/CreatureTemplateDifficultyEdit";
import { CreatureTemplateDifficultyShow } from "./creatureTemplateDifficulty/CreatureTemplateDifficultyShow";
import { CreatureTemplateSpellList } from "./creatureTemplateSpell/CreatureTemplateSpellList";
import { CreatureTemplateSpellCreate } from "./creatureTemplateSpell/CreatureTemplateSpellCreate";
import { CreatureTemplateSpellEdit } from "./creatureTemplateSpell/CreatureTemplateSpellEdit";
import { CreatureTemplateSpellShow } from "./creatureTemplateSpell/CreatureTemplateSpellShow";
import { CreatureTemplateSparringList } from "./creatureTemplateSparring/CreatureTemplateSparringList";
import { CreatureTemplateSparringCreate } from "./creatureTemplateSparring/CreatureTemplateSparringCreate";
import { CreatureTemplateSparringEdit } from "./creatureTemplateSparring/CreatureTemplateSparringEdit";
import { CreatureTemplateSparringShow } from "./creatureTemplateSparring/CreatureTemplateSparringShow";
import { CreatureEquipTemplateList } from "./creatureEquipTemplate/CreatureEquipTemplateList";
import { CreatureEquipTemplateCreate } from "./creatureEquipTemplate/CreatureEquipTemplateCreate";
import { CreatureEquipTemplateEdit } from "./creatureEquipTemplate/CreatureEquipTemplateEdit";
import { CreatureEquipTemplateShow } from "./creatureEquipTemplate/CreatureEquipTemplateShow";
import { ConversationTemplateList } from "./conversationTemplate/ConversationTemplateList";
import { ConversationTemplateCreate } from "./conversationTemplate/ConversationTemplateCreate";
import { ConversationTemplateEdit } from "./conversationTemplate/ConversationTemplateEdit";
import { ConversationTemplateShow } from "./conversationTemplate/ConversationTemplateShow";
import { CreatureOnKillReputationList } from "./creatureOnKillReputation/CreatureOnKillReputationList";
import { CreatureOnKillReputationCreate } from "./creatureOnKillReputation/CreatureOnKillReputationCreate";
import { CreatureOnKillReputationEdit } from "./creatureOnKillReputation/CreatureOnKillReputationEdit";
import { CreatureOnKillReputationShow } from "./creatureOnKillReputation/CreatureOnKillReputationShow";
import { CreatureMovementInfoList } from "./creatureMovementInfo/CreatureMovementInfoList";
import { CreatureMovementInfoCreate } from "./creatureMovementInfo/CreatureMovementInfoCreate";
import { CreatureMovementInfoEdit } from "./creatureMovementInfo/CreatureMovementInfoEdit";
import { CreatureMovementInfoShow } from "./creatureMovementInfo/CreatureMovementInfoShow";
import { CreatureModelInfoList } from "./creatureModelInfo/CreatureModelInfoList";
import { CreatureModelInfoCreate } from "./creatureModelInfo/CreatureModelInfoCreate";
import { CreatureModelInfoEdit } from "./creatureModelInfo/CreatureModelInfoEdit";
import { CreatureModelInfoShow } from "./creatureModelInfo/CreatureModelInfoShow";
import { CreatureImmunitiesList } from "./creatureImmunities/CreatureImmunitiesList";
import { CreatureImmunitiesCreate } from "./creatureImmunities/CreatureImmunitiesCreate";
import { CreatureImmunitiesEdit } from "./creatureImmunities/CreatureImmunitiesEdit";
import { CreatureImmunitiesShow } from "./creatureImmunities/CreatureImmunitiesShow";
import { CreatureQuestCurrencyList } from "./creatureQuestCurrency/CreatureQuestCurrencyList";
import { CreatureQuestCurrencyCreate } from "./creatureQuestCurrency/CreatureQuestCurrencyCreate";
import { CreatureQuestCurrencyEdit } from "./creatureQuestCurrency/CreatureQuestCurrencyEdit";
import { CreatureQuestCurrencyShow } from "./creatureQuestCurrency/CreatureQuestCurrencyShow";
import { CreatureTemplateModelList } from "./creatureTemplateModel/CreatureTemplateModelList";
import { CreatureTemplateModelCreate } from "./creatureTemplateModel/CreatureTemplateModelCreate";
import { CreatureTemplateModelEdit } from "./creatureTemplateModel/CreatureTemplateModelEdit";
import { CreatureTemplateModelShow } from "./creatureTemplateModel/CreatureTemplateModelShow";
import { CreatureTemplateMovementList } from "./creatureTemplateMovement/CreatureTemplateMovementList";
import { CreatureTemplateMovementCreate } from "./creatureTemplateMovement/CreatureTemplateMovementCreate";
import { CreatureTemplateMovementEdit } from "./creatureTemplateMovement/CreatureTemplateMovementEdit";
import { CreatureTemplateMovementShow } from "./creatureTemplateMovement/CreatureTemplateMovementShow";
import { CreatureQuestItemList } from "./creatureQuestItem/CreatureQuestItemList";
import { CreatureQuestItemCreate } from "./creatureQuestItem/CreatureQuestItemCreate";
import { CreatureQuestItemEdit } from "./creatureQuestItem/CreatureQuestItemEdit";
import { CreatureQuestItemShow } from "./creatureQuestItem/CreatureQuestItemShow";
import { CreatureTextLocaleList } from "./creatureTextLocale/CreatureTextLocaleList";
import { CreatureTextLocaleCreate } from "./creatureTextLocale/CreatureTextLocaleCreate";
import { CreatureTextLocaleEdit } from "./creatureTextLocale/CreatureTextLocaleEdit";
import { CreatureTextLocaleShow } from "./creatureTextLocale/CreatureTextLocaleShow";
import { CreatureQuestEnderList } from "./creatureQuestEnder/CreatureQuestEnderList";
import { CreatureQuestEnderCreate } from "./creatureQuestEnder/CreatureQuestEnderCreate";
import { CreatureQuestEnderEdit } from "./creatureQuestEnder/CreatureQuestEnderEdit";
import { CreatureQuestEnderShow } from "./creatureQuestEnder/CreatureQuestEnderShow";
import { CreatureLootTemplateList } from "./creatureLootTemplate/CreatureLootTemplateList";
import { CreatureLootTemplateCreate } from "./creatureLootTemplate/CreatureLootTemplateCreate";
import { CreatureLootTemplateEdit } from "./creatureLootTemplate/CreatureLootTemplateEdit";
import { CreatureLootTemplateShow } from "./creatureLootTemplate/CreatureLootTemplateShow";
import { CreatureMovementOverrideList } from "./creatureMovementOverride/CreatureMovementOverrideList";
import { CreatureMovementOverrideCreate } from "./creatureMovementOverride/CreatureMovementOverrideCreate";
import { CreatureMovementOverrideEdit } from "./creatureMovementOverride/CreatureMovementOverrideEdit";
import { CreatureMovementOverrideShow } from "./creatureMovementOverride/CreatureMovementOverrideShow";
import { CreatureTemplateResistanceList } from "./creatureTemplateResistance/CreatureTemplateResistanceList";
import { CreatureTemplateResistanceCreate } from "./creatureTemplateResistance/CreatureTemplateResistanceCreate";
import { CreatureTemplateResistanceEdit } from "./creatureTemplateResistance/CreatureTemplateResistanceEdit";
import { CreatureTemplateResistanceShow } from "./creatureTemplateResistance/CreatureTemplateResistanceShow";
import { CreatureFormationsList } from "./creatureFormations/CreatureFormationsList";
import { CreatureFormationsCreate } from "./creatureFormations/CreatureFormationsCreate";
import { CreatureFormationsEdit } from "./creatureFormations/CreatureFormationsEdit";
import { CreatureFormationsShow } from "./creatureFormations/CreatureFormationsShow";
import { CreatureTextList } from "./creatureText/CreatureTextList";
import { CreatureTextCreate } from "./creatureText/CreatureTextCreate";
import { CreatureTextEdit } from "./creatureText/CreatureTextEdit";
import { CreatureTextShow } from "./creatureText/CreatureTextShow";
import { SpellList } from "./spell/SpellList";
import { SpellCreate } from "./spell/SpellCreate";
import { SpellEdit } from "./spell/SpellEdit";
import { SpellShow } from "./spell/SpellShow";
import { SpellEffectList } from "./spellEffect/SpellEffectList";
import { SpellEffectCreate } from "./spellEffect/SpellEffectCreate";
import { SpellEffectEdit } from "./spellEffect/SpellEffectEdit";
import { SpellEffectShow } from "./spellEffect/SpellEffectShow";
import { SkillDiscoveryTemplateList } from "./skillDiscoveryTemplate/SkillDiscoveryTemplateList";
import { SkillDiscoveryTemplateCreate } from "./skillDiscoveryTemplate/SkillDiscoveryTemplateCreate";
import { SkillDiscoveryTemplateEdit } from "./skillDiscoveryTemplate/SkillDiscoveryTemplateEdit";
import { SkillDiscoveryTemplateShow } from "./skillDiscoveryTemplate/SkillDiscoveryTemplateShow";
import { SkillExtraItemTemplateList } from "./skillExtraItemTemplate/SkillExtraItemTemplateList";
import { SkillExtraItemTemplateCreate } from "./skillExtraItemTemplate/SkillExtraItemTemplateCreate";
import { SkillExtraItemTemplateEdit } from "./skillExtraItemTemplate/SkillExtraItemTemplateEdit";
import { SkillExtraItemTemplateShow } from "./skillExtraItemTemplate/SkillExtraItemTemplateShow";
import { SkillFishingBaseLevelList } from "./skillFishingBaseLevel/SkillFishingBaseLevelList";
import { SkillFishingBaseLevelCreate } from "./skillFishingBaseLevel/SkillFishingBaseLevelCreate";
import { SkillFishingBaseLevelEdit } from "./skillFishingBaseLevel/SkillFishingBaseLevelEdit";
import { SkillFishingBaseLevelShow } from "./skillFishingBaseLevel/SkillFishingBaseLevelShow";
import { SkillTiersList } from "./skillTiers/SkillTiersList";
import { SkillTiersCreate } from "./skillTiers/SkillTiersCreate";
import { SkillTiersEdit } from "./skillTiers/SkillTiersEdit";
import { SkillTiersShow } from "./skillTiers/SkillTiersShow";
import { SkillPerfectItemTemplateList } from "./skillPerfectItemTemplate/SkillPerfectItemTemplateList";
import { SkillPerfectItemTemplateCreate } from "./skillPerfectItemTemplate/SkillPerfectItemTemplateCreate";
import { SkillPerfectItemTemplateEdit } from "./skillPerfectItemTemplate/SkillPerfectItemTemplateEdit";
import { SkillPerfectItemTemplateShow } from "./skillPerfectItemTemplate/SkillPerfectItemTemplateShow";
import { SmartScriptsList } from "./smartScripts/SmartScriptsList";
import { SmartScriptsCreate } from "./smartScripts/SmartScriptsCreate";
import { SmartScriptsEdit } from "./smartScripts/SmartScriptsEdit";
import { SmartScriptsShow } from "./smartScripts/SmartScriptsShow";
import { SkinningLootTemplateList } from "./skinningLootTemplate/SkinningLootTemplateList";
import { SkinningLootTemplateCreate } from "./skinningLootTemplate/SkinningLootTemplateCreate";
import { SkinningLootTemplateEdit } from "./skinningLootTemplate/SkinningLootTemplateEdit";
import { SkinningLootTemplateShow } from "./skinningLootTemplate/SkinningLootTemplateShow";
import { ServersideSpellList } from "./serversideSpell/ServersideSpellList";
import { ServersideSpellCreate } from "./serversideSpell/ServersideSpellCreate";
import { ServersideSpellEdit } from "./serversideSpell/ServersideSpellEdit";
import { ServersideSpellShow } from "./serversideSpell/ServersideSpellShow";
import { ServersideSpellEffectList } from "./serversideSpellEffect/ServersideSpellEffectList";
import { ServersideSpellEffectCreate } from "./serversideSpellEffect/ServersideSpellEffectCreate";
import { ServersideSpellEffectEdit } from "./serversideSpellEffect/ServersideSpellEffectEdit";
import { ServersideSpellEffectShow } from "./serversideSpellEffect/ServersideSpellEffectShow";
import { SpawnGroupList } from "./spawnGroup/SpawnGroupList";
import { SpawnGroupCreate } from "./spawnGroup/SpawnGroupCreate";
import { SpawnGroupEdit } from "./spawnGroup/SpawnGroupEdit";
import { SpawnGroupShow } from "./spawnGroup/SpawnGroupShow";
import { SpellAreaList } from "./spellArea/SpellAreaList";
import { SpellAreaCreate } from "./spellArea/SpellAreaCreate";
import { SpellAreaEdit } from "./spellArea/SpellAreaEdit";
import { SpellAreaShow } from "./spellArea/SpellAreaShow";
import { SpawnGroupTemplateList } from "./spawnGroupTemplate/SpawnGroupTemplateList";
import { SpawnGroupTemplateCreate } from "./spawnGroupTemplate/SpawnGroupTemplateCreate";
import { SpawnGroupTemplateEdit } from "./spawnGroupTemplate/SpawnGroupTemplateEdit";
import { SpawnGroupTemplateShow } from "./spawnGroupTemplate/SpawnGroupTemplateShow";

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
        title={"Action"}
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
          name="Conditions"
          list={ConditionsList}
          edit={ConditionsEdit}
          create={ConditionsCreate}
          show={ConditionsShow}
        />
        <Resource
          name="Command"
          list={CommandList}
          edit={CommandEdit}
          create={CommandCreate}
          show={CommandShow}
        />
        <Resource
          name="ConversationLineTemplate"
          list={ConversationLineTemplateList}
          edit={ConversationLineTemplateEdit}
          create={ConversationLineTemplateCreate}
          show={ConversationLineTemplateShow}
        />
        <Resource
          name="CreatureQuestStarter"
          list={CreatureQuestStarterList}
          edit={CreatureQuestStarterEdit}
          create={CreatureQuestStarterCreate}
          show={CreatureQuestStarterShow}
        />
        <Resource
          name="ConversationActors"
          list={ConversationActorsList}
          edit={ConversationActorsEdit}
          create={ConversationActorsCreate}
          show={ConversationActorsShow}
        />
        <Resource
          name="CreatureTemplateGossip"
          list={CreatureTemplateGossipList}
          edit={CreatureTemplateGossipEdit}
          create={CreatureTemplateGossipCreate}
          show={CreatureTemplateGossipShow}
        />
        <Resource
          name="CreatureClassLevelStats"
          list={CreatureClassLevelStatsList}
          edit={CreatureClassLevelStatsEdit}
          create={CreatureClassLevelStatsCreate}
          show={CreatureClassLevelStatsShow}
        />
        <Resource
          name="CreatureTemplate"
          list={CreatureTemplateList}
          edit={CreatureTemplateEdit}
          create={CreatureTemplateCreate}
          show={CreatureTemplateShow}
        />
        <Resource
          name="CreatureAddon"
          list={CreatureAddonList}
          edit={CreatureAddonEdit}
          create={CreatureAddonCreate}
          show={CreatureAddonShow}
        />
        <Resource
          name="CreatureTemplateAddon"
          list={CreatureTemplateAddonList}
          edit={CreatureTemplateAddonEdit}
          create={CreatureTemplateAddonCreate}
          show={CreatureTemplateAddonShow}
        />
        <Resource
          name="CreatureSummonedData"
          list={CreatureSummonedDataList}
          edit={CreatureSummonedDataEdit}
          create={CreatureSummonedDataCreate}
          show={CreatureSummonedDataShow}
        />
        <Resource
          name="Creature"
          list={CreatureList}
          edit={CreatureEdit}
          create={CreatureCreate}
          show={CreatureShow}
        />
        <Resource
          name="CreatureSummonGroups"
          list={CreatureSummonGroupsList}
          edit={CreatureSummonGroupsEdit}
          create={CreatureSummonGroupsCreate}
          show={CreatureSummonGroupsShow}
        />
        <Resource
          name="CreatureTemplateLocale"
          list={CreatureTemplateLocaleList}
          edit={CreatureTemplateLocaleEdit}
          create={CreatureTemplateLocaleCreate}
          show={CreatureTemplateLocaleShow}
        />
        <Resource
          name="CreatureTemplateDifficulty"
          list={CreatureTemplateDifficultyList}
          edit={CreatureTemplateDifficultyEdit}
          create={CreatureTemplateDifficultyCreate}
          show={CreatureTemplateDifficultyShow}
        />
        <Resource
          name="CreatureTemplateSpell"
          list={CreatureTemplateSpellList}
          edit={CreatureTemplateSpellEdit}
          create={CreatureTemplateSpellCreate}
          show={CreatureTemplateSpellShow}
        />
        <Resource
          name="CreatureTemplateSparring"
          list={CreatureTemplateSparringList}
          edit={CreatureTemplateSparringEdit}
          create={CreatureTemplateSparringCreate}
          show={CreatureTemplateSparringShow}
        />
        <Resource
          name="CreatureEquipTemplate"
          list={CreatureEquipTemplateList}
          edit={CreatureEquipTemplateEdit}
          create={CreatureEquipTemplateCreate}
          show={CreatureEquipTemplateShow}
        />
        <Resource
          name="ConversationTemplate"
          list={ConversationTemplateList}
          edit={ConversationTemplateEdit}
          create={ConversationTemplateCreate}
          show={ConversationTemplateShow}
        />
        <Resource
          name="CreatureOnKillReputation"
          list={CreatureOnKillReputationList}
          edit={CreatureOnKillReputationEdit}
          create={CreatureOnKillReputationCreate}
          show={CreatureOnKillReputationShow}
        />
        <Resource
          name="CreatureMovementInfo"
          list={CreatureMovementInfoList}
          edit={CreatureMovementInfoEdit}
          create={CreatureMovementInfoCreate}
          show={CreatureMovementInfoShow}
        />
        <Resource
          name="CreatureModelInfo"
          list={CreatureModelInfoList}
          edit={CreatureModelInfoEdit}
          create={CreatureModelInfoCreate}
          show={CreatureModelInfoShow}
        />
        <Resource
          name="CreatureImmunities"
          list={CreatureImmunitiesList}
          edit={CreatureImmunitiesEdit}
          create={CreatureImmunitiesCreate}
          show={CreatureImmunitiesShow}
        />
        <Resource
          name="CreatureQuestCurrency"
          list={CreatureQuestCurrencyList}
          edit={CreatureQuestCurrencyEdit}
          create={CreatureQuestCurrencyCreate}
          show={CreatureQuestCurrencyShow}
        />
        <Resource
          name="CreatureTemplateModel"
          list={CreatureTemplateModelList}
          edit={CreatureTemplateModelEdit}
          create={CreatureTemplateModelCreate}
          show={CreatureTemplateModelShow}
        />
        <Resource
          name="CreatureTemplateMovement"
          list={CreatureTemplateMovementList}
          edit={CreatureTemplateMovementEdit}
          create={CreatureTemplateMovementCreate}
          show={CreatureTemplateMovementShow}
        />
        <Resource
          name="CreatureQuestItem"
          list={CreatureQuestItemList}
          edit={CreatureQuestItemEdit}
          create={CreatureQuestItemCreate}
          show={CreatureQuestItemShow}
        />
        <Resource
          name="CreatureTextLocale"
          list={CreatureTextLocaleList}
          edit={CreatureTextLocaleEdit}
          create={CreatureTextLocaleCreate}
          show={CreatureTextLocaleShow}
        />
        <Resource
          name="CreatureQuestEnder"
          list={CreatureQuestEnderList}
          edit={CreatureQuestEnderEdit}
          create={CreatureQuestEnderCreate}
          show={CreatureQuestEnderShow}
        />
        <Resource
          name="CreatureLootTemplate"
          list={CreatureLootTemplateList}
          edit={CreatureLootTemplateEdit}
          create={CreatureLootTemplateCreate}
          show={CreatureLootTemplateShow}
        />
        <Resource
          name="CreatureMovementOverride"
          list={CreatureMovementOverrideList}
          edit={CreatureMovementOverrideEdit}
          create={CreatureMovementOverrideCreate}
          show={CreatureMovementOverrideShow}
        />
        <Resource
          name="CreatureTemplateResistance"
          list={CreatureTemplateResistanceList}
          edit={CreatureTemplateResistanceEdit}
          create={CreatureTemplateResistanceCreate}
          show={CreatureTemplateResistanceShow}
        />
        <Resource
          name="CreatureFormations"
          list={CreatureFormationsList}
          edit={CreatureFormationsEdit}
          create={CreatureFormationsCreate}
          show={CreatureFormationsShow}
        />
        <Resource
          name="CreatureText"
          list={CreatureTextList}
          edit={CreatureTextEdit}
          create={CreatureTextCreate}
          show={CreatureTextShow}
        />
        <Resource
          name="Spell"
          list={SpellList}
          edit={SpellEdit}
          create={SpellCreate}
          show={SpellShow}
        />
        <Resource
          name="SpellEffect"
          list={SpellEffectList}
          edit={SpellEffectEdit}
          create={SpellEffectCreate}
          show={SpellEffectShow}
        />
        <Resource
          name="SkillDiscoveryTemplate"
          list={SkillDiscoveryTemplateList}
          edit={SkillDiscoveryTemplateEdit}
          create={SkillDiscoveryTemplateCreate}
          show={SkillDiscoveryTemplateShow}
        />
        <Resource
          name="SkillExtraItemTemplate"
          list={SkillExtraItemTemplateList}
          edit={SkillExtraItemTemplateEdit}
          create={SkillExtraItemTemplateCreate}
          show={SkillExtraItemTemplateShow}
        />
        <Resource
          name="SkillFishingBaseLevel"
          list={SkillFishingBaseLevelList}
          edit={SkillFishingBaseLevelEdit}
          create={SkillFishingBaseLevelCreate}
          show={SkillFishingBaseLevelShow}
        />
        <Resource
          name="SkillTiers"
          list={SkillTiersList}
          edit={SkillTiersEdit}
          create={SkillTiersCreate}
          show={SkillTiersShow}
        />
        <Resource
          name="SkillPerfectItemTemplate"
          list={SkillPerfectItemTemplateList}
          edit={SkillPerfectItemTemplateEdit}
          create={SkillPerfectItemTemplateCreate}
          show={SkillPerfectItemTemplateShow}
        />
        <Resource
          name="SmartScripts"
          list={SmartScriptsList}
          edit={SmartScriptsEdit}
          create={SmartScriptsCreate}
          show={SmartScriptsShow}
        />
        <Resource
          name="SkinningLootTemplate"
          list={SkinningLootTemplateList}
          edit={SkinningLootTemplateEdit}
          create={SkinningLootTemplateCreate}
          show={SkinningLootTemplateShow}
        />
        <Resource
          name="ServersideSpell"
          list={ServersideSpellList}
          edit={ServersideSpellEdit}
          create={ServersideSpellCreate}
          show={ServersideSpellShow}
        />
        <Resource
          name="ServersideSpellEffect"
          list={ServersideSpellEffectList}
          edit={ServersideSpellEffectEdit}
          create={ServersideSpellEffectCreate}
          show={ServersideSpellEffectShow}
        />
        <Resource
          name="SpawnGroup"
          list={SpawnGroupList}
          edit={SpawnGroupEdit}
          create={SpawnGroupCreate}
          show={SpawnGroupShow}
        />
        <Resource
          name="SpellArea"
          list={SpellAreaList}
          edit={SpellAreaEdit}
          create={SpellAreaCreate}
          show={SpellAreaShow}
        />
        <Resource
          name="SpawnGroupTemplate"
          list={SpawnGroupTemplateList}
          edit={SpawnGroupTemplateEdit}
          create={SpawnGroupTemplateCreate}
          show={SpawnGroupTemplateShow}
        />
      </Admin>
    </div>
  );
};

export default App;
