import { PurchaseInvoiceItemWhereInput } from "./PurchaseInvoiceItemWhereInput";
import { PurchaseInvoiceItemOrderByInput } from "./PurchaseInvoiceItemOrderByInput";

export type PurchaseInvoiceItemFindManyArgs = {
  where?: PurchaseInvoiceItemWhereInput;
  orderBy?: Array<PurchaseInvoiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
