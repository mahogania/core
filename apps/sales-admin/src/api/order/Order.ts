import { Contract } from "../contract/Contract";
import { Invoice } from "../invoice/Invoice";
import { Opportunity } from "../opportunity/Opportunity";

export type Order = {
  contracts?: Array<Contract>;
  createdAt: Date;
  id: string;
  invoices?: Array<Invoice>;
  opportunity?: Opportunity | null;
  updatedAt: Date;
};
