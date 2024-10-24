export type Constraint = {
  createdAt: Date;
  depth: number | null;
  id: string;
  kind?: "Allow" | "Forbid" | "Force" | null;
  updatedAt: Date;
};
