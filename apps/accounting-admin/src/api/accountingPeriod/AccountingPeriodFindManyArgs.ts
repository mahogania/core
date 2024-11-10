import { AccountingPeriodWhereInput } from "./AccountingPeriodWhereInput";
import { AccountingPeriodOrderByInput } from "./AccountingPeriodOrderByInput";

export type AccountingPeriodFindManyArgs = {
  where?: AccountingPeriodWhereInput;
  orderBy?: Array<AccountingPeriodOrderByInput>;
  skip?: number;
  take?: number;
};
