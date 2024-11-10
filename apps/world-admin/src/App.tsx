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
import { AchievementList } from "./achievement/AchievementList";
import { AchievementCreate } from "./achievement/AchievementCreate";
import { AchievementEdit } from "./achievement/AchievementEdit";
import { AchievementShow } from "./achievement/AchievementShow";
import { AchievementRewardList } from "./achievementReward/AchievementRewardList";
import { AchievementRewardCreate } from "./achievementReward/AchievementRewardCreate";
import { AchievementRewardEdit } from "./achievementReward/AchievementRewardEdit";
import { AchievementRewardShow } from "./achievementReward/AchievementRewardShow";
import { AchievementRewardLocaleList } from "./achievementRewardLocale/AchievementRewardLocaleList";
import { AchievementRewardLocaleCreate } from "./achievementRewardLocale/AchievementRewardLocaleCreate";
import { AchievementRewardLocaleEdit } from "./achievementRewardLocale/AchievementRewardLocaleEdit";
import { AchievementRewardLocaleShow } from "./achievementRewardLocale/AchievementRewardLocaleShow";
import { AchievementBehaviourList } from "./achievementBehaviour/AchievementBehaviourList";
import { AchievementBehaviourCreate } from "./achievementBehaviour/AchievementBehaviourCreate";
import { AchievementBehaviourEdit } from "./achievementBehaviour/AchievementBehaviourEdit";
import { AchievementBehaviourShow } from "./achievementBehaviour/AchievementBehaviourShow";
import { GameObjectQuestItemList } from "./gameObjectQuestItem/GameObjectQuestItemList";
import { GameObjectQuestItemCreate } from "./gameObjectQuestItem/GameObjectQuestItemCreate";
import { GameObjectQuestItemEdit } from "./gameObjectQuestItem/GameObjectQuestItemEdit";
import { GameObjectQuestItemShow } from "./gameObjectQuestItem/GameObjectQuestItemShow";
import { ExplorationBasexpList } from "./explorationBasexp/ExplorationBasexpList";
import { ExplorationBasexpCreate } from "./explorationBasexp/ExplorationBasexpCreate";
import { ExplorationBasexpEdit } from "./explorationBasexp/ExplorationBasexpEdit";
import { ExplorationBasexpShow } from "./explorationBasexp/ExplorationBasexpShow";
import { GameEventList } from "./gameEvent/GameEventList";
import { GameEventCreate } from "./gameEvent/GameEventCreate";
import { GameEventEdit } from "./gameEvent/GameEventEdit";
import { GameEventShow } from "./gameEvent/GameEventShow";
import { GameObjectTemplateAddonList } from "./gameObjectTemplateAddon/GameObjectTemplateAddonList";
import { GameObjectTemplateAddonCreate } from "./gameObjectTemplateAddon/GameObjectTemplateAddonCreate";
import { GameObjectTemplateAddonEdit } from "./gameObjectTemplateAddon/GameObjectTemplateAddonEdit";
import { GameObjectTemplateAddonShow } from "./gameObjectTemplateAddon/GameObjectTemplateAddonShow";
import { GameObjectTemplateList } from "./gameObjectTemplate/GameObjectTemplateList";
import { GameObjectTemplateCreate } from "./gameObjectTemplate/GameObjectTemplateCreate";
import { GameObjectTemplateEdit } from "./gameObjectTemplate/GameObjectTemplateEdit";
import { GameObjectTemplateShow } from "./gameObjectTemplate/GameObjectTemplateShow";
import { GameObjectAddonList } from "./gameObjectAddon/GameObjectAddonList";
import { GameObjectAddonCreate } from "./gameObjectAddon/GameObjectAddonCreate";
import { GameObjectAddonEdit } from "./gameObjectAddon/GameObjectAddonEdit";
import { GameObjectAddonShow } from "./gameObjectAddon/GameObjectAddonShow";
import { GameObjectList } from "./gameObject/GameObjectList";
import { GameObjectCreate } from "./gameObject/GameObjectCreate";
import { GameObjectEdit } from "./gameObject/GameObjectEdit";
import { GameObjectShow } from "./gameObject/GameObjectShow";
import { GameObjectQuestStarterList } from "./gameObjectQuestStarter/GameObjectQuestStarterList";
import { GameObjectQuestStarterCreate } from "./gameObjectQuestStarter/GameObjectQuestStarterCreate";
import { GameObjectQuestStarterEdit } from "./gameObjectQuestStarter/GameObjectQuestStarterEdit";
import { GameObjectQuestStarterShow } from "./gameObjectQuestStarter/GameObjectQuestStarterShow";
import { LootTemplateList } from "./lootTemplate/LootTemplateList";
import { LootTemplateCreate } from "./lootTemplate/LootTemplateCreate";
import { LootTemplateEdit } from "./lootTemplate/LootTemplateEdit";
import { LootTemplateShow } from "./lootTemplate/LootTemplateShow";
import { GameObjectQuestEnderList } from "./gameObjectQuestEnder/GameObjectQuestEnderList";
import { GameObjectQuestEnderCreate } from "./gameObjectQuestEnder/GameObjectQuestEnderCreate";
import { GameObjectQuestEnderEdit } from "./gameObjectQuestEnder/GameObjectQuestEnderEdit";
import { GameObjectQuestEnderShow } from "./gameObjectQuestEnder/GameObjectQuestEnderShow";
import { GameObjectTemplateLocaleList } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleList";
import { GameObjectTemplateLocaleCreate } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleCreate";
import { GameObjectTemplateLocaleEdit } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleEdit";
import { GameObjectTemplateLocaleShow } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleShow";
import { GameEventModelEquipList } from "./gameEventModelEquip/GameEventModelEquipList";
import { GameEventModelEquipCreate } from "./gameEventModelEquip/GameEventModelEquipCreate";
import { GameEventModelEquipEdit } from "./gameEventModelEquip/GameEventModelEquipEdit";
import { GameEventModelEquipShow } from "./gameEventModelEquip/GameEventModelEquipShow";
import { GameEventGameObjectList } from "./gameEventGameObject/GameEventGameObjectList";
import { GameEventGameObjectCreate } from "./gameEventGameObject/GameEventGameObjectCreate";
import { GameEventGameObjectEdit } from "./gameEventGameObject/GameEventGameObjectEdit";
import { GameEventGameObjectShow } from "./gameEventGameObject/GameEventGameObjectShow";
import { GameEventQuestList } from "./gameEventQuest/GameEventQuestList";
import { GameEventQuestCreate } from "./gameEventQuest/GameEventQuestCreate";
import { GameEventQuestEdit } from "./gameEventQuest/GameEventQuestEdit";
import { GameEventQuestShow } from "./gameEventQuest/GameEventQuestShow";
import { GameEventCharacterList } from "./gameEventCharacter/GameEventCharacterList";
import { GameEventCharacterCreate } from "./gameEventCharacter/GameEventCharacterCreate";
import { GameEventCharacterEdit } from "./gameEventCharacter/GameEventCharacterEdit";
import { GameEventCharacterShow } from "./gameEventCharacter/GameEventCharacterShow";
import { GameObjectOverridesList } from "./gameObjectOverrides/GameObjectOverridesList";
import { GameObjectOverridesCreate } from "./gameObjectOverrides/GameObjectOverridesCreate";
import { GameObjectOverridesEdit } from "./gameObjectOverrides/GameObjectOverridesEdit";
import { GameObjectOverridesShow } from "./gameObjectOverrides/GameObjectOverridesShow";
import { GameEventConditionList } from "./gameEventCondition/GameEventConditionList";
import { GameEventConditionCreate } from "./gameEventCondition/GameEventConditionCreate";
import { GameEventConditionEdit } from "./gameEventCondition/GameEventConditionEdit";
import { GameEventConditionShow } from "./gameEventCondition/GameEventConditionShow";
import { GameEventCreatureList } from "./gameEventCreature/GameEventCreatureList";
import { GameEventCreatureCreate } from "./gameEventCreature/GameEventCreatureCreate";
import { GameEventCreatureEdit } from "./gameEventCreature/GameEventCreatureEdit";
import { GameEventCreatureShow } from "./gameEventCreature/GameEventCreatureShow";
import { GameObjectLootTemplateList } from "./gameObjectLootTemplate/GameObjectLootTemplateList";
import { GameObjectLootTemplateCreate } from "./gameObjectLootTemplate/GameObjectLootTemplateCreate";
import { GameObjectLootTemplateEdit } from "./gameObjectLootTemplate/GameObjectLootTemplateEdit";
import { GameObjectLootTemplateShow } from "./gameObjectLootTemplate/GameObjectLootTemplateShow";
import { MillingLootTemplateList } from "./millingLootTemplate/MillingLootTemplateList";
import { MillingLootTemplateCreate } from "./millingLootTemplate/MillingLootTemplateCreate";
import { MillingLootTemplateEdit } from "./millingLootTemplate/MillingLootTemplateEdit";
import { MillingLootTemplateShow } from "./millingLootTemplate/MillingLootTemplateShow";
import { MailLootTemplateList } from "./mailLootTemplate/MailLootTemplateList";
import { MailLootTemplateCreate } from "./mailLootTemplate/MailLootTemplateCreate";
import { MailLootTemplateEdit } from "./mailLootTemplate/MailLootTemplateEdit";
import { MailLootTemplateShow } from "./mailLootTemplate/MailLootTemplateShow";
import { GraveyardZoneList } from "./graveyardZone/GraveyardZoneList";
import { GraveyardZoneCreate } from "./graveyardZone/GraveyardZoneCreate";
import { GraveyardZoneEdit } from "./graveyardZone/GraveyardZoneEdit";
import { GraveyardZoneShow } from "./graveyardZone/GraveyardZoneShow";
import { ItemRandomBonusListTemplateList } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateList";
import { ItemRandomBonusListTemplateCreate } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateCreate";
import { ItemRandomBonusListTemplateEdit } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateEdit";
import { ItemRandomBonusListTemplateShow } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateShow";
import { JumpChargeParamsList } from "./jumpChargeParams/JumpChargeParamsList";
import { JumpChargeParamsCreate } from "./jumpChargeParams/JumpChargeParamsCreate";
import { JumpChargeParamsEdit } from "./jumpChargeParams/JumpChargeParamsEdit";
import { JumpChargeParamsShow } from "./jumpChargeParams/JumpChargeParamsShow";
import { ItemTemplateAddonList } from "./itemTemplateAddon/ItemTemplateAddonList";
import { ItemTemplateAddonCreate } from "./itemTemplateAddon/ItemTemplateAddonCreate";
import { ItemTemplateAddonEdit } from "./itemTemplateAddon/ItemTemplateAddonEdit";
import { ItemTemplateAddonShow } from "./itemTemplateAddon/ItemTemplateAddonShow";
import { LinkedRespawnList } from "./linkedRespawn/LinkedRespawnList";
import { LinkedRespawnCreate } from "./linkedRespawn/LinkedRespawnCreate";
import { LinkedRespawnEdit } from "./linkedRespawn/LinkedRespawnEdit";
import { LinkedRespawnShow } from "./linkedRespawn/LinkedRespawnShow";
import { ItemBehaviourList } from "./itemBehaviour/ItemBehaviourList";
import { ItemBehaviourCreate } from "./itemBehaviour/ItemBehaviourCreate";
import { ItemBehaviourEdit } from "./itemBehaviour/ItemBehaviourEdit";
import { ItemBehaviourShow } from "./itemBehaviour/ItemBehaviourShow";
import { InstanceTemplateList } from "./instanceTemplate/InstanceTemplateList";
import { InstanceTemplateCreate } from "./instanceTemplate/InstanceTemplateCreate";
import { InstanceTemplateEdit } from "./instanceTemplate/InstanceTemplateEdit";
import { InstanceTemplateShow } from "./instanceTemplate/InstanceTemplateShow";
import { ItemTemplateList } from "./itemTemplate/ItemTemplateList";
import { ItemTemplateCreate } from "./itemTemplate/ItemTemplateCreate";
import { ItemTemplateEdit } from "./itemTemplate/ItemTemplateEdit";
import { ItemTemplateShow } from "./itemTemplate/ItemTemplateShow";
import { MountDefinitionsList } from "./mountDefinitions/MountDefinitionsList";
import { MountDefinitionsCreate } from "./mountDefinitions/MountDefinitionsCreate";
import { MountDefinitionsEdit } from "./mountDefinitions/MountDefinitionsEdit";
import { MountDefinitionsShow } from "./mountDefinitions/MountDefinitionsShow";
import { InstanceSpawnGroupsList } from "./instanceSpawnGroups/InstanceSpawnGroupsList";
import { InstanceSpawnGroupsCreate } from "./instanceSpawnGroups/InstanceSpawnGroupsCreate";
import { InstanceSpawnGroupsEdit } from "./instanceSpawnGroups/InstanceSpawnGroupsEdit";
import { InstanceSpawnGroupsShow } from "./instanceSpawnGroups/InstanceSpawnGroupsShow";
import { CharacterSpellList } from "./characterSpell/CharacterSpellList";
import { CharacterSpellCreate } from "./characterSpell/CharacterSpellCreate";
import { CharacterSpellEdit } from "./characterSpell/CharacterSpellEdit";
import { CharacterSpellShow } from "./characterSpell/CharacterSpellShow";
import { CharacterDialogueList } from "./characterDialogue/CharacterDialogueList";
import { CharacterDialogueCreate } from "./characterDialogue/CharacterDialogueCreate";
import { CharacterDialogueEdit } from "./characterDialogue/CharacterDialogueEdit";
import { CharacterDialogueShow } from "./characterDialogue/CharacterDialogueShow";
import { CharacterList } from "./character/CharacterList";
import { CharacterCreate } from "./character/CharacterCreate";
import { CharacterEdit } from "./character/CharacterEdit";
import { CharacterShow } from "./character/CharacterShow";
import { ParagraphLocaleList } from "./paragraphLocale/ParagraphLocaleList";
import { ParagraphLocaleCreate } from "./paragraphLocale/ParagraphLocaleCreate";
import { ParagraphLocaleEdit } from "./paragraphLocale/ParagraphLocaleEdit";
import { ParagraphLocaleShow } from "./paragraphLocale/ParagraphLocaleShow";
import { PetNameGenerationList } from "./petNameGeneration/PetNameGenerationList";
import { PetNameGenerationCreate } from "./petNameGeneration/PetNameGenerationCreate";
import { PetNameGenerationEdit } from "./petNameGeneration/PetNameGenerationEdit";
import { PetNameGenerationShow } from "./petNameGeneration/PetNameGenerationShow";
import { ParagraphList } from "./paragraph/ParagraphList";
import { ParagraphCreate } from "./paragraph/ParagraphCreate";
import { ParagraphEdit } from "./paragraph/ParagraphEdit";
import { ParagraphShow } from "./paragraph/ParagraphShow";
import { PetLevelstatsList } from "./petLevelstats/PetLevelstatsList";
import { PetLevelstatsCreate } from "./petLevelstats/PetLevelstatsCreate";
import { PetLevelstatsEdit } from "./petLevelstats/PetLevelstatsEdit";
import { PetLevelstatsShow } from "./petLevelstats/PetLevelstatsShow";
import { PlayerFactionAchievementList } from "./playerFactionAchievement/PlayerFactionAchievementList";
import { PlayerFactionAchievementCreate } from "./playerFactionAchievement/PlayerFactionAchievementCreate";
import { PlayerFactionAchievementEdit } from "./playerFactionAchievement/PlayerFactionAchievementEdit";
import { PlayerFactionAchievementShow } from "./playerFactionAchievement/PlayerFactionAchievementShow";
import { CraftLevelStatList } from "./craftLevelStat/CraftLevelStatList";
import { CraftLevelStatCreate } from "./craftLevelStat/CraftLevelStatCreate";
import { CraftLevelStatEdit } from "./craftLevelStat/CraftLevelStatEdit";
import { CraftLevelStatShow } from "./craftLevelStat/CraftLevelStatShow";
import { PlayerFactionQuestList } from "./playerFactionQuest/PlayerFactionQuestList";
import { PlayerFactionQuestCreate } from "./playerFactionQuest/PlayerFactionQuestCreate";
import { PlayerFactionQuestEdit } from "./playerFactionQuest/PlayerFactionQuestEdit";
import { PlayerFactionQuestShow } from "./playerFactionQuest/PlayerFactionQuestShow";
import { PlayerRewardList } from "./playerReward/PlayerRewardList";
import { PlayerRewardCreate } from "./playerReward/PlayerRewardCreate";
import { PlayerRewardEdit } from "./playerReward/PlayerRewardEdit";
import { PlayerRewardShow } from "./playerReward/PlayerRewardShow";
import { PlayerFactionReputationList } from "./playerFactionReputation/PlayerFactionReputationList";
import { PlayerFactionReputationCreate } from "./playerFactionReputation/PlayerFactionReputationCreate";
import { PlayerFactionReputationEdit } from "./playerFactionReputation/PlayerFactionReputationEdit";
import { PlayerFactionReputationShow } from "./playerFactionReputation/PlayerFactionReputationShow";
import { PlayerFactionSpellList } from "./playerFactionSpell/PlayerFactionSpellList";
import { PlayerFactionSpellCreate } from "./playerFactionSpell/PlayerFactionSpellCreate";
import { PlayerFactionSpellEdit } from "./playerFactionSpell/PlayerFactionSpellEdit";
import { PlayerFactionSpellShow } from "./playerFactionSpell/PlayerFactionSpellShow";
import { ResponseList } from "./response/ResponseList";
import { ResponseCreate } from "./response/ResponseCreate";
import { ResponseEdit } from "./response/ResponseEdit";
import { ResponseShow } from "./response/ResponseShow";
import { GeneStatList } from "./geneStat/GeneStatList";
import { GeneStatCreate } from "./geneStat/GeneStatCreate";
import { GeneStatEdit } from "./geneStat/GeneStatEdit";
import { GeneStatShow } from "./geneStat/GeneStatShow";
import { PlayerFactionTitleList } from "./playerFactionTitle/PlayerFactionTitleList";
import { PlayerFactionTitleCreate } from "./playerFactionTitle/PlayerFactionTitleCreate";
import { PlayerFactionTitleEdit } from "./playerFactionTitle/PlayerFactionTitleEdit";
import { PlayerFactionTitleShow } from "./playerFactionTitle/PlayerFactionTitleShow";
import { ResponseLocaleList } from "./responseLocale/ResponseLocaleList";
import { ResponseLocaleCreate } from "./responseLocale/ResponseLocaleCreate";
import { ResponseLocaleEdit } from "./responseLocale/ResponseLocaleEdit";
import { ResponseLocaleShow } from "./responseLocale/ResponseLocaleShow";
import { ChoiceList } from "./choice/ChoiceList";
import { ChoiceCreate } from "./choice/ChoiceCreate";
import { ChoiceEdit } from "./choice/ChoiceEdit";
import { ChoiceShow } from "./choice/ChoiceShow";
import { PlayerXpForLevelList } from "./playerXpForLevel/PlayerXpForLevelList";
import { PlayerXpForLevelCreate } from "./playerXpForLevel/PlayerXpForLevelCreate";
import { PlayerXpForLevelEdit } from "./playerXpForLevel/PlayerXpForLevelEdit";
import { PlayerXpForLevelShow } from "./playerXpForLevel/PlayerXpForLevelShow";
import { PlayerRewardItemList } from "./playerRewardItem/PlayerRewardItemList";
import { PlayerRewardItemCreate } from "./playerRewardItem/PlayerRewardItemCreate";
import { PlayerRewardItemEdit } from "./playerRewardItem/PlayerRewardItemEdit";
import { PlayerRewardItemShow } from "./playerRewardItem/PlayerRewardItemShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { ChoiceLocaleList } from "./choiceLocale/ChoiceLocaleList";
import { ChoiceLocaleCreate } from "./choiceLocale/ChoiceLocaleCreate";
import { ChoiceLocaleEdit } from "./choiceLocale/ChoiceLocaleEdit";
import { ChoiceLocaleShow } from "./choiceLocale/ChoiceLocaleShow";
import { FactionList } from "./faction/FactionList";
import { FactionCreate } from "./faction/FactionCreate";
import { FactionEdit } from "./faction/FactionEdit";
import { FactionShow } from "./faction/FactionShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { CraftList } from "./craft/CraftList";
import { CraftCreate } from "./craft/CraftCreate";
import { CraftEdit } from "./craft/CraftEdit";
import { CraftShow } from "./craft/CraftShow";
import { PlayerCraftList } from "./playerCraft/PlayerCraftList";
import { PlayerCraftCreate } from "./playerCraft/PlayerCraftCreate";
import { PlayerCraftEdit } from "./playerCraft/PlayerCraftEdit";
import { PlayerCraftShow } from "./playerCraft/PlayerCraftShow";

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
        title={"World"}
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
          name="Achievement"
          list={AchievementList}
          edit={AchievementEdit}
          create={AchievementCreate}
          show={AchievementShow}
        />
        <Resource
          name="AchievementReward"
          list={AchievementRewardList}
          edit={AchievementRewardEdit}
          create={AchievementRewardCreate}
          show={AchievementRewardShow}
        />
        <Resource
          name="AchievementRewardLocale"
          list={AchievementRewardLocaleList}
          edit={AchievementRewardLocaleEdit}
          create={AchievementRewardLocaleCreate}
          show={AchievementRewardLocaleShow}
        />
        <Resource
          name="AchievementBehaviour"
          list={AchievementBehaviourList}
          edit={AchievementBehaviourEdit}
          create={AchievementBehaviourCreate}
          show={AchievementBehaviourShow}
        />
        <Resource
          name="GameObjectQuestItem"
          list={GameObjectQuestItemList}
          edit={GameObjectQuestItemEdit}
          create={GameObjectQuestItemCreate}
          show={GameObjectQuestItemShow}
        />
        <Resource
          name="ExplorationBasexp"
          list={ExplorationBasexpList}
          edit={ExplorationBasexpEdit}
          create={ExplorationBasexpCreate}
          show={ExplorationBasexpShow}
        />
        <Resource
          name="GameEvent"
          list={GameEventList}
          edit={GameEventEdit}
          create={GameEventCreate}
          show={GameEventShow}
        />
        <Resource
          name="GameObjectTemplateAddon"
          list={GameObjectTemplateAddonList}
          edit={GameObjectTemplateAddonEdit}
          create={GameObjectTemplateAddonCreate}
          show={GameObjectTemplateAddonShow}
        />
        <Resource
          name="GameObjectTemplate"
          list={GameObjectTemplateList}
          edit={GameObjectTemplateEdit}
          create={GameObjectTemplateCreate}
          show={GameObjectTemplateShow}
        />
        <Resource
          name="GameObjectAddon"
          list={GameObjectAddonList}
          edit={GameObjectAddonEdit}
          create={GameObjectAddonCreate}
          show={GameObjectAddonShow}
        />
        <Resource
          name="GameObject"
          list={GameObjectList}
          edit={GameObjectEdit}
          create={GameObjectCreate}
          show={GameObjectShow}
        />
        <Resource
          name="GameObjectQuestStarter"
          list={GameObjectQuestStarterList}
          edit={GameObjectQuestStarterEdit}
          create={GameObjectQuestStarterCreate}
          show={GameObjectQuestStarterShow}
        />
        <Resource
          name="LootTemplate"
          list={LootTemplateList}
          edit={LootTemplateEdit}
          create={LootTemplateCreate}
          show={LootTemplateShow}
        />
        <Resource
          name="GameObjectQuestEnder"
          list={GameObjectQuestEnderList}
          edit={GameObjectQuestEnderEdit}
          create={GameObjectQuestEnderCreate}
          show={GameObjectQuestEnderShow}
        />
        <Resource
          name="GameObjectTemplateLocale"
          list={GameObjectTemplateLocaleList}
          edit={GameObjectTemplateLocaleEdit}
          create={GameObjectTemplateLocaleCreate}
          show={GameObjectTemplateLocaleShow}
        />
        <Resource
          name="GameEventModelEquip"
          list={GameEventModelEquipList}
          edit={GameEventModelEquipEdit}
          create={GameEventModelEquipCreate}
          show={GameEventModelEquipShow}
        />
        <Resource
          name="GameEventGameObject"
          list={GameEventGameObjectList}
          edit={GameEventGameObjectEdit}
          create={GameEventGameObjectCreate}
          show={GameEventGameObjectShow}
        />
        <Resource
          name="GameEventQuest"
          list={GameEventQuestList}
          edit={GameEventQuestEdit}
          create={GameEventQuestCreate}
          show={GameEventQuestShow}
        />
        <Resource
          name="GameEventCharacter"
          list={GameEventCharacterList}
          edit={GameEventCharacterEdit}
          create={GameEventCharacterCreate}
          show={GameEventCharacterShow}
        />
        <Resource
          name="GameObjectOverrides"
          list={GameObjectOverridesList}
          edit={GameObjectOverridesEdit}
          create={GameObjectOverridesCreate}
          show={GameObjectOverridesShow}
        />
        <Resource
          name="GameEventCondition"
          list={GameEventConditionList}
          edit={GameEventConditionEdit}
          create={GameEventConditionCreate}
          show={GameEventConditionShow}
        />
        <Resource
          name="GameEventCreature"
          list={GameEventCreatureList}
          edit={GameEventCreatureEdit}
          create={GameEventCreatureCreate}
          show={GameEventCreatureShow}
        />
        <Resource
          name="GameObjectLootTemplate"
          list={GameObjectLootTemplateList}
          edit={GameObjectLootTemplateEdit}
          create={GameObjectLootTemplateCreate}
          show={GameObjectLootTemplateShow}
        />
        <Resource
          name="MillingLootTemplate"
          list={MillingLootTemplateList}
          edit={MillingLootTemplateEdit}
          create={MillingLootTemplateCreate}
          show={MillingLootTemplateShow}
        />
        <Resource
          name="MailLootTemplate"
          list={MailLootTemplateList}
          edit={MailLootTemplateEdit}
          create={MailLootTemplateCreate}
          show={MailLootTemplateShow}
        />
        <Resource
          name="GraveyardZone"
          list={GraveyardZoneList}
          edit={GraveyardZoneEdit}
          create={GraveyardZoneCreate}
          show={GraveyardZoneShow}
        />
        <Resource
          name="ItemRandomBonusListTemplate"
          list={ItemRandomBonusListTemplateList}
          edit={ItemRandomBonusListTemplateEdit}
          create={ItemRandomBonusListTemplateCreate}
          show={ItemRandomBonusListTemplateShow}
        />
        <Resource
          name="JumpChargeParams"
          list={JumpChargeParamsList}
          edit={JumpChargeParamsEdit}
          create={JumpChargeParamsCreate}
          show={JumpChargeParamsShow}
        />
        <Resource
          name="ItemTemplateAddon"
          list={ItemTemplateAddonList}
          edit={ItemTemplateAddonEdit}
          create={ItemTemplateAddonCreate}
          show={ItemTemplateAddonShow}
        />
        <Resource
          name="LinkedRespawn"
          list={LinkedRespawnList}
          edit={LinkedRespawnEdit}
          create={LinkedRespawnCreate}
          show={LinkedRespawnShow}
        />
        <Resource
          name="ItemBehaviour"
          list={ItemBehaviourList}
          edit={ItemBehaviourEdit}
          create={ItemBehaviourCreate}
          show={ItemBehaviourShow}
        />
        <Resource
          name="InstanceTemplate"
          list={InstanceTemplateList}
          edit={InstanceTemplateEdit}
          create={InstanceTemplateCreate}
          show={InstanceTemplateShow}
        />
        <Resource
          name="ItemTemplate"
          list={ItemTemplateList}
          edit={ItemTemplateEdit}
          create={ItemTemplateCreate}
          show={ItemTemplateShow}
        />
        <Resource
          name="MountDefinitions"
          list={MountDefinitionsList}
          edit={MountDefinitionsEdit}
          create={MountDefinitionsCreate}
          show={MountDefinitionsShow}
        />
        <Resource
          name="InstanceSpawnGroups"
          list={InstanceSpawnGroupsList}
          edit={InstanceSpawnGroupsEdit}
          create={InstanceSpawnGroupsCreate}
          show={InstanceSpawnGroupsShow}
        />
        <Resource
          name="CharacterSpell"
          list={CharacterSpellList}
          edit={CharacterSpellEdit}
          create={CharacterSpellCreate}
          show={CharacterSpellShow}
        />
        <Resource
          name="CharacterDialogue"
          list={CharacterDialogueList}
          edit={CharacterDialogueEdit}
          create={CharacterDialogueCreate}
          show={CharacterDialogueShow}
        />
        <Resource
          name="Character"
          list={CharacterList}
          edit={CharacterEdit}
          create={CharacterCreate}
          show={CharacterShow}
        />
        <Resource
          name="ParagraphLocale"
          list={ParagraphLocaleList}
          edit={ParagraphLocaleEdit}
          create={ParagraphLocaleCreate}
          show={ParagraphLocaleShow}
        />
        <Resource
          name="PetNameGeneration"
          list={PetNameGenerationList}
          edit={PetNameGenerationEdit}
          create={PetNameGenerationCreate}
          show={PetNameGenerationShow}
        />
        <Resource
          name="Paragraph"
          list={ParagraphList}
          edit={ParagraphEdit}
          create={ParagraphCreate}
          show={ParagraphShow}
        />
        <Resource
          name="PetLevelstats"
          list={PetLevelstatsList}
          edit={PetLevelstatsEdit}
          create={PetLevelstatsCreate}
          show={PetLevelstatsShow}
        />
        <Resource
          name="PlayerFactionAchievement"
          list={PlayerFactionAchievementList}
          edit={PlayerFactionAchievementEdit}
          create={PlayerFactionAchievementCreate}
          show={PlayerFactionAchievementShow}
        />
        <Resource
          name="CraftLevelStat"
          list={CraftLevelStatList}
          edit={CraftLevelStatEdit}
          create={CraftLevelStatCreate}
          show={CraftLevelStatShow}
        />
        <Resource
          name="PlayerFactionQuest"
          list={PlayerFactionQuestList}
          edit={PlayerFactionQuestEdit}
          create={PlayerFactionQuestCreate}
          show={PlayerFactionQuestShow}
        />
        <Resource
          name="PlayerReward"
          list={PlayerRewardList}
          edit={PlayerRewardEdit}
          create={PlayerRewardCreate}
          show={PlayerRewardShow}
        />
        <Resource
          name="PlayerFactionReputation"
          list={PlayerFactionReputationList}
          edit={PlayerFactionReputationEdit}
          create={PlayerFactionReputationCreate}
          show={PlayerFactionReputationShow}
        />
        <Resource
          name="PlayerFactionSpell"
          list={PlayerFactionSpellList}
          edit={PlayerFactionSpellEdit}
          create={PlayerFactionSpellCreate}
          show={PlayerFactionSpellShow}
        />
        <Resource
          name="Response"
          list={ResponseList}
          edit={ResponseEdit}
          create={ResponseCreate}
          show={ResponseShow}
        />
        <Resource
          name="GeneStat"
          list={GeneStatList}
          edit={GeneStatEdit}
          create={GeneStatCreate}
          show={GeneStatShow}
        />
        <Resource
          name="PlayerFactionTitle"
          list={PlayerFactionTitleList}
          edit={PlayerFactionTitleEdit}
          create={PlayerFactionTitleCreate}
          show={PlayerFactionTitleShow}
        />
        <Resource
          name="ResponseLocale"
          list={ResponseLocaleList}
          edit={ResponseLocaleEdit}
          create={ResponseLocaleCreate}
          show={ResponseLocaleShow}
        />
        <Resource
          name="Choice"
          list={ChoiceList}
          edit={ChoiceEdit}
          create={ChoiceCreate}
          show={ChoiceShow}
        />
        <Resource
          name="PlayerXpForLevel"
          list={PlayerXpForLevelList}
          edit={PlayerXpForLevelEdit}
          create={PlayerXpForLevelCreate}
          show={PlayerXpForLevelShow}
        />
        <Resource
          name="PlayerRewardItem"
          list={PlayerRewardItemList}
          edit={PlayerRewardItemEdit}
          create={PlayerRewardItemCreate}
          show={PlayerRewardItemShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="ChoiceLocale"
          list={ChoiceLocaleList}
          edit={ChoiceLocaleEdit}
          create={ChoiceLocaleCreate}
          show={ChoiceLocaleShow}
        />
        <Resource
          name="Faction"
          list={FactionList}
          edit={FactionEdit}
          create={FactionCreate}
          show={FactionShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Craft"
          list={CraftList}
          edit={CraftEdit}
          create={CraftCreate}
          show={CraftShow}
        />
        <Resource
          name="PlayerCraft"
          list={PlayerCraftList}
          edit={PlayerCraftEdit}
          create={PlayerCraftCreate}
          show={PlayerCraftShow}
        />
      </Admin>
    </div>
  );
};

export default App;
