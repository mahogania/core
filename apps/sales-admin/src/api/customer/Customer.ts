import { Address } from "../address/Address";
import { Proposal } from "../proposal/Proposal";

export type Customer = {
  addresses?: Array<Address>;
  createdAt: Date;
  id: string;
  proposals?: Array<Proposal>;
  updatedAt: Date;
};
