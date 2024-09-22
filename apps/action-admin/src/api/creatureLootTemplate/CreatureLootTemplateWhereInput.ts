import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreatureLootTemplateWhereInput = {
  chance?: FloatNullableFilter;
  comment?: StringNullableFilter;
  entry?: IntNullableFilter;
  groupId?: IntNullableFilter;
  id?: StringFilter;
  item?: IntNullableFilter;
  lootMode?: IntNullableFilter;
  maxCount?: IntNullableFilter;
  minCount?: IntNullableFilter;
  questRequired?: IntNullableFilter;
  reference?: IntNullableFilter;
};
