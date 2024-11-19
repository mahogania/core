import { LootTemplate } from "../lootTemplate/LootTemplate";

export type MillingLootTemplate = {
  createdAt: Date;
  id: string;
  lootTemplate?: LootTemplate | null;
  updatedAt: Date;
};
