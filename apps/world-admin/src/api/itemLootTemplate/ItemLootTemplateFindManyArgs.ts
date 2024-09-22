import { ItemLootTemplateWhereInput } from "./ItemLootTemplateWhereInput";
import { ItemLootTemplateOrderByInput } from "./ItemLootTemplateOrderByInput";

export type ItemLootTemplateFindManyArgs = {
  where?: ItemLootTemplateWhereInput;
  orderBy?: Array<ItemLootTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
