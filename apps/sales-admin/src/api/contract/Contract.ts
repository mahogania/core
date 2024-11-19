import { Deal } from "../deal/Deal";

export type Contract = {
  createdAt: Date;
  deal?: Deal | null;
  id: string;
  updatedAt: Date;
};
