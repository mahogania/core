import { ItemTemplateWhereInput } from "./ItemTemplateWhereInput";
import { ItemTemplateOrderByInput } from "./ItemTemplateOrderByInput";

export type ItemTemplateFindManyArgs = {
  where?: ItemTemplateWhereInput;
  orderBy?: Array<ItemTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
