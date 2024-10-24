import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type UnitUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  competitor?: BusinessWhereUniqueInput | null;
};
