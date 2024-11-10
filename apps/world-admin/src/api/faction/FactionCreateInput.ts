import { PlayerFactionAchievementWhereUniqueInput } from "../playerFactionAchievement/PlayerFactionAchievementWhereUniqueInput";
import { PlayerFactionQuestCreateNestedManyWithoutFactionsInput } from "./PlayerFactionQuestCreateNestedManyWithoutFactionsInput";
import { PlayerFactionReputationCreateNestedManyWithoutFactionsInput } from "./PlayerFactionReputationCreateNestedManyWithoutFactionsInput";
import { PlayerFactionSpellCreateNestedManyWithoutFactionsInput } from "./PlayerFactionSpellCreateNestedManyWithoutFactionsInput";
import { PlayerFactionTitleCreateNestedManyWithoutFactionsInput } from "./PlayerFactionTitleCreateNestedManyWithoutFactionsInput";

export type FactionCreateInput = {
  playerFactionAchievements?: PlayerFactionAchievementWhereUniqueInput | null;
  playerFactionQuests?: PlayerFactionQuestCreateNestedManyWithoutFactionsInput;
  playerFactionReputations?: PlayerFactionReputationCreateNestedManyWithoutFactionsInput;
  playerFactionSpells?: PlayerFactionSpellCreateNestedManyWithoutFactionsInput;
  playerFactionTitles?: PlayerFactionTitleCreateNestedManyWithoutFactionsInput;
};
