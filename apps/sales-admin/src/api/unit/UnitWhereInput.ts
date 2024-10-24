import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UnitWhereInput = {
  address?: AddressWhereUniqueInput;
  competitor?: BusinessWhereUniqueInput;
  id?: StringFilter;
};
