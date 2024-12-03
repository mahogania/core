import { FiscalYearWhereInput } from "./FiscalYearWhereInput";
import { FiscalYearOrderByInput } from "./FiscalYearOrderByInput";

export type FiscalYearFindManyArgs = {
  where?: FiscalYearWhereInput;
  orderBy?: Array<FiscalYearOrderByInput>;
  skip?: number;
  take?: number;
};
