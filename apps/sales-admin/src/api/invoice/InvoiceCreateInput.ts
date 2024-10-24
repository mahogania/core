import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type InvoiceCreateInput = {
  order?: OrderWhereUniqueInput | null;
};
