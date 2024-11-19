import { LedgerHealthWhereInput } from "./LedgerHealthWhereInput";
import { LedgerHealthOrderByInput } from "./LedgerHealthOrderByInput";

export type LedgerHealthFindManyArgs = {
  where?: LedgerHealthWhereInput;
  orderBy?: Array<LedgerHealthOrderByInput>;
  skip?: number;
  take?: number;
};
