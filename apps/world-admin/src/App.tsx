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
import { AccessRequirementList } from "./accessRequirement/AccessRequirementList";
import { AccessRequirementCreate } from "./accessRequirement/AccessRequirementCreate";
import { AccessRequirementEdit } from "./accessRequirement/AccessRequirementEdit";
import { AccessRequirementShow } from "./accessRequirement/AccessRequirementShow";
import { AchievementRewardList } from "./achievementReward/AchievementRewardList";
import { AchievementRewardCreate } from "./achievementReward/AchievementRewardCreate";
import { AchievementRewardEdit } from "./achievementReward/AchievementRewardEdit";
import { AchievementRewardShow } from "./achievementReward/AchievementRewardShow";
import { AchievementRewardLocaleList } from "./achievementRewardLocale/AchievementRewardLocaleList";
import { AchievementRewardLocaleCreate } from "./achievementRewardLocale/AchievementRewardLocaleCreate";
import { AchievementRewardLocaleEdit } from "./achievementRewardLocale/AchievementRewardLocaleEdit";
import { AchievementRewardLocaleShow } from "./achievementRewardLocale/AchievementRewardLocaleShow";
import { AchievementScriptsList } from "./achievementScripts/AchievementScriptsList";
import { AchievementScriptsCreate } from "./achievementScripts/AchievementScriptsCreate";
import { AchievementScriptsEdit } from "./achievementScripts/AchievementScriptsEdit";
import { AchievementScriptsShow } from "./achievementScripts/AchievementScriptsShow";
import { DisenchantLootTemplateList } from "./disenchantLootTemplate/DisenchantLootTemplateList";
import { DisenchantLootTemplateCreate } from "./disenchantLootTemplate/DisenchantLootTemplateCreate";
import { DisenchantLootTemplateEdit } from "./disenchantLootTemplate/DisenchantLootTemplateEdit";
import { DisenchantLootTemplateShow } from "./disenchantLootTemplate/DisenchantLootTemplateShow";
import { EventScriptNamesList } from "./eventScriptNames/EventScriptNamesList";
import { EventScriptNamesCreate } from "./eventScriptNames/EventScriptNamesCreate";
import { EventScriptNamesEdit } from "./eventScriptNames/EventScriptNamesEdit";
import { EventScriptNamesShow } from "./eventScriptNames/EventScriptNamesShow";
import { GameEventList } from "./gameEvent/GameEventList";
import { GameEventCreate } from "./gameEvent/GameEventCreate";
import { GameEventEdit } from "./gameEvent/GameEventEdit";
import { GameEventShow } from "./gameEvent/GameEventShow";
import { GameWeatherList } from "./gameWeather/GameWeatherList";
import { GameWeatherCreate } from "./gameWeather/GameWeatherCreate";
import { GameWeatherEdit } from "./gameWeather/GameWeatherEdit";
import { GameWeatherShow } from "./gameWeather/GameWeatherShow";
import { GameObjectList } from "./gameObject/GameObjectList";
import { GameObjectCreate } from "./gameObject/GameObjectCreate";
import { GameObjectEdit } from "./gameObject/GameObjectEdit";
import { GameObjectShow } from "./gameObject/GameObjectShow";
import { ExplorationBasexpList } from "./explorationBasexp/ExplorationBasexpList";
import { ExplorationBasexpCreate } from "./explorationBasexp/ExplorationBasexpCreate";
import { ExplorationBasexpEdit } from "./explorationBasexp/ExplorationBasexpEdit";
import { ExplorationBasexpShow } from "./explorationBasexp/ExplorationBasexpShow";
import { EventScriptsList } from "./eventScripts/EventScriptsList";
import { EventScriptsCreate } from "./eventScripts/EventScriptsCreate";
import { EventScriptsEdit } from "./eventScripts/EventScriptsEdit";
import { EventScriptsShow } from "./eventScripts/EventScriptsShow";
import { GameObjectQuestItemList } from "./gameObjectQuestItem/GameObjectQuestItemList";
import { GameObjectQuestItemCreate } from "./gameObjectQuestItem/GameObjectQuestItemCreate";
import { GameObjectQuestItemEdit } from "./gameObjectQuestItem/GameObjectQuestItemEdit";
import { GameObjectQuestItemShow } from "./gameObjectQuestItem/GameObjectQuestItemShow";
import { GameObjectTemplateList } from "./gameObjectTemplate/GameObjectTemplateList";
import { GameObjectTemplateCreate } from "./gameObjectTemplate/GameObjectTemplateCreate";
import { GameObjectTemplateEdit } from "./gameObjectTemplate/GameObjectTemplateEdit";
import { GameObjectTemplateShow } from "./gameObjectTemplate/GameObjectTemplateShow";
import { GameEventQuestConditionList } from "./gameEventQuestCondition/GameEventQuestConditionList";
import { GameEventQuestConditionCreate } from "./gameEventQuestCondition/GameEventQuestConditionCreate";
import { GameEventQuestConditionEdit } from "./gameEventQuestCondition/GameEventQuestConditionEdit";
import { GameEventQuestConditionShow } from "./gameEventQuestCondition/GameEventQuestConditionShow";
import { GameObjectTemplateAddonList } from "./gameObjectTemplateAddon/GameObjectTemplateAddonList";
import { GameObjectTemplateAddonCreate } from "./gameObjectTemplateAddon/GameObjectTemplateAddonCreate";
import { GameObjectTemplateAddonEdit } from "./gameObjectTemplateAddon/GameObjectTemplateAddonEdit";
import { GameObjectTemplateAddonShow } from "./gameObjectTemplateAddon/GameObjectTemplateAddonShow";
import { GameObjectQuestStarterList } from "./gameObjectQuestStarter/GameObjectQuestStarterList";
import { GameObjectQuestStarterCreate } from "./gameObjectQuestStarter/GameObjectQuestStarterCreate";
import { GameObjectQuestStarterEdit } from "./gameObjectQuestStarter/GameObjectQuestStarterEdit";
import { GameObjectQuestStarterShow } from "./gameObjectQuestStarter/GameObjectQuestStarterShow";
import { GameEventSeasonalQuestRelationList } from "./gameEventSeasonalQuestRelation/GameEventSeasonalQuestRelationList";
import { GameEventSeasonalQuestRelationCreate } from "./gameEventSeasonalQuestRelation/GameEventSeasonalQuestRelationCreate";
import { GameEventSeasonalQuestRelationEdit } from "./gameEventSeasonalQuestRelation/GameEventSeasonalQuestRelationEdit";
import { GameEventSeasonalQuestRelationShow } from "./gameEventSeasonalQuestRelation/GameEventSeasonalQuestRelationShow";
import { FishingLootTemplateList } from "./fishingLootTemplate/FishingLootTemplateList";
import { FishingLootTemplateCreate } from "./fishingLootTemplate/FishingLootTemplateCreate";
import { FishingLootTemplateEdit } from "./fishingLootTemplate/FishingLootTemplateEdit";
import { FishingLootTemplateShow } from "./fishingLootTemplate/FishingLootTemplateShow";
import { GameObjectAddonList } from "./gameObjectAddon/GameObjectAddonList";
import { GameObjectAddonCreate } from "./gameObjectAddon/GameObjectAddonCreate";
import { GameObjectAddonEdit } from "./gameObjectAddon/GameObjectAddonEdit";
import { GameObjectAddonShow } from "./gameObjectAddon/GameObjectAddonShow";
import { GameTeleList } from "./gameTele/GameTeleList";
import { GameTeleCreate } from "./gameTele/GameTeleCreate";
import { GameTeleEdit } from "./gameTele/GameTeleEdit";
import { GameTeleShow } from "./gameTele/GameTeleShow";
import { GameEventCreatureList } from "./gameEventCreature/GameEventCreatureList";
import { GameEventCreatureCreate } from "./gameEventCreature/GameEventCreatureCreate";
import { GameEventCreatureEdit } from "./gameEventCreature/GameEventCreatureEdit";
import { GameEventCreatureShow } from "./gameEventCreature/GameEventCreatureShow";
import { GameEventGameObjectList } from "./gameEventGameObject/GameEventGameObjectList";
import { GameEventGameObjectCreate } from "./gameEventGameObject/GameEventGameObjectCreate";
import { GameEventGameObjectEdit } from "./gameEventGameObject/GameEventGameObjectEdit";
import { GameEventGameObjectShow } from "./gameEventGameObject/GameEventGameObjectShow";
import { GameEventPrerequisiteList } from "./gameEventPrerequisite/GameEventPrerequisiteList";
import { GameEventPrerequisiteCreate } from "./gameEventPrerequisite/GameEventPrerequisiteCreate";
import { GameEventPrerequisiteEdit } from "./gameEventPrerequisite/GameEventPrerequisiteEdit";
import { GameEventPrerequisiteShow } from "./gameEventPrerequisite/GameEventPrerequisiteShow";
import { GameEventConditionList } from "./gameEventCondition/GameEventConditionList";
import { GameEventConditionCreate } from "./gameEventCondition/GameEventConditionCreate";
import { GameEventConditionEdit } from "./gameEventCondition/GameEventConditionEdit";
import { GameEventConditionShow } from "./gameEventCondition/GameEventConditionShow";
import { GameObjectLootTemplateList } from "./gameObjectLootTemplate/GameObjectLootTemplateList";
import { GameObjectLootTemplateCreate } from "./gameObjectLootTemplate/GameObjectLootTemplateCreate";
import { GameObjectLootTemplateEdit } from "./gameObjectLootTemplate/GameObjectLootTemplateEdit";
import { GameObjectLootTemplateShow } from "./gameObjectLootTemplate/GameObjectLootTemplateShow";
import { GameEventPoolList } from "./gameEventPool/GameEventPoolList";
import { GameEventPoolCreate } from "./gameEventPool/GameEventPoolCreate";
import { GameEventPoolEdit } from "./gameEventPool/GameEventPoolEdit";
import { GameEventPoolShow } from "./gameEventPool/GameEventPoolShow";
import { GameEventCreatureQuestList } from "./gameEventCreatureQuest/GameEventCreatureQuestList";
import { GameEventCreatureQuestCreate } from "./gameEventCreatureQuest/GameEventCreatureQuestCreate";
import { GameEventCreatureQuestEdit } from "./gameEventCreatureQuest/GameEventCreatureQuestEdit";
import { GameEventCreatureQuestShow } from "./gameEventCreatureQuest/GameEventCreatureQuestShow";
import { GameEventNpcVendorList } from "./gameEventNpcVendor/GameEventNpcVendorList";
import { GameEventNpcVendorCreate } from "./gameEventNpcVendor/GameEventNpcVendorCreate";
import { GameEventNpcVendorEdit } from "./gameEventNpcVendor/GameEventNpcVendorEdit";
import { GameEventNpcVendorShow } from "./gameEventNpcVendor/GameEventNpcVendorShow";
import { GameEventArenaSeasonsList } from "./gameEventArenaSeasons/GameEventArenaSeasonsList";
import { GameEventArenaSeasonsCreate } from "./gameEventArenaSeasons/GameEventArenaSeasonsCreate";
import { GameEventArenaSeasonsEdit } from "./gameEventArenaSeasons/GameEventArenaSeasonsEdit";
import { GameEventArenaSeasonsShow } from "./gameEventArenaSeasons/GameEventArenaSeasonsShow";
import { GameObjectOverridesList } from "./gameObjectOverrides/GameObjectOverridesList";
import { GameObjectOverridesCreate } from "./gameObjectOverrides/GameObjectOverridesCreate";
import { GameObjectOverridesEdit } from "./gameObjectOverrides/GameObjectOverridesEdit";
import { GameObjectOverridesShow } from "./gameObjectOverrides/GameObjectOverridesShow";
import { GameEventNpcFlagList } from "./gameEventNpcFlag/GameEventNpcFlagList";
import { GameEventNpcFlagCreate } from "./gameEventNpcFlag/GameEventNpcFlagCreate";
import { GameEventNpcFlagEdit } from "./gameEventNpcFlag/GameEventNpcFlagEdit";
import { GameEventNpcFlagShow } from "./gameEventNpcFlag/GameEventNpcFlagShow";
import { GameObjectTemplateLocaleList } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleList";
import { GameObjectTemplateLocaleCreate } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleCreate";
import { GameObjectTemplateLocaleEdit } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleEdit";
import { GameObjectTemplateLocaleShow } from "./gameObjectTemplateLocale/GameObjectTemplateLocaleShow";
import { GameEventModelEquipList } from "./gameEventModelEquip/GameEventModelEquipList";
import { GameEventModelEquipCreate } from "./gameEventModelEquip/GameEventModelEquipCreate";
import { GameEventModelEquipEdit } from "./gameEventModelEquip/GameEventModelEquipEdit";
import { GameEventModelEquipShow } from "./gameEventModelEquip/GameEventModelEquipShow";
import { GameObjectQuestEnderList } from "./gameObjectQuestEnder/GameObjectQuestEnderList";
import { GameObjectQuestEnderCreate } from "./gameObjectQuestEnder/GameObjectQuestEnderCreate";
import { GameObjectQuestEnderEdit } from "./gameObjectQuestEnder/GameObjectQuestEnderEdit";
import { GameObjectQuestEnderShow } from "./gameObjectQuestEnder/GameObjectQuestEnderShow";
import { GameEventGameObjectQuestList } from "./gameEventGameObjectQuest/GameEventGameObjectQuestList";
import { GameEventGameObjectQuestCreate } from "./gameEventGameObjectQuest/GameEventGameObjectQuestCreate";
import { GameEventGameObjectQuestEdit } from "./gameEventGameObjectQuest/GameEventGameObjectQuestEdit";
import { GameEventGameObjectQuestShow } from "./gameEventGameObjectQuest/GameEventGameObjectQuestShow";
import { GossipMenuOptionLocaleList } from "./gossipMenuOptionLocale/GossipMenuOptionLocaleList";
import { GossipMenuOptionLocaleCreate } from "./gossipMenuOptionLocale/GossipMenuOptionLocaleCreate";
import { GossipMenuOptionLocaleEdit } from "./gossipMenuOptionLocale/GossipMenuOptionLocaleEdit";
import { GossipMenuOptionLocaleShow } from "./gossipMenuOptionLocale/GossipMenuOptionLocaleShow";
import { GossipMenuOptionList } from "./gossipMenuOption/GossipMenuOptionList";
import { GossipMenuOptionCreate } from "./gossipMenuOption/GossipMenuOptionCreate";
import { GossipMenuOptionEdit } from "./gossipMenuOption/GossipMenuOptionEdit";
import { GossipMenuOptionShow } from "./gossipMenuOption/GossipMenuOptionShow";
import { GuildRewardsList } from "./guildRewards/GuildRewardsList";
import { GuildRewardsCreate } from "./guildRewards/GuildRewardsCreate";
import { GuildRewardsEdit } from "./guildRewards/GuildRewardsEdit";
import { GuildRewardsShow } from "./guildRewards/GuildRewardsShow";
import { LfgDungeonRewardsList } from "./lfgDungeonRewards/LfgDungeonRewardsList";
import { LfgDungeonRewardsCreate } from "./lfgDungeonRewards/LfgDungeonRewardsCreate";
import { LfgDungeonRewardsEdit } from "./lfgDungeonRewards/LfgDungeonRewardsEdit";
import { LfgDungeonRewardsShow } from "./lfgDungeonRewards/LfgDungeonRewardsShow";
import { MailLootTemplateList } from "./mailLootTemplate/MailLootTemplateList";
import { MailLootTemplateCreate } from "./mailLootTemplate/MailLootTemplateCreate";
import { MailLootTemplateEdit } from "./mailLootTemplate/MailLootTemplateEdit";
import { MailLootTemplateShow } from "./mailLootTemplate/MailLootTemplateShow";
import { MillingLootTemplateList } from "./millingLootTemplate/MillingLootTemplateList";
import { MillingLootTemplateCreate } from "./millingLootTemplate/MillingLootTemplateCreate";
import { MillingLootTemplateEdit } from "./millingLootTemplate/MillingLootTemplateEdit";
import { MillingLootTemplateShow } from "./millingLootTemplate/MillingLootTemplateShow";
import { GraveyardZoneList } from "./graveyardZone/GraveyardZoneList";
import { GraveyardZoneCreate } from "./graveyardZone/GraveyardZoneCreate";
import { GraveyardZoneEdit } from "./graveyardZone/GraveyardZoneEdit";
import { GraveyardZoneShow } from "./graveyardZone/GraveyardZoneShow";
import { LfgDungeonTemplateList } from "./lfgDungeonTemplate/LfgDungeonTemplateList";
import { LfgDungeonTemplateCreate } from "./lfgDungeonTemplate/LfgDungeonTemplateCreate";
import { LfgDungeonTemplateEdit } from "./lfgDungeonTemplate/LfgDungeonTemplateEdit";
import { LfgDungeonTemplateShow } from "./lfgDungeonTemplate/LfgDungeonTemplateShow";
import { GuildRewardsReqAchievementsList } from "./guildRewardsReqAchievements/GuildRewardsReqAchievementsList";
import { GuildRewardsReqAchievementsCreate } from "./guildRewardsReqAchievements/GuildRewardsReqAchievementsCreate";
import { GuildRewardsReqAchievementsEdit } from "./guildRewardsReqAchievements/GuildRewardsReqAchievementsEdit";
import { GuildRewardsReqAchievementsShow } from "./guildRewardsReqAchievements/GuildRewardsReqAchievementsShow";
import { MailLevelRewardList } from "./mailLevelReward/MailLevelRewardList";
import { MailLevelRewardCreate } from "./mailLevelReward/MailLevelRewardCreate";
import { MailLevelRewardEdit } from "./mailLevelReward/MailLevelRewardEdit";
import { MailLevelRewardShow } from "./mailLevelReward/MailLevelRewardShow";
import { JumpChargeParamsList } from "./jumpChargeParams/JumpChargeParamsList";
import { JumpChargeParamsCreate } from "./jumpChargeParams/JumpChargeParamsCreate";
import { JumpChargeParamsEdit } from "./jumpChargeParams/JumpChargeParamsEdit";
import { JumpChargeParamsShow } from "./jumpChargeParams/JumpChargeParamsShow";
import { InstanceTemplateList } from "./instanceTemplate/InstanceTemplateList";
import { InstanceTemplateCreate } from "./instanceTemplate/InstanceTemplateCreate";
import { InstanceTemplateEdit } from "./instanceTemplate/InstanceTemplateEdit";
import { InstanceTemplateShow } from "./instanceTemplate/InstanceTemplateShow";
import { ItemTemplateAddonList } from "./itemTemplateAddon/ItemTemplateAddonList";
import { ItemTemplateAddonCreate } from "./itemTemplateAddon/ItemTemplateAddonCreate";
import { ItemTemplateAddonEdit } from "./itemTemplateAddon/ItemTemplateAddonEdit";
import { ItemTemplateAddonShow } from "./itemTemplateAddon/ItemTemplateAddonShow";
import { ItemRandomBonusListTemplateList } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateList";
import { ItemRandomBonusListTemplateCreate } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateCreate";
import { ItemRandomBonusListTemplateEdit } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateEdit";
import { ItemRandomBonusListTemplateShow } from "./itemRandomBonusListTemplate/ItemRandomBonusListTemplateShow";
import { ItemLootTemplateList } from "./itemLootTemplate/ItemLootTemplateList";
import { ItemLootTemplateCreate } from "./itemLootTemplate/ItemLootTemplateCreate";
import { ItemLootTemplateEdit } from "./itemLootTemplate/ItemLootTemplateEdit";
import { ItemLootTemplateShow } from "./itemLootTemplate/ItemLootTemplateShow";
import { LinkedRespawnList } from "./linkedRespawn/LinkedRespawnList";
import { LinkedRespawnCreate } from "./linkedRespawn/LinkedRespawnCreate";
import { LinkedRespawnEdit } from "./linkedRespawn/LinkedRespawnEdit";
import { LinkedRespawnShow } from "./linkedRespawn/LinkedRespawnShow";
import { MountDefinitionsList } from "./mountDefinitions/MountDefinitionsList";
import { MountDefinitionsCreate } from "./mountDefinitions/MountDefinitionsCreate";
import { MountDefinitionsEdit } from "./mountDefinitions/MountDefinitionsEdit";
import { MountDefinitionsShow } from "./mountDefinitions/MountDefinitionsShow";
import { InstanceSpawnGroupsList } from "./instanceSpawnGroups/InstanceSpawnGroupsList";
import { InstanceSpawnGroupsCreate } from "./instanceSpawnGroups/InstanceSpawnGroupsCreate";
import { InstanceSpawnGroupsEdit } from "./instanceSpawnGroups/InstanceSpawnGroupsEdit";
import { InstanceSpawnGroupsShow } from "./instanceSpawnGroups/InstanceSpawnGroupsShow";
import { ItemScriptNamesList } from "./itemScriptNames/ItemScriptNamesList";
import { ItemScriptNamesCreate } from "./itemScriptNames/ItemScriptNamesCreate";
import { ItemScriptNamesEdit } from "./itemScriptNames/ItemScriptNamesEdit";
import { ItemScriptNamesShow } from "./itemScriptNames/ItemScriptNamesShow";
import { NpcTextList } from "./npcText/NpcTextList";
import { NpcTextCreate } from "./npcText/NpcTextCreate";
import { NpcTextEdit } from "./npcText/NpcTextEdit";
import { NpcTextShow } from "./npcText/NpcTextShow";
import { NpcSpellclickSpellsList } from "./npcSpellclickSpells/NpcSpellclickSpellsList";
import { NpcSpellclickSpellsCreate } from "./npcSpellclickSpells/NpcSpellclickSpellsCreate";
import { NpcSpellclickSpellsEdit } from "./npcSpellclickSpells/NpcSpellclickSpellsEdit";
import { NpcSpellclickSpellsShow } from "./npcSpellclickSpells/NpcSpellclickSpellsShow";
import { PageTextLocaleList } from "./pageTextLocale/PageTextLocaleList";
import { PageTextLocaleCreate } from "./pageTextLocale/PageTextLocaleCreate";
import { PageTextLocaleEdit } from "./pageTextLocale/PageTextLocaleEdit";
import { PageTextLocaleShow } from "./pageTextLocale/PageTextLocaleShow";
import { NpcVendorList } from "./npcVendor/NpcVendorList";
import { NpcVendorCreate } from "./npcVendor/NpcVendorCreate";
import { NpcVendorEdit } from "./npcVendor/NpcVendorEdit";
import { NpcVendorShow } from "./npcVendor/NpcVendorShow";
import { PhaseNameList } from "./phaseName/PhaseNameList";
import { PhaseNameCreate } from "./phaseName/PhaseNameCreate";
import { PhaseNameEdit } from "./phaseName/PhaseNameEdit";
import { PhaseNameShow } from "./phaseName/PhaseNameShow";
import { OutdoorpvpTemplateList } from "./outdoorpvpTemplate/OutdoorpvpTemplateList";
import { OutdoorpvpTemplateCreate } from "./outdoorpvpTemplate/OutdoorpvpTemplateCreate";
import { OutdoorpvpTemplateEdit } from "./outdoorpvpTemplate/OutdoorpvpTemplateEdit";
import { OutdoorpvpTemplateShow } from "./outdoorpvpTemplate/OutdoorpvpTemplateShow";
import { PhaseAreaList } from "./phaseArea/PhaseAreaList";
import { PhaseAreaCreate } from "./phaseArea/PhaseAreaCreate";
import { PhaseAreaEdit } from "./phaseArea/PhaseAreaEdit";
import { PhaseAreaShow } from "./phaseArea/PhaseAreaShow";
import { PetNameGenerationList } from "./petNameGeneration/PetNameGenerationList";
import { PetNameGenerationCreate } from "./petNameGeneration/PetNameGenerationCreate";
import { PetNameGenerationEdit } from "./petNameGeneration/PetNameGenerationEdit";
import { PetNameGenerationShow } from "./petNameGeneration/PetNameGenerationShow";
import { PageTextList } from "./pageText/PageTextList";
import { PageTextCreate } from "./pageText/PageTextCreate";
import { PageTextEdit } from "./pageText/PageTextEdit";
import { PageTextShow } from "./pageText/PageTextShow";
import { PetLevelstatsList } from "./petLevelstats/PetLevelstatsList";
import { PetLevelstatsCreate } from "./petLevelstats/PetLevelstatsCreate";
import { PetLevelstatsEdit } from "./petLevelstats/PetLevelstatsEdit";
import { PetLevelstatsShow } from "./petLevelstats/PetLevelstatsShow";
import { PlayerClasslevelstatsList } from "./playerClasslevelstats/PlayerClasslevelstatsList";
import { PlayerClasslevelstatsCreate } from "./playerClasslevelstats/PlayerClasslevelstatsCreate";
import { PlayerClasslevelstatsEdit } from "./playerClasslevelstats/PlayerClasslevelstatsEdit";
import { PlayerClasslevelstatsShow } from "./playerClasslevelstats/PlayerClasslevelstatsShow";
import { PlayerFactionchangeAchievementList } from "./playerFactionchangeAchievement/PlayerFactionchangeAchievementList";
import { PlayerFactionchangeAchievementCreate } from "./playerFactionchangeAchievement/PlayerFactionchangeAchievementCreate";
import { PlayerFactionchangeAchievementEdit } from "./playerFactionchangeAchievement/PlayerFactionchangeAchievementEdit";
import { PlayerFactionchangeAchievementShow } from "./playerFactionchangeAchievement/PlayerFactionchangeAchievementShow";
import { PlayerchoiceResponseRewardList } from "./playerchoiceResponseReward/PlayerchoiceResponseRewardList";
import { PlayerchoiceResponseRewardCreate } from "./playerchoiceResponseReward/PlayerchoiceResponseRewardCreate";
import { PlayerchoiceResponseRewardEdit } from "./playerchoiceResponseReward/PlayerchoiceResponseRewardEdit";
import { PlayerchoiceResponseRewardShow } from "./playerchoiceResponseReward/PlayerchoiceResponseRewardShow";
import { PlayerFactionchangeQuestsList } from "./playerFactionchangeQuests/PlayerFactionchangeQuestsList";
import { PlayerFactionchangeQuestsCreate } from "./playerFactionchangeQuests/PlayerFactionchangeQuestsCreate";
import { PlayerFactionchangeQuestsEdit } from "./playerFactionchangeQuests/PlayerFactionchangeQuestsEdit";
import { PlayerFactionchangeQuestsShow } from "./playerFactionchangeQuests/PlayerFactionchangeQuestsShow";
import { PlayerFactionchangeSpellsList } from "./playerFactionchangeSpells/PlayerFactionchangeSpellsList";
import { PlayerFactionchangeSpellsCreate } from "./playerFactionchangeSpells/PlayerFactionchangeSpellsCreate";
import { PlayerFactionchangeSpellsEdit } from "./playerFactionchangeSpells/PlayerFactionchangeSpellsEdit";
import { PlayerFactionchangeSpellsShow } from "./playerFactionchangeSpells/PlayerFactionchangeSpellsShow";
import { PlayercreateinfoActionList } from "./playercreateinfoAction/PlayercreateinfoActionList";
import { PlayercreateinfoActionCreate } from "./playercreateinfoAction/PlayercreateinfoActionCreate";
import { PlayercreateinfoActionEdit } from "./playercreateinfoAction/PlayercreateinfoActionEdit";
import { PlayercreateinfoActionShow } from "./playercreateinfoAction/PlayercreateinfoActionShow";
import { PlayerFactionchangeReputationsList } from "./playerFactionchangeReputations/PlayerFactionchangeReputationsList";
import { PlayerFactionchangeReputationsCreate } from "./playerFactionchangeReputations/PlayerFactionchangeReputationsCreate";
import { PlayerFactionchangeReputationsEdit } from "./playerFactionchangeReputations/PlayerFactionchangeReputationsEdit";
import { PlayerFactionchangeReputationsShow } from "./playerFactionchangeReputations/PlayerFactionchangeReputationsShow";
import { PlayercreateinfoCastSpellList } from "./playercreateinfoCastSpell/PlayercreateinfoCastSpellList";
import { PlayercreateinfoCastSpellCreate } from "./playercreateinfoCastSpell/PlayercreateinfoCastSpellCreate";
import { PlayercreateinfoCastSpellEdit } from "./playercreateinfoCastSpell/PlayercreateinfoCastSpellEdit";
import { PlayercreateinfoCastSpellShow } from "./playercreateinfoCastSpell/PlayercreateinfoCastSpellShow";
import { PlayercreateinfoItemList } from "./playercreateinfoItem/PlayercreateinfoItemList";
import { PlayercreateinfoItemCreate } from "./playercreateinfoItem/PlayercreateinfoItemCreate";
import { PlayercreateinfoItemEdit } from "./playercreateinfoItem/PlayercreateinfoItemEdit";
import { PlayercreateinfoItemShow } from "./playercreateinfoItem/PlayercreateinfoItemShow";
import { PlayerXpForLevelList } from "./playerXpForLevel/PlayerXpForLevelList";
import { PlayerXpForLevelCreate } from "./playerXpForLevel/PlayerXpForLevelCreate";
import { PlayerXpForLevelEdit } from "./playerXpForLevel/PlayerXpForLevelEdit";
import { PlayerXpForLevelShow } from "./playerXpForLevel/PlayerXpForLevelShow";
import { PlayerchoiceList } from "./playerchoice/PlayerchoiceList";
import { PlayerchoiceCreate } from "./playerchoice/PlayerchoiceCreate";
import { PlayerchoiceEdit } from "./playerchoice/PlayerchoiceEdit";
import { PlayerchoiceShow } from "./playerchoice/PlayerchoiceShow";
import { PlayerchoiceResponseRewardItemChoiceList } from "./playerchoiceResponseRewardItemChoice/PlayerchoiceResponseRewardItemChoiceList";
import { PlayerchoiceResponseRewardItemChoiceCreate } from "./playerchoiceResponseRewardItemChoice/PlayerchoiceResponseRewardItemChoiceCreate";
import { PlayerchoiceResponseRewardItemChoiceEdit } from "./playerchoiceResponseRewardItemChoice/PlayerchoiceResponseRewardItemChoiceEdit";
import { PlayerchoiceResponseRewardItemChoiceShow } from "./playerchoiceResponseRewardItemChoice/PlayerchoiceResponseRewardItemChoiceShow";
import { PlayerchoiceLocaleList } from "./playerchoiceLocale/PlayerchoiceLocaleList";
import { PlayerchoiceLocaleCreate } from "./playerchoiceLocale/PlayerchoiceLocaleCreate";
import { PlayerchoiceLocaleEdit } from "./playerchoiceLocale/PlayerchoiceLocaleEdit";
import { PlayerchoiceLocaleShow } from "./playerchoiceLocale/PlayerchoiceLocaleShow";
import { PlayerchoiceResponseRewardFactionList } from "./playerchoiceResponseRewardFaction/PlayerchoiceResponseRewardFactionList";
import { PlayerchoiceResponseRewardFactionCreate } from "./playerchoiceResponseRewardFaction/PlayerchoiceResponseRewardFactionCreate";
import { PlayerchoiceResponseRewardFactionEdit } from "./playerchoiceResponseRewardFaction/PlayerchoiceResponseRewardFactionEdit";
import { PlayerchoiceResponseRewardFactionShow } from "./playerchoiceResponseRewardFaction/PlayerchoiceResponseRewardFactionShow";
import { PlayerchoiceResponseLocaleList } from "./playerchoiceResponseLocale/PlayerchoiceResponseLocaleList";
import { PlayerchoiceResponseLocaleCreate } from "./playerchoiceResponseLocale/PlayerchoiceResponseLocaleCreate";
import { PlayerchoiceResponseLocaleEdit } from "./playerchoiceResponseLocale/PlayerchoiceResponseLocaleEdit";
import { PlayerchoiceResponseLocaleShow } from "./playerchoiceResponseLocale/PlayerchoiceResponseLocaleShow";
import { PlayercreateinfoSpellCustomList } from "./playercreateinfoSpellCustom/PlayercreateinfoSpellCustomList";
import { PlayercreateinfoSpellCustomCreate } from "./playercreateinfoSpellCustom/PlayercreateinfoSpellCustomCreate";
import { PlayercreateinfoSpellCustomEdit } from "./playercreateinfoSpellCustom/PlayercreateinfoSpellCustomEdit";
import { PlayercreateinfoSpellCustomShow } from "./playercreateinfoSpellCustom/PlayercreateinfoSpellCustomShow";
import { PlayerchoiceResponseRewardItemList } from "./playerchoiceResponseRewardItem/PlayerchoiceResponseRewardItemList";
import { PlayerchoiceResponseRewardItemCreate } from "./playerchoiceResponseRewardItem/PlayerchoiceResponseRewardItemCreate";
import { PlayerchoiceResponseRewardItemEdit } from "./playerchoiceResponseRewardItem/PlayerchoiceResponseRewardItemEdit";
import { PlayerchoiceResponseRewardItemShow } from "./playerchoiceResponseRewardItem/PlayerchoiceResponseRewardItemShow";
import { PlayerRacestatsList } from "./playerRacestats/PlayerRacestatsList";
import { PlayerRacestatsCreate } from "./playerRacestats/PlayerRacestatsCreate";
import { PlayerRacestatsEdit } from "./playerRacestats/PlayerRacestatsEdit";
import { PlayerRacestatsShow } from "./playerRacestats/PlayerRacestatsShow";
import { PlayerFactionchangeTitlesList } from "./playerFactionchangeTitles/PlayerFactionchangeTitlesList";
import { PlayerFactionchangeTitlesCreate } from "./playerFactionchangeTitles/PlayerFactionchangeTitlesCreate";
import { PlayerFactionchangeTitlesEdit } from "./playerFactionchangeTitles/PlayerFactionchangeTitlesEdit";
import { PlayerFactionchangeTitlesShow } from "./playerFactionchangeTitles/PlayerFactionchangeTitlesShow";
import { PlayerchoiceResponseList } from "./playerchoiceResponse/PlayerchoiceResponseList";
import { PlayerchoiceResponseCreate } from "./playerchoiceResponse/PlayerchoiceResponseCreate";
import { PlayerchoiceResponseEdit } from "./playerchoiceResponse/PlayerchoiceResponseEdit";
import { PlayerchoiceResponseShow } from "./playerchoiceResponse/PlayerchoiceResponseShow";
import { PlayerchoiceResponseRewardCurrencyList } from "./playerchoiceResponseRewardCurrency/PlayerchoiceResponseRewardCurrencyList";
import { PlayerchoiceResponseRewardCurrencyCreate } from "./playerchoiceResponseRewardCurrency/PlayerchoiceResponseRewardCurrencyCreate";
import { PlayerchoiceResponseRewardCurrencyEdit } from "./playerchoiceResponseRewardCurrency/PlayerchoiceResponseRewardCurrencyEdit";
import { PlayerchoiceResponseRewardCurrencyShow } from "./playerchoiceResponseRewardCurrency/PlayerchoiceResponseRewardCurrencyShow";
import { PlayerchoiceResponseMawPowerList } from "./playerchoiceResponseMawPower/PlayerchoiceResponseMawPowerList";
import { PlayerchoiceResponseMawPowerCreate } from "./playerchoiceResponseMawPower/PlayerchoiceResponseMawPowerCreate";
import { PlayerchoiceResponseMawPowerEdit } from "./playerchoiceResponseMawPower/PlayerchoiceResponseMawPowerEdit";
import { PlayerchoiceResponseMawPowerShow } from "./playerchoiceResponseMawPower/PlayerchoiceResponseMawPowerShow";
import { PlayercreateinfoList } from "./playercreateinfo/PlayercreateinfoList";
import { PlayercreateinfoCreate } from "./playercreateinfo/PlayercreateinfoCreate";
import { PlayercreateinfoEdit } from "./playercreateinfo/PlayercreateinfoEdit";
import { PlayercreateinfoShow } from "./playercreateinfo/PlayercreateinfoShow";
import { ZoneList } from "./zone/ZoneList";
import { ZoneCreate } from "./zone/ZoneCreate";
import { ZoneEdit } from "./zone/ZoneEdit";
import { ZoneShow } from "./zone/ZoneShow";
import { MapList } from "./map/MapList";
import { MapCreate } from "./map/MapCreate";
import { MapEdit } from "./map/MapEdit";
import { MapShow } from "./map/MapShow";

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
          name="AccessRequirement"
          list={AccessRequirementList}
          edit={AccessRequirementEdit}
          create={AccessRequirementCreate}
          show={AccessRequirementShow}
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
          name="AchievementScripts"
          list={AchievementScriptsList}
          edit={AchievementScriptsEdit}
          create={AchievementScriptsCreate}
          show={AchievementScriptsShow}
        />
        <Resource
          name="DisenchantLootTemplate"
          list={DisenchantLootTemplateList}
          edit={DisenchantLootTemplateEdit}
          create={DisenchantLootTemplateCreate}
          show={DisenchantLootTemplateShow}
        />
        <Resource
          name="EventScriptNames"
          list={EventScriptNamesList}
          edit={EventScriptNamesEdit}
          create={EventScriptNamesCreate}
          show={EventScriptNamesShow}
        />
        <Resource
          name="GameEvent"
          list={GameEventList}
          edit={GameEventEdit}
          create={GameEventCreate}
          show={GameEventShow}
        />
        <Resource
          name="GameWeather"
          list={GameWeatherList}
          edit={GameWeatherEdit}
          create={GameWeatherCreate}
          show={GameWeatherShow}
        />
        <Resource
          name="GameObject"
          list={GameObjectList}
          edit={GameObjectEdit}
          create={GameObjectCreate}
          show={GameObjectShow}
        />
        <Resource
          name="ExplorationBasexp"
          list={ExplorationBasexpList}
          edit={ExplorationBasexpEdit}
          create={ExplorationBasexpCreate}
          show={ExplorationBasexpShow}
        />
        <Resource
          name="EventScripts"
          list={EventScriptsList}
          edit={EventScriptsEdit}
          create={EventScriptsCreate}
          show={EventScriptsShow}
        />
        <Resource
          name="GameObjectQuestItem"
          list={GameObjectQuestItemList}
          edit={GameObjectQuestItemEdit}
          create={GameObjectQuestItemCreate}
          show={GameObjectQuestItemShow}
        />
        <Resource
          name="GameObjectTemplate"
          list={GameObjectTemplateList}
          edit={GameObjectTemplateEdit}
          create={GameObjectTemplateCreate}
          show={GameObjectTemplateShow}
        />
        <Resource
          name="GameEventQuestCondition"
          list={GameEventQuestConditionList}
          edit={GameEventQuestConditionEdit}
          create={GameEventQuestConditionCreate}
          show={GameEventQuestConditionShow}
        />
        <Resource
          name="GameObjectTemplateAddon"
          list={GameObjectTemplateAddonList}
          edit={GameObjectTemplateAddonEdit}
          create={GameObjectTemplateAddonCreate}
          show={GameObjectTemplateAddonShow}
        />
        <Resource
          name="GameObjectQuestStarter"
          list={GameObjectQuestStarterList}
          edit={GameObjectQuestStarterEdit}
          create={GameObjectQuestStarterCreate}
          show={GameObjectQuestStarterShow}
        />
        <Resource
          name="GameEventSeasonalQuestRelation"
          list={GameEventSeasonalQuestRelationList}
          edit={GameEventSeasonalQuestRelationEdit}
          create={GameEventSeasonalQuestRelationCreate}
          show={GameEventSeasonalQuestRelationShow}
        />
        <Resource
          name="FishingLootTemplate"
          list={FishingLootTemplateList}
          edit={FishingLootTemplateEdit}
          create={FishingLootTemplateCreate}
          show={FishingLootTemplateShow}
        />
        <Resource
          name="GameObjectAddon"
          list={GameObjectAddonList}
          edit={GameObjectAddonEdit}
          create={GameObjectAddonCreate}
          show={GameObjectAddonShow}
        />
        <Resource
          name="GameTele"
          list={GameTeleList}
          edit={GameTeleEdit}
          create={GameTeleCreate}
          show={GameTeleShow}
        />
        <Resource
          name="GameEventCreature"
          list={GameEventCreatureList}
          edit={GameEventCreatureEdit}
          create={GameEventCreatureCreate}
          show={GameEventCreatureShow}
        />
        <Resource
          name="GameEventGameObject"
          list={GameEventGameObjectList}
          edit={GameEventGameObjectEdit}
          create={GameEventGameObjectCreate}
          show={GameEventGameObjectShow}
        />
        <Resource
          name="GameEventPrerequisite"
          list={GameEventPrerequisiteList}
          edit={GameEventPrerequisiteEdit}
          create={GameEventPrerequisiteCreate}
          show={GameEventPrerequisiteShow}
        />
        <Resource
          name="GameEventCondition"
          list={GameEventConditionList}
          edit={GameEventConditionEdit}
          create={GameEventConditionCreate}
          show={GameEventConditionShow}
        />
        <Resource
          name="GameObjectLootTemplate"
          list={GameObjectLootTemplateList}
          edit={GameObjectLootTemplateEdit}
          create={GameObjectLootTemplateCreate}
          show={GameObjectLootTemplateShow}
        />
        <Resource
          name="GameEventPool"
          list={GameEventPoolList}
          edit={GameEventPoolEdit}
          create={GameEventPoolCreate}
          show={GameEventPoolShow}
        />
        <Resource
          name="GameEventCreatureQuest"
          list={GameEventCreatureQuestList}
          edit={GameEventCreatureQuestEdit}
          create={GameEventCreatureQuestCreate}
          show={GameEventCreatureQuestShow}
        />
        <Resource
          name="GameEventNpcVendor"
          list={GameEventNpcVendorList}
          edit={GameEventNpcVendorEdit}
          create={GameEventNpcVendorCreate}
          show={GameEventNpcVendorShow}
        />
        <Resource
          name="GameEventArenaSeasons"
          list={GameEventArenaSeasonsList}
          edit={GameEventArenaSeasonsEdit}
          create={GameEventArenaSeasonsCreate}
          show={GameEventArenaSeasonsShow}
        />
        <Resource
          name="GameObjectOverrides"
          list={GameObjectOverridesList}
          edit={GameObjectOverridesEdit}
          create={GameObjectOverridesCreate}
          show={GameObjectOverridesShow}
        />
        <Resource
          name="GameEventNpcFlag"
          list={GameEventNpcFlagList}
          edit={GameEventNpcFlagEdit}
          create={GameEventNpcFlagCreate}
          show={GameEventNpcFlagShow}
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
          name="GameObjectQuestEnder"
          list={GameObjectQuestEnderList}
          edit={GameObjectQuestEnderEdit}
          create={GameObjectQuestEnderCreate}
          show={GameObjectQuestEnderShow}
        />
        <Resource
          name="GameEventGameObjectQuest"
          list={GameEventGameObjectQuestList}
          edit={GameEventGameObjectQuestEdit}
          create={GameEventGameObjectQuestCreate}
          show={GameEventGameObjectQuestShow}
        />
        <Resource
          name="GossipMenuOptionLocale"
          list={GossipMenuOptionLocaleList}
          edit={GossipMenuOptionLocaleEdit}
          create={GossipMenuOptionLocaleCreate}
          show={GossipMenuOptionLocaleShow}
        />
        <Resource
          name="GossipMenuOption"
          list={GossipMenuOptionList}
          edit={GossipMenuOptionEdit}
          create={GossipMenuOptionCreate}
          show={GossipMenuOptionShow}
        />
        <Resource
          name="GuildRewards"
          list={GuildRewardsList}
          edit={GuildRewardsEdit}
          create={GuildRewardsCreate}
          show={GuildRewardsShow}
        />
        <Resource
          name="LfgDungeonRewards"
          list={LfgDungeonRewardsList}
          edit={LfgDungeonRewardsEdit}
          create={LfgDungeonRewardsCreate}
          show={LfgDungeonRewardsShow}
        />
        <Resource
          name="MailLootTemplate"
          list={MailLootTemplateList}
          edit={MailLootTemplateEdit}
          create={MailLootTemplateCreate}
          show={MailLootTemplateShow}
        />
        <Resource
          name="MillingLootTemplate"
          list={MillingLootTemplateList}
          edit={MillingLootTemplateEdit}
          create={MillingLootTemplateCreate}
          show={MillingLootTemplateShow}
        />
        <Resource
          name="GraveyardZone"
          list={GraveyardZoneList}
          edit={GraveyardZoneEdit}
          create={GraveyardZoneCreate}
          show={GraveyardZoneShow}
        />
        <Resource
          name="LfgDungeonTemplate"
          list={LfgDungeonTemplateList}
          edit={LfgDungeonTemplateEdit}
          create={LfgDungeonTemplateCreate}
          show={LfgDungeonTemplateShow}
        />
        <Resource
          name="GuildRewardsReqAchievements"
          list={GuildRewardsReqAchievementsList}
          edit={GuildRewardsReqAchievementsEdit}
          create={GuildRewardsReqAchievementsCreate}
          show={GuildRewardsReqAchievementsShow}
        />
        <Resource
          name="MailLevelReward"
          list={MailLevelRewardList}
          edit={MailLevelRewardEdit}
          create={MailLevelRewardCreate}
          show={MailLevelRewardShow}
        />
        <Resource
          name="JumpChargeParams"
          list={JumpChargeParamsList}
          edit={JumpChargeParamsEdit}
          create={JumpChargeParamsCreate}
          show={JumpChargeParamsShow}
        />
        <Resource
          name="InstanceTemplate"
          list={InstanceTemplateList}
          edit={InstanceTemplateEdit}
          create={InstanceTemplateCreate}
          show={InstanceTemplateShow}
        />
        <Resource
          name="ItemTemplateAddon"
          list={ItemTemplateAddonList}
          edit={ItemTemplateAddonEdit}
          create={ItemTemplateAddonCreate}
          show={ItemTemplateAddonShow}
        />
        <Resource
          name="ItemRandomBonusListTemplate"
          list={ItemRandomBonusListTemplateList}
          edit={ItemRandomBonusListTemplateEdit}
          create={ItemRandomBonusListTemplateCreate}
          show={ItemRandomBonusListTemplateShow}
        />
        <Resource
          name="ItemLootTemplate"
          list={ItemLootTemplateList}
          edit={ItemLootTemplateEdit}
          create={ItemLootTemplateCreate}
          show={ItemLootTemplateShow}
        />
        <Resource
          name="LinkedRespawn"
          list={LinkedRespawnList}
          edit={LinkedRespawnEdit}
          create={LinkedRespawnCreate}
          show={LinkedRespawnShow}
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
          name="ItemScriptNames"
          list={ItemScriptNamesList}
          edit={ItemScriptNamesEdit}
          create={ItemScriptNamesCreate}
          show={ItemScriptNamesShow}
        />
        <Resource
          name="NpcText"
          list={NpcTextList}
          edit={NpcTextEdit}
          create={NpcTextCreate}
          show={NpcTextShow}
        />
        <Resource
          name="NpcSpellclickSpells"
          list={NpcSpellclickSpellsList}
          edit={NpcSpellclickSpellsEdit}
          create={NpcSpellclickSpellsCreate}
          show={NpcSpellclickSpellsShow}
        />
        <Resource
          name="PageTextLocale"
          list={PageTextLocaleList}
          edit={PageTextLocaleEdit}
          create={PageTextLocaleCreate}
          show={PageTextLocaleShow}
        />
        <Resource
          name="NpcVendor"
          list={NpcVendorList}
          edit={NpcVendorEdit}
          create={NpcVendorCreate}
          show={NpcVendorShow}
        />
        <Resource
          name="PhaseName"
          list={PhaseNameList}
          edit={PhaseNameEdit}
          create={PhaseNameCreate}
          show={PhaseNameShow}
        />
        <Resource
          name="OutdoorpvpTemplate"
          list={OutdoorpvpTemplateList}
          edit={OutdoorpvpTemplateEdit}
          create={OutdoorpvpTemplateCreate}
          show={OutdoorpvpTemplateShow}
        />
        <Resource
          name="PhaseArea"
          list={PhaseAreaList}
          edit={PhaseAreaEdit}
          create={PhaseAreaCreate}
          show={PhaseAreaShow}
        />
        <Resource
          name="PetNameGeneration"
          list={PetNameGenerationList}
          edit={PetNameGenerationEdit}
          create={PetNameGenerationCreate}
          show={PetNameGenerationShow}
        />
        <Resource
          name="PageText"
          list={PageTextList}
          edit={PageTextEdit}
          create={PageTextCreate}
          show={PageTextShow}
        />
        <Resource
          name="PetLevelstats"
          list={PetLevelstatsList}
          edit={PetLevelstatsEdit}
          create={PetLevelstatsCreate}
          show={PetLevelstatsShow}
        />
        <Resource
          name="PlayerClasslevelstats"
          list={PlayerClasslevelstatsList}
          edit={PlayerClasslevelstatsEdit}
          create={PlayerClasslevelstatsCreate}
          show={PlayerClasslevelstatsShow}
        />
        <Resource
          name="PlayerFactionchangeAchievement"
          list={PlayerFactionchangeAchievementList}
          edit={PlayerFactionchangeAchievementEdit}
          create={PlayerFactionchangeAchievementCreate}
          show={PlayerFactionchangeAchievementShow}
        />
        <Resource
          name="PlayerchoiceResponseReward"
          list={PlayerchoiceResponseRewardList}
          edit={PlayerchoiceResponseRewardEdit}
          create={PlayerchoiceResponseRewardCreate}
          show={PlayerchoiceResponseRewardShow}
        />
        <Resource
          name="PlayerFactionchangeQuests"
          list={PlayerFactionchangeQuestsList}
          edit={PlayerFactionchangeQuestsEdit}
          create={PlayerFactionchangeQuestsCreate}
          show={PlayerFactionchangeQuestsShow}
        />
        <Resource
          name="PlayerFactionchangeSpells"
          list={PlayerFactionchangeSpellsList}
          edit={PlayerFactionchangeSpellsEdit}
          create={PlayerFactionchangeSpellsCreate}
          show={PlayerFactionchangeSpellsShow}
        />
        <Resource
          name="PlayercreateinfoAction"
          list={PlayercreateinfoActionList}
          edit={PlayercreateinfoActionEdit}
          create={PlayercreateinfoActionCreate}
          show={PlayercreateinfoActionShow}
        />
        <Resource
          name="PlayerFactionchangeReputations"
          list={PlayerFactionchangeReputationsList}
          edit={PlayerFactionchangeReputationsEdit}
          create={PlayerFactionchangeReputationsCreate}
          show={PlayerFactionchangeReputationsShow}
        />
        <Resource
          name="PlayercreateinfoCastSpell"
          list={PlayercreateinfoCastSpellList}
          edit={PlayercreateinfoCastSpellEdit}
          create={PlayercreateinfoCastSpellCreate}
          show={PlayercreateinfoCastSpellShow}
        />
        <Resource
          name="PlayercreateinfoItem"
          list={PlayercreateinfoItemList}
          edit={PlayercreateinfoItemEdit}
          create={PlayercreateinfoItemCreate}
          show={PlayercreateinfoItemShow}
        />
        <Resource
          name="PlayerXpForLevel"
          list={PlayerXpForLevelList}
          edit={PlayerXpForLevelEdit}
          create={PlayerXpForLevelCreate}
          show={PlayerXpForLevelShow}
        />
        <Resource
          name="Playerchoice"
          list={PlayerchoiceList}
          edit={PlayerchoiceEdit}
          create={PlayerchoiceCreate}
          show={PlayerchoiceShow}
        />
        <Resource
          name="PlayerchoiceResponseRewardItemChoice"
          list={PlayerchoiceResponseRewardItemChoiceList}
          edit={PlayerchoiceResponseRewardItemChoiceEdit}
          create={PlayerchoiceResponseRewardItemChoiceCreate}
          show={PlayerchoiceResponseRewardItemChoiceShow}
        />
        <Resource
          name="PlayerchoiceLocale"
          list={PlayerchoiceLocaleList}
          edit={PlayerchoiceLocaleEdit}
          create={PlayerchoiceLocaleCreate}
          show={PlayerchoiceLocaleShow}
        />
        <Resource
          name="PlayerchoiceResponseRewardFaction"
          list={PlayerchoiceResponseRewardFactionList}
          edit={PlayerchoiceResponseRewardFactionEdit}
          create={PlayerchoiceResponseRewardFactionCreate}
          show={PlayerchoiceResponseRewardFactionShow}
        />
        <Resource
          name="PlayerchoiceResponseLocale"
          list={PlayerchoiceResponseLocaleList}
          edit={PlayerchoiceResponseLocaleEdit}
          create={PlayerchoiceResponseLocaleCreate}
          show={PlayerchoiceResponseLocaleShow}
        />
        <Resource
          name="PlayercreateinfoSpellCustom"
          list={PlayercreateinfoSpellCustomList}
          edit={PlayercreateinfoSpellCustomEdit}
          create={PlayercreateinfoSpellCustomCreate}
          show={PlayercreateinfoSpellCustomShow}
        />
        <Resource
          name="PlayerchoiceResponseRewardItem"
          list={PlayerchoiceResponseRewardItemList}
          edit={PlayerchoiceResponseRewardItemEdit}
          create={PlayerchoiceResponseRewardItemCreate}
          show={PlayerchoiceResponseRewardItemShow}
        />
        <Resource
          name="PlayerRacestats"
          list={PlayerRacestatsList}
          edit={PlayerRacestatsEdit}
          create={PlayerRacestatsCreate}
          show={PlayerRacestatsShow}
        />
        <Resource
          name="PlayerFactionchangeTitles"
          list={PlayerFactionchangeTitlesList}
          edit={PlayerFactionchangeTitlesEdit}
          create={PlayerFactionchangeTitlesCreate}
          show={PlayerFactionchangeTitlesShow}
        />
        <Resource
          name="PlayerchoiceResponse"
          list={PlayerchoiceResponseList}
          edit={PlayerchoiceResponseEdit}
          create={PlayerchoiceResponseCreate}
          show={PlayerchoiceResponseShow}
        />
        <Resource
          name="PlayerchoiceResponseRewardCurrency"
          list={PlayerchoiceResponseRewardCurrencyList}
          edit={PlayerchoiceResponseRewardCurrencyEdit}
          create={PlayerchoiceResponseRewardCurrencyCreate}
          show={PlayerchoiceResponseRewardCurrencyShow}
        />
        <Resource
          name="PlayerchoiceResponseMawPower"
          list={PlayerchoiceResponseMawPowerList}
          edit={PlayerchoiceResponseMawPowerEdit}
          create={PlayerchoiceResponseMawPowerCreate}
          show={PlayerchoiceResponseMawPowerShow}
        />
        <Resource
          name="Playercreateinfo"
          list={PlayercreateinfoList}
          edit={PlayercreateinfoEdit}
          create={PlayercreateinfoCreate}
          show={PlayercreateinfoShow}
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
      </Admin>
    </div>
  );
};

export default App;
