import { LootTemplateWhereUniqueInput } from "../lootTemplate/LootTemplateWhereUniqueInput";

export type GameObjectLootTemplateUpdateInput = {
  chance?: number | null;
  comment?: string | null;
  groupId?: bigint | null;
  itemId?: bigint | null;
  lootMode?: number | null;
  lootTemplate?: LootTemplateWhereUniqueInput | null;
  maxCount?: number | null;
  minCount?: number | null;
  questId?: bigint | null;
};
