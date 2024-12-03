import { AchievementWhereUniqueInput } from "../achievement/AchievementWhereUniqueInput";

export type AchievementBehaviourUpdateInput = {
  achievement?: AchievementWhereUniqueInput | null;
  behaviourName?: string | null;
};
