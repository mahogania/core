import { LootTemplate } from "../lootTemplate/LootTemplate";

export type GameObjectLootTemplate = {
  chance: number | null;
  comment: string | null;
  createdAt: Date;
  groupId: bigint | null;
  id: bigint;
  itemId: bigint | null;
  lootMode: number | null;
  lootTemplate?: LootTemplate | null;
  maxCount: number | null;
  minCount: number | null;
  questId: bigint | null;
  updatedAt: Date;
};
