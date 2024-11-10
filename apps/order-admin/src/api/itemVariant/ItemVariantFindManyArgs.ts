import { ItemVariantWhereInput } from "./ItemVariantWhereInput";
import { ItemVariantOrderByInput } from "./ItemVariantOrderByInput";

export type ItemVariantFindManyArgs = {
  where?: ItemVariantWhereInput;
  orderBy?: Array<ItemVariantOrderByInput>;
  skip?: number;
  take?: number;
};
