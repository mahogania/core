import { GameObjectLootTemplateUpdateManyWithoutLootTemplatesInput } from "./GameObjectLootTemplateUpdateManyWithoutLootTemplatesInput";
import { MailLootTemplateUpdateManyWithoutLootTemplatesInput } from "./MailLootTemplateUpdateManyWithoutLootTemplatesInput";
import { MillingLootTemplateUpdateManyWithoutLootTemplatesInput } from "./MillingLootTemplateUpdateManyWithoutLootTemplatesInput";

export type LootTemplateUpdateInput = {
  chance?: number | null;
  comment?: string | null;
  entry?: number | null;
  gameObjectLootTemplates?: GameObjectLootTemplateUpdateManyWithoutLootTemplatesInput;
  groupId?: number | null;
  item?: number | null;
  lootMode?: number | null;
  mailLootTemplates?: MailLootTemplateUpdateManyWithoutLootTemplatesInput;
  maxCount?: number | null;
  millingLootTemplates?: MillingLootTemplateUpdateManyWithoutLootTemplatesInput;
  minCount?: number | null;
  questRequired?: boolean | null;
  reference?: number | null;
};
