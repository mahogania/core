import { DealWhereUniqueInput } from "../deal/DealWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InvoiceWhereInput = {
  deal?: DealWhereUniqueInput;
  id?: StringFilter;
};
