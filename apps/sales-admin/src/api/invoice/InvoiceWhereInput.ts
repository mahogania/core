import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type InvoiceWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
