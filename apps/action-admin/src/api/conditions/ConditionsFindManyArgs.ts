import { ConditionsWhereInput } from "./ConditionsWhereInput";
import { ConditionsOrderByInput } from "./ConditionsOrderByInput";

export type ConditionsFindManyArgs = {
  where?: ConditionsWhereInput;
  orderBy?: Array<ConditionsOrderByInput>;
  skip?: number;
  take?: number;
};
