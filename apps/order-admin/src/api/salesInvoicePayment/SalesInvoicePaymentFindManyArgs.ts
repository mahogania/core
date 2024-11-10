import { SalesInvoicePaymentWhereInput } from "./SalesInvoicePaymentWhereInput";
import { SalesInvoicePaymentOrderByInput } from "./SalesInvoicePaymentOrderByInput";

export type SalesInvoicePaymentFindManyArgs = {
  where?: SalesInvoicePaymentWhereInput;
  orderBy?: Array<SalesInvoicePaymentOrderByInput>;
  skip?: number;
  take?: number;
};
