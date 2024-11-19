import { SalesInvoiceItemWhereInput } from "./SalesInvoiceItemWhereInput";
import { SalesInvoiceItemOrderByInput } from "./SalesInvoiceItemOrderByInput";

export type SalesInvoiceItemFindManyArgs = {
  where?: SalesInvoiceItemWhereInput;
  orderBy?: Array<SalesInvoiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
