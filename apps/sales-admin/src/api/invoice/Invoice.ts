import { Order } from "../order/Order";

export type Invoice = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  updatedAt: Date;
};
