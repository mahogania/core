import { ConstraintWhereInput } from "./ConstraintWhereInput";
import { ConstraintOrderByInput } from "./ConstraintOrderByInput";

export type ConstraintFindManyArgs = {
  where?: ConstraintWhereInput;
  orderBy?: Array<ConstraintOrderByInput>;
  skip?: number;
  take?: number;
};
