import { PlayerFactionAchievementCreateNestedManyWithoutPlayersInput } from "./PlayerFactionAchievementCreateNestedManyWithoutPlayersInput";
import { AchievementCreateNestedManyWithoutPlayersInput } from "./AchievementCreateNestedManyWithoutPlayersInput";
import { GeneStatWhereUniqueInput } from "../geneStat/GeneStatWhereUniqueInput";
import { PlayerCraftCreateNestedManyWithoutPlayersInput } from "./PlayerCraftCreateNestedManyWithoutPlayersInput";
import { PlayerFactionQuestCreateNestedManyWithoutPlayersInput } from "./PlayerFactionQuestCreateNestedManyWithoutPlayersInput";
import { PlayerFactionReputationCreateNestedManyWithoutPlayersInput } from "./PlayerFactionReputationCreateNestedManyWithoutPlayersInput";
import { PlayerFactionSpellCreateNestedManyWithoutPlayersInput } from "./PlayerFactionSpellCreateNestedManyWithoutPlayersInput";
import { PlayerFactionTitleCreateNestedManyWithoutPlayersInput } from "./PlayerFactionTitleCreateNestedManyWithoutPlayersInput";
import { PlayerXpForLevelCreateNestedManyWithoutPlayersInput } from "./PlayerXpForLevelCreateNestedManyWithoutPlayersInput";
import { ResponseCreateNestedManyWithoutPlayersInput } from "./ResponseCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  PlayerFactionAchievements?: PlayerFactionAchievementCreateNestedManyWithoutPlayersInput;
  achievements?: AchievementCreateNestedManyWithoutPlayersInput;
  geneStats?: GeneStatWhereUniqueInput | null;
  playerCrafts?: PlayerCraftCreateNestedManyWithoutPlayersInput;
  playerFactionQuests?: PlayerFactionQuestCreateNestedManyWithoutPlayersInput;
  playerFactionReputations?: PlayerFactionReputationCreateNestedManyWithoutPlayersInput;
  playerFactionSpells?: PlayerFactionSpellCreateNestedManyWithoutPlayersInput;
  playerFactionTitles?: PlayerFactionTitleCreateNestedManyWithoutPlayersInput;
  playerXpForLevels?: PlayerXpForLevelCreateNestedManyWithoutPlayersInput;
  responses?: ResponseCreateNestedManyWithoutPlayersInput;
};
