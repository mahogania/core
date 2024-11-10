import { FiscalYearCompanyWhereInput } from "./FiscalYearCompanyWhereInput";
import { FiscalYearCompanyOrderByInput } from "./FiscalYearCompanyOrderByInput";

export type FiscalYearCompanyFindManyArgs = {
  where?: FiscalYearCompanyWhereInput;
  orderBy?: Array<FiscalYearCompanyOrderByInput>;
  skip?: number;
  take?: number;
};
