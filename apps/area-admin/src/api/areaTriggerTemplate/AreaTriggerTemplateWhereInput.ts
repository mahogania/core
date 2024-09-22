import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AreaTriggerTemplateWhereInput = {
  flags?: IntNullableFilter;
  id?: StringFilter;
  isCustom?: BooleanNullableFilter;
  verifiedBuild?: IntNullableFilter;
};
