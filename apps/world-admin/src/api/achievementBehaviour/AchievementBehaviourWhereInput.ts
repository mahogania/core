import { AchievementWhereUniqueInput } from "../achievement/AchievementWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AchievementBehaviourWhereInput = {
  achievement?: AchievementWhereUniqueInput;
  behaviourName?: StringNullableFilter;
  id?: StringFilter;
};
