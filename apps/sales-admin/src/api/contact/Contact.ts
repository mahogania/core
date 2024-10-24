import { Opportunity } from "../opportunity/Opportunity";

export type Contact = {
  createdAt: Date;
  id: string;
  opportunities?: Array<Opportunity>;
  updatedAt: Date;
};
