import { PlayerFactionAchievementWhereUniqueInput } from "../playerFactionAchievement/PlayerFactionAchievementWhereUniqueInput";
import { PlayerFactionQuestUpdateManyWithoutFactionsInput } from "./PlayerFactionQuestUpdateManyWithoutFactionsInput";
import { PlayerFactionReputationUpdateManyWithoutFactionsInput } from "./PlayerFactionReputationUpdateManyWithoutFactionsInput";
import { PlayerFactionSpellUpdateManyWithoutFactionsInput } from "./PlayerFactionSpellUpdateManyWithoutFactionsInput";
import { PlayerFactionTitleUpdateManyWithoutFactionsInput } from "./PlayerFactionTitleUpdateManyWithoutFactionsInput";

export type FactionUpdateInput = {
  playerFactionAchievements?: PlayerFactionAchievementWhereUniqueInput | null;
  playerFactionQuests?: PlayerFactionQuestUpdateManyWithoutFactionsInput;
  playerFactionReputations?: PlayerFactionReputationUpdateManyWithoutFactionsInput;
  playerFactionSpells?: PlayerFactionSpellUpdateManyWithoutFactionsInput;
  playerFactionTitles?: PlayerFactionTitleUpdateManyWithoutFactionsInput;
};
