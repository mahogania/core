import { LeadSourceWhereInput } from "./LeadSourceWhereInput";
import { LeadSourceOrderByInput } from "./LeadSourceOrderByInput";

export type LeadSourceFindManyArgs = {
  where?: LeadSourceWhereInput;
  orderBy?: Array<LeadSourceOrderByInput>;
  skip?: number;
  take?: number;
};
