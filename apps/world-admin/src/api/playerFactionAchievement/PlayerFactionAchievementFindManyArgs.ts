import { PlayerFactionAchievementWhereInput } from "./PlayerFactionAchievementWhereInput";
import { PlayerFactionAchievementOrderByInput } from "./PlayerFactionAchievementOrderByInput";

export type PlayerFactionAchievementFindManyArgs = {
  where?: PlayerFactionAchievementWhereInput;
  orderBy?: Array<PlayerFactionAchievementOrderByInput>;
  skip?: number;
  take?: number;
};
