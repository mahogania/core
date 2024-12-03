import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GameObjectLootTemplateListRelationFilter } from "../gameObjectLootTemplate/GameObjectLootTemplateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MailLootTemplateListRelationFilter } from "../mailLootTemplate/MailLootTemplateListRelationFilter";
import { MillingLootTemplateListRelationFilter } from "../millingLootTemplate/MillingLootTemplateListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type LootTemplateWhereInput = {
  chance?: FloatNullableFilter;
  comment?: StringNullableFilter;
  entry?: IntNullableFilter;
  gameObjectLootTemplates?: GameObjectLootTemplateListRelationFilter;
  groupId?: IntNullableFilter;
  id?: StringFilter;
  item?: IntNullableFilter;
  lootMode?: IntNullableFilter;
  mailLootTemplates?: MailLootTemplateListRelationFilter;
  maxCount?: IntNullableFilter;
  millingLootTemplates?: MillingLootTemplateListRelationFilter;
  minCount?: IntNullableFilter;
  questRequired?: BooleanNullableFilter;
  reference?: IntNullableFilter;
};
