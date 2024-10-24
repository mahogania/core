import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type InvoiceUpdateInput = {
  order?: OrderWhereUniqueInput | null;
};
