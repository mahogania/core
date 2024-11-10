import { InvoiceDiscountingWhereInput } from "./InvoiceDiscountingWhereInput";
import { InvoiceDiscountingOrderByInput } from "./InvoiceDiscountingOrderByInput";

export type InvoiceDiscountingFindManyArgs = {
  where?: InvoiceDiscountingWhereInput;
  orderBy?: Array<InvoiceDiscountingOrderByInput>;
  skip?: number;
  take?: number;
};
