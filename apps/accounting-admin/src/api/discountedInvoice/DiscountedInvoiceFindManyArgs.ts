import { DiscountedInvoiceWhereInput } from "./DiscountedInvoiceWhereInput";
import { DiscountedInvoiceOrderByInput } from "./DiscountedInvoiceOrderByInput";

export type DiscountedInvoiceFindManyArgs = {
  where?: DiscountedInvoiceWhereInput;
  orderBy?: Array<DiscountedInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
