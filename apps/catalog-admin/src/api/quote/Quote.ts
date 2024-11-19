import { Item } from "../item/Item";
import { Proposal } from "../proposal/Proposal";

export type Quote = {
  createdAt: Date;
  id: string;
  lineItems?: Array<Item>;
  proposal?: Proposal | null;
  updatedAt: Date;
};
