import { PlayerFactionAchievementUpdateManyWithoutPlayersInput } from "./PlayerFactionAchievementUpdateManyWithoutPlayersInput";
import { AchievementUpdateManyWithoutPlayersInput } from "./AchievementUpdateManyWithoutPlayersInput";
import { GeneStatWhereUniqueInput } from "../geneStat/GeneStatWhereUniqueInput";
import { PlayerCraftUpdateManyWithoutPlayersInput } from "./PlayerCraftUpdateManyWithoutPlayersInput";
import { PlayerFactionQuestUpdateManyWithoutPlayersInput } from "./PlayerFactionQuestUpdateManyWithoutPlayersInput";
import { PlayerFactionReputationUpdateManyWithoutPlayersInput } from "./PlayerFactionReputationUpdateManyWithoutPlayersInput";
import { PlayerFactionSpellUpdateManyWithoutPlayersInput } from "./PlayerFactionSpellUpdateManyWithoutPlayersInput";
import { PlayerFactionTitleUpdateManyWithoutPlayersInput } from "./PlayerFactionTitleUpdateManyWithoutPlayersInput";
import { PlayerXpForLevelUpdateManyWithoutPlayersInput } from "./PlayerXpForLevelUpdateManyWithoutPlayersInput";
import { ResponseUpdateManyWithoutPlayersInput } from "./ResponseUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  PlayerFactionAchievements?: PlayerFactionAchievementUpdateManyWithoutPlayersInput;
  achievements?: AchievementUpdateManyWithoutPlayersInput;
  geneStats?: GeneStatWhereUniqueInput | null;
  playerCrafts?: PlayerCraftUpdateManyWithoutPlayersInput;
  playerFactionQuests?: PlayerFactionQuestUpdateManyWithoutPlayersInput;
  playerFactionReputations?: PlayerFactionReputationUpdateManyWithoutPlayersInput;
  playerFactionSpells?: PlayerFactionSpellUpdateManyWithoutPlayersInput;
  playerFactionTitles?: PlayerFactionTitleUpdateManyWithoutPlayersInput;
  playerXpForLevels?: PlayerXpForLevelUpdateManyWithoutPlayersInput;
  responses?: ResponseUpdateManyWithoutPlayersInput;
};
