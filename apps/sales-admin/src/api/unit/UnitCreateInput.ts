import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";

export type UnitCreateInput = {
  address?: AddressWhereUniqueInput | null;
  competitor?: BusinessWhereUniqueInput | null;
};
