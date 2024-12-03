import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LootTemplateWhereUniqueInput } from "../lootTemplate/LootTemplateWhereUniqueInput";

export type GameObjectLootTemplateWhereInput = {
  chance?: FloatNullableFilter;
  comment?: StringNullableFilter;
  groupId?: BigIntNullableFilter;
  id?: BigIntFilter;
  itemId?: BigIntNullableFilter;
  lootMode?: IntNullableFilter;
  lootTemplate?: LootTemplateWhereUniqueInput;
  maxCount?: IntNullableFilter;
  minCount?: IntNullableFilter;
  questId?: BigIntNullableFilter;
};
