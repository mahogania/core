import { SalesInvoiceWhereInput } from "./SalesInvoiceWhereInput";
import { SalesInvoiceOrderByInput } from "./SalesInvoiceOrderByInput";

export type SalesInvoiceFindManyArgs = {
  where?: SalesInvoiceWhereInput;
  orderBy?: Array<SalesInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
