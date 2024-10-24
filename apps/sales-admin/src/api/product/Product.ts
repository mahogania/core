import { Option } from "../option/Option";
import { Constraint } from "../constraint/Constraint";

export type Product = {
  createdAt: Date;
  id: string;
  options?: Array<Option>;
  predecessorProductPaths?: Constraint | null;
  successorProductPaths?: Constraint | null;
  updatedAt: Date;
  version: string | null;
};
