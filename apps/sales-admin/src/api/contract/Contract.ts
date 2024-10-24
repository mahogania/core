import { Order } from "../order/Order";

export type Contract = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  updatedAt: Date;
};
