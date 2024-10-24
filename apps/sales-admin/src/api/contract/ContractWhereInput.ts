import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ContractWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
