import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CreatureQuestEnderWhereInput = {
  id?: StringFilter;
  quest?: IntNullableFilter;
  verifiedBuild?: IntNullableFilter;
};
