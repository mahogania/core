import { Option } from "../option/Option";

export type Product = {
  createdAt: Date;
  id: string;
  options?: Array<Option>;
  updatedAt: Date;
  version: string | null;
};
