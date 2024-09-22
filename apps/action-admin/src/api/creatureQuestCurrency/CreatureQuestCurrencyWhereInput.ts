import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureQuestCurrencyWhereInput = {
  creatureId?: IntNullableFilter;
  currencyId?: IntNullableFilter;
  id?: StringFilter;
  verifiedBuild?: IntNullableFilter;
};
