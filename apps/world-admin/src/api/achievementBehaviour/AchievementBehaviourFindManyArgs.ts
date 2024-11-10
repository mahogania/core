import { AchievementBehaviourWhereInput } from "./AchievementBehaviourWhereInput";
import { AchievementBehaviourOrderByInput } from "./AchievementBehaviourOrderByInput";

export type AchievementBehaviourFindManyArgs = {
  where?: AchievementBehaviourWhereInput;
  orderBy?: Array<AchievementBehaviourOrderByInput>;
  skip?: number;
  take?: number;
};
