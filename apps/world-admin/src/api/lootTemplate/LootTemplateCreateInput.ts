import { GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput } from "./GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput";
import { MailLootTemplateCreateNestedManyWithoutLootTemplatesInput } from "./MailLootTemplateCreateNestedManyWithoutLootTemplatesInput";
import { MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput } from "./MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput";

export type LootTemplateCreateInput = {
  chance?: number | null;
  comment?: string | null;
  entry?: number | null;
  gameObjectLootTemplates?: GameObjectLootTemplateCreateNestedManyWithoutLootTemplatesInput;
  groupId?: number | null;
  item?: number | null;
  lootMode?: number | null;
  mailLootTemplates?: MailLootTemplateCreateNestedManyWithoutLootTemplatesInput;
  maxCount?: number | null;
  millingLootTemplates?: MillingLootTemplateCreateNestedManyWithoutLootTemplatesInput;
  minCount?: number | null;
  questRequired?: boolean | null;
  reference?: number | null;
};
