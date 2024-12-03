import { PosInvoiceReferenceWhereInput } from "./PosInvoiceReferenceWhereInput";
import { PosInvoiceReferenceOrderByInput } from "./PosInvoiceReferenceOrderByInput";

export type PosInvoiceReferenceFindManyArgs = {
  where?: PosInvoiceReferenceWhereInput;
  orderBy?: Array<PosInvoiceReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
