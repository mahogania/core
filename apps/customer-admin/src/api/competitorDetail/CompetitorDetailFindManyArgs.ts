import { CompetitorDetailWhereInput } from "./CompetitorDetailWhereInput";
import { CompetitorDetailOrderByInput } from "./CompetitorDetailOrderByInput";

export type CompetitorDetailFindManyArgs = {
  where?: CompetitorDetailWhereInput;
  orderBy?: Array<CompetitorDetailOrderByInput>;
  skip?: number;
  take?: number;
};
