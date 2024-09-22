import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AreaTriggerTemplateActionWhereInput = {
  actionParam?: IntNullableFilter;
  actionType?: IntNullableFilter;
  areaTriggerId?: IntNullableFilter;
  id?: StringFilter;
  isCustom?: BooleanNullableFilter;
  targetType?: IntNullableFilter;
};
