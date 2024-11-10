import { LootTemplate } from "../lootTemplate/LootTemplate";

export type MailLootTemplate = {
  createdAt: Date;
  id: string;
  lootTemplate?: LootTemplate | null;
  sender: string | null;
  updatedAt: Date;
};
