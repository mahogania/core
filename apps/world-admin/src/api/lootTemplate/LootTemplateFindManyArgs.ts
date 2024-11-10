import { LootTemplateWhereInput } from "./LootTemplateWhereInput";
import { LootTemplateOrderByInput } from "./LootTemplateOrderByInput";

export type LootTemplateFindManyArgs = {
  where?: LootTemplateWhereInput;
  orderBy?: Array<LootTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
