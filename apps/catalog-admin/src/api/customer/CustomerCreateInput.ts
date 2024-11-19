import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { ProposalCreateNestedManyWithoutCustomersInput } from "./ProposalCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  addresses?: AddressCreateNestedManyWithoutCustomersInput;
  proposals?: ProposalCreateNestedManyWithoutCustomersInput;
};
