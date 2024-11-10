import { Customer } from "../customer/Customer";
import { Opportunity } from "../opportunity/Opportunity";
import { Quote } from "../quote/Quote";

export type Proposal = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  opportunity?: Opportunity | null;
  quotes?: Array<Quote>;
  updatedAt: Date;
};
