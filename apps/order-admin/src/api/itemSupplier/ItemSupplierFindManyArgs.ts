import { ItemSupplierWhereInput } from "./ItemSupplierWhereInput";
import { ItemSupplierOrderByInput } from "./ItemSupplierOrderByInput";

export type ItemSupplierFindManyArgs = {
  where?: ItemSupplierWhereInput;
  orderBy?: Array<ItemSupplierOrderByInput>;
  skip?: number;
  take?: number;
};
