import { Deal } from "../deal/Deal";

export type Invoice = {
  createdAt: Date;
  deal?: Deal | null;
  id: string;
  updatedAt: Date;
};
