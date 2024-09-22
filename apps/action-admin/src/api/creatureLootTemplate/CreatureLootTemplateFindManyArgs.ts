import { CreatureLootTemplateWhereInput } from "./CreatureLootTemplateWhereInput";
import { CreatureLootTemplateOrderByInput } from "./CreatureLootTemplateOrderByInput";

export type CreatureLootTemplateFindManyArgs = {
  where?: CreatureLootTemplateWhereInput;
  orderBy?: Array<CreatureLootTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
