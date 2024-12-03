import { GameObjectLootTemplate } from "../gameObjectLootTemplate/GameObjectLootTemplate";
import { MailLootTemplate } from "../mailLootTemplate/MailLootTemplate";
import { MillingLootTemplate } from "../millingLootTemplate/MillingLootTemplate";

export type LootTemplate = {
  chance: number | null;
  comment: string | null;
  createdAt: Date;
  entry: number | null;
  gameObjectLootTemplates?: Array<GameObjectLootTemplate>;
  groupId: number | null;
  id: string;
  item: number | null;
  lootMode: number | null;
  mailLootTemplates?: Array<MailLootTemplate>;
  maxCount: number | null;
  millingLootTemplates?: Array<MillingLootTemplate>;
  minCount: number | null;
  questRequired: boolean | null;
  reference: number | null;
  updatedAt: Date;
};
