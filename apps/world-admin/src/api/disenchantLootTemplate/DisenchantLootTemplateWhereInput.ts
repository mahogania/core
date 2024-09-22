import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DisenchantLootTemplateWhereInput = {
  chance?: FloatNullableFilter;
  comment?: StringNullableFilter;
  entry?: IntNullableFilter;
  groupId?: IntNullableFilter;
  id?: StringFilter;
  item?: IntNullableFilter;
  lootMode?: IntNullableFilter;
  maxCount?: IntNullableFilter;
  minCount?: IntNullableFilter;
  questRequired?: BooleanNullableFilter;
  reference?: IntNullableFilter;
};
