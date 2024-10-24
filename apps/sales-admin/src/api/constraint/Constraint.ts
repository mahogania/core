import { Product } from "../product/Product";
import { Option } from "../option/Option";

export type Constraint = {
  ascendantProduct?: Product | null;
  createdAt: Date;
  depth: number | null;
  descendantProduct?: Product | null;
  id: string;
  kind?: "Allow" | "Forbid" | null;
  option?: Option | null;
  updatedAt: Date;
};
