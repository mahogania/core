import { LedgerMergeWhereInput } from "./LedgerMergeWhereInput";
import { LedgerMergeOrderByInput } from "./LedgerMergeOrderByInput";

export type LedgerMergeFindManyArgs = {
  where?: LedgerMergeWhereInput;
  orderBy?: Array<LedgerMergeOrderByInput>;
  skip?: number;
  take?: number;
};
