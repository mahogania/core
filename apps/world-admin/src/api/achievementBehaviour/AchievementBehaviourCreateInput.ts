import { AchievementWhereUniqueInput } from "../achievement/AchievementWhereUniqueInput";

export type AchievementBehaviourCreateInput = {
  achievement?: AchievementWhereUniqueInput | null;
  behaviourName?: string | null;
};
