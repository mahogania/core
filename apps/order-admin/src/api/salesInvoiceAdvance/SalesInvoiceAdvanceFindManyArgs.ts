import { SalesInvoiceAdvanceWhereInput } from "./SalesInvoiceAdvanceWhereInput";
import { SalesInvoiceAdvanceOrderByInput } from "./SalesInvoiceAdvanceOrderByInput";

export type SalesInvoiceAdvanceFindManyArgs = {
  where?: SalesInvoiceAdvanceWhereInput;
  orderBy?: Array<SalesInvoiceAdvanceOrderByInput>;
  skip?: number;
  take?: number;
};
