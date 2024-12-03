import { PlayerFactionAchievementListRelationFilter } from "../playerFactionAchievement/PlayerFactionAchievementListRelationFilter";
import { AchievementListRelationFilter } from "../achievement/AchievementListRelationFilter";
import { GeneStatWhereUniqueInput } from "../geneStat/GeneStatWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerCraftListRelationFilter } from "../playerCraft/PlayerCraftListRelationFilter";
import { PlayerFactionQuestListRelationFilter } from "../playerFactionQuest/PlayerFactionQuestListRelationFilter";
import { PlayerFactionReputationListRelationFilter } from "../playerFactionReputation/PlayerFactionReputationListRelationFilter";
import { PlayerFactionSpellListRelationFilter } from "../playerFactionSpell/PlayerFactionSpellListRelationFilter";
import { PlayerFactionTitleListRelationFilter } from "../playerFactionTitle/PlayerFactionTitleListRelationFilter";
import { PlayerXpForLevelListRelationFilter } from "../playerXpForLevel/PlayerXpForLevelListRelationFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";

export type PlayerWhereInput = {
  PlayerFactionAchievements?: PlayerFactionAchievementListRelationFilter;
  achievements?: AchievementListRelationFilter;
  geneStats?: GeneStatWhereUniqueInput;
  id?: StringFilter;
  playerCrafts?: PlayerCraftListRelationFilter;
  playerFactionQuests?: PlayerFactionQuestListRelationFilter;
  playerFactionReputations?: PlayerFactionReputationListRelationFilter;
  playerFactionSpells?: PlayerFactionSpellListRelationFilter;
  playerFactionTitles?: PlayerFactionTitleListRelationFilter;
  playerXpForLevels?: PlayerXpForLevelListRelationFilter;
  responses?: ResponseListRelationFilter;
};
