import { Business } from "../business/Business";
import { Contact } from "../contact/Contact";
import { Order } from "../order/Order";
import { Proposal } from "../proposal/Proposal";

export type Opportunity = {
  competitor?: Array<Business>;
  contact?: Contact | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  proposals?: Array<Proposal>;
  updatedAt: Date;
};
