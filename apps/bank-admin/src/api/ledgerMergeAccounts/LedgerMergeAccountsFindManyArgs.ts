import { LedgerMergeAccountsWhereInput } from "./LedgerMergeAccountsWhereInput";
import { LedgerMergeAccountsOrderByInput } from "./LedgerMergeAccountsOrderByInput";

export type LedgerMergeAccountsFindManyArgs = {
  where?: LedgerMergeAccountsWhereInput;
  orderBy?: Array<LedgerMergeAccountsOrderByInput>;
  skip?: number;
  take?: number;
};
