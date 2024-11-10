import { CompanyHistoryWhereInput } from "./CompanyHistoryWhereInput";
import { CompanyHistoryOrderByInput } from "./CompanyHistoryOrderByInput";

export type CompanyHistoryFindManyArgs = {
  where?: CompanyHistoryWhereInput;
  orderBy?: Array<CompanyHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
