import { Deal } from "../deal/Deal";

export type Order = {
  createdAt: Date;
  deal?: Deal | null;
  id: string;
  updatedAt: Date;
};
