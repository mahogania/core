import { AccessRequirementWhereInput } from "./AccessRequirementWhereInput";
import { AccessRequirementOrderByInput } from "./AccessRequirementOrderByInput";

export type AccessRequirementFindManyArgs = {
  where?: AccessRequirementWhereInput;
  orderBy?: Array<AccessRequirementOrderByInput>;
  skip?: number;
  take?: number;
};
