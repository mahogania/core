import { StringFilter } from "../../util/StringFilter";
import { PlayerFactionAchievementWhereUniqueInput } from "../playerFactionAchievement/PlayerFactionAchievementWhereUniqueInput";
import { PlayerFactionQuestListRelationFilter } from "../playerFactionQuest/PlayerFactionQuestListRelationFilter";
import { PlayerFactionReputationListRelationFilter } from "../playerFactionReputation/PlayerFactionReputationListRelationFilter";
import { PlayerFactionSpellListRelationFilter } from "../playerFactionSpell/PlayerFactionSpellListRelationFilter";
import { PlayerFactionTitleListRelationFilter } from "../playerFactionTitle/PlayerFactionTitleListRelationFilter";

export type FactionWhereInput = {
  id?: StringFilter;
  playerFactionAchievements?: PlayerFactionAchievementWhereUniqueInput;
  playerFactionQuests?: PlayerFactionQuestListRelationFilter;
  playerFactionReputations?: PlayerFactionReputationListRelationFilter;
  playerFactionSpells?: PlayerFactionSpellListRelationFilter;
  playerFactionTitles?: PlayerFactionTitleListRelationFilter;
};
