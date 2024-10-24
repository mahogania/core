import { Item } from "../item/Item";
import { Pipeline } from "../pipeline/Pipeline";
import { Bundle } from "../bundle/Bundle";

export type Configuration = {
  createdAt: Date;
  id: string;
  lineItems?: Array<Item>;
  processConfiguration?: Pipeline | null;
  productConfiguration?: Bundle | null;
  updatedAt: Date;
};
