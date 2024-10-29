import { LootTemplateWhereUniqueInput } from "../lootTemplate/LootTemplateWhereUniqueInput";

export type MailLootTemplateCreateInput = {
  lootTemplate?: LootTemplateWhereUniqueInput | null;
  sender?: string | null;
};
