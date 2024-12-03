import { StringFilter } from "../../util/StringFilter";
import { LootTemplateWhereUniqueInput } from "../lootTemplate/LootTemplateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MailLootTemplateWhereInput = {
  id?: StringFilter;
  lootTemplate?: LootTemplateWhereUniqueInput;
  sender?: StringNullableFilter;
};
