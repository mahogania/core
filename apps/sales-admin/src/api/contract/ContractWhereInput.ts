import { DealWhereUniqueInput } from "../deal/DealWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ContractWhereInput = {
  deal?: DealWhereUniqueInput;
  id?: StringFilter;
};
