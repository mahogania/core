import { BulkTransactionLogDetailWhereInput } from "./BulkTransactionLogDetailWhereInput";
import { BulkTransactionLogDetailOrderByInput } from "./BulkTransactionLogDetailOrderByInput";

export type BulkTransactionLogDetailFindManyArgs = {
  where?: BulkTransactionLogDetailWhereInput;
  orderBy?: Array<BulkTransactionLogDetailOrderByInput>;
  skip?: number;
  take?: number;
};
