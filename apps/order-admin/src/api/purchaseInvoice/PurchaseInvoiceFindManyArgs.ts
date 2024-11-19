import { PurchaseInvoiceWhereInput } from "./PurchaseInvoiceWhereInput";
import { PurchaseInvoiceOrderByInput } from "./PurchaseInvoiceOrderByInput";

export type PurchaseInvoiceFindManyArgs = {
  where?: PurchaseInvoiceWhereInput;
  orderBy?: Array<PurchaseInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
