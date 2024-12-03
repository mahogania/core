import { PosInvoiceWhereInput } from "./PosInvoiceWhereInput";
import { PosInvoiceOrderByInput } from "./PosInvoiceOrderByInput";

export type PosInvoiceFindManyArgs = {
  where?: PosInvoiceWhereInput;
  orderBy?: Array<PosInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
