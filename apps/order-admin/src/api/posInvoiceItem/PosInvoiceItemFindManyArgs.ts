import { PosInvoiceItemWhereInput } from "./PosInvoiceItemWhereInput";
import { PosInvoiceItemOrderByInput } from "./PosInvoiceItemOrderByInput";

export type PosInvoiceItemFindManyArgs = {
  where?: PosInvoiceItemWhereInput;
  orderBy?: Array<PosInvoiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
