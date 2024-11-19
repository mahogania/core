import { Constraint as TConstraint } from "../api/constraint/Constraint";

export const CONSTRAINT_TITLE_FIELD = "id";

export const ConstraintTitle = (record: TConstraint): string => {
  return record.id?.toString() || String(record.id);
};
