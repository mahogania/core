import { PurchaseOrderItemWhereInput } from "./PurchaseOrderItemWhereInput";
import { PurchaseOrderItemOrderByInput } from "./PurchaseOrderItemOrderByInput";

export type PurchaseOrderItemFindManyArgs = {
  where?: PurchaseOrderItemWhereInput;
  orderBy?: Array<PurchaseOrderItemOrderByInput>;
  skip?: number;
  take?: number;
};
