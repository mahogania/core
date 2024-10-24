import { Bundle } from "../bundle/Bundle";
import { Catalog } from "../catalog/Catalog";
import { Item } from "../item/Item";
import { Pipeline } from "../pipeline/Pipeline";

export type Configuration = {
  bundle?: Bundle | null;
  catalog?: Catalog | null;
  createdAt: Date;
  id: string;
  lineItems?: Array<Item>;
  pipeline?: Pipeline;
  updatedAt: Date;
};
