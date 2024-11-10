import { ItemTaxTemplateWhereInput } from "./ItemTaxTemplateWhereInput";
import { ItemTaxTemplateOrderByInput } from "./ItemTaxTemplateOrderByInput";

export type ItemTaxTemplateFindManyArgs = {
  where?: ItemTaxTemplateWhereInput;
  orderBy?: Array<ItemTaxTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
