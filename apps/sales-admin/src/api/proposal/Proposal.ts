import { Opportunity } from "../opportunity/Opportunity";
import { Quote } from "../quote/Quote";
import { Threat } from "../threat/Threat";

export type Proposal = {
  createdAt: Date;
  id: string;
  opportunity?: Opportunity | null;
  quotes?: Array<Quote>;
  threat?: Threat | null;
  updatedAt: Date;
};
