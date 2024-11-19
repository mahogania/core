import { AddressUpdateManyWithoutCustomersInput } from "./AddressUpdateManyWithoutCustomersInput";
import { ProposalUpdateManyWithoutCustomersInput } from "./ProposalUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  addresses?: AddressUpdateManyWithoutCustomersInput;
  proposals?: ProposalUpdateManyWithoutCustomersInput;
};
