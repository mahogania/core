import { CompetitorWhereInput } from "./CompetitorWhereInput";
import { CompetitorOrderByInput } from "./CompetitorOrderByInput";

export type CompetitorFindManyArgs = {
  where?: CompetitorWhereInput;
  orderBy?: Array<CompetitorOrderByInput>;
  skip?: number;
  take?: number;
};
