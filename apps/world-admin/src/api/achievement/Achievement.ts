import { AchievementBehaviour } from "../achievementBehaviour/AchievementBehaviour";
import { AchievementReward } from "../achievementReward/AchievementReward";
import { Player } from "../player/Player";

export type Achievement = {
  achievementBehaviours?: Array<AchievementBehaviour>;
  achievementRewards?: AchievementReward;
  count: number | null;
  createdAt: Date;
  flags: number | null;
  id: string;
  map: number | null;
  player?: Player | null;
  points: number | null;
  refAchievement: number | null;
  requiredFaction: number | null;
  updatedAt: Date;
};
