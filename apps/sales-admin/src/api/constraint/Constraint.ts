import { Option } from "../option/Option";

export type Constraint = {
  createdAt: Date;
  depth: number | null;
  drivenOption?: Option | null;
  drivingOption?: Option | null;
  id: string;
  kind?: "Allow" | "Forbid" | "Force" | null;
  updatedAt: Date;
};
