import { DealWhereUniqueInput } from "../deal/DealWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  deal?: DealWhereUniqueInput;
  id?: StringFilter;
};
