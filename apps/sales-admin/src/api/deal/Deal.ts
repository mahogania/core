import { Contract } from "../contract/Contract";
import { Invoice } from "../invoice/Invoice";
import { Order } from "../order/Order";
import { Unit } from "../unit/Unit";

export type Deal = {
  contracts?: Array<Contract>;
  createdAt: Date;
  id: string;
  invoices?: Array<Invoice>;
  orders?: Array<Order>;
  unit?: Unit | null;
  updatedAt: Date;
};
