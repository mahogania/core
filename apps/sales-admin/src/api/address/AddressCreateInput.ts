import { UnitCreateNestedManyWithoutAddressesInput } from "./UnitCreateNestedManyWithoutAddressesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressCreateInput = {
  competitorBusinessUnits?: UnitCreateNestedManyWithoutAddressesInput;
  customer?: CustomerWhereUniqueInput | null;
};
