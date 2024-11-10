import { ItemTaxWhereInput } from "./ItemTaxWhereInput";
import { ItemTaxOrderByInput } from "./ItemTaxOrderByInput";

export type ItemTaxFindManyArgs = {
  where?: ItemTaxWhereInput;
  orderBy?: Array<ItemTaxOrderByInput>;
  skip?: number;
  take?: number;
};
