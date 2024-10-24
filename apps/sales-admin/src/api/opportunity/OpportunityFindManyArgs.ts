import { OpportunityWhereInput } from "./OpportunityWhereInput";
import { OpportunityOrderByInput } from "./OpportunityOrderByInput";

export type OpportunityFindManyArgs = {
  where?: OpportunityWhereInput;
  orderBy?: Array<OpportunityOrderByInput>;
  skip?: number;
  take?: number;
};
