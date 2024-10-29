import { StringFilter } from "../../util/StringFilter";
import { LootTemplateWhereUniqueInput } from "../lootTemplate/LootTemplateWhereUniqueInput";

export type MillingLootTemplateWhereInput = {
  id?: StringFilter;
  lootTemplate?: LootTemplateWhereUniqueInput;
};
