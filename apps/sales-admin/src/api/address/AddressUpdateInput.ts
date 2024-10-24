import { UnitUpdateManyWithoutAddressesInput } from "./UnitUpdateManyWithoutAddressesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressUpdateInput = {
  competitorBusinessUnits?: UnitUpdateManyWithoutAddressesInput;
  customer?: CustomerWhereUniqueInput | null;
};
