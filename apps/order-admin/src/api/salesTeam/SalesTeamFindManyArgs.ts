import { SalesTeamWhereInput } from "./SalesTeamWhereInput";
import { SalesTeamOrderByInput } from "./SalesTeamOrderByInput";

export type SalesTeamFindManyArgs = {
  where?: SalesTeamWhereInput;
  orderBy?: Array<SalesTeamOrderByInput>;
  skip?: number;
  take?: number;
};
