import { PurchaseReceiptItemWhereInput } from "./PurchaseReceiptItemWhereInput";
import { PurchaseReceiptItemOrderByInput } from "./PurchaseReceiptItemOrderByInput";

export type PurchaseReceiptItemFindManyArgs = {
  where?: PurchaseReceiptItemWhereInput;
  orderBy?: Array<PurchaseReceiptItemOrderByInput>;
  skip?: number;
  take?: number;
};
