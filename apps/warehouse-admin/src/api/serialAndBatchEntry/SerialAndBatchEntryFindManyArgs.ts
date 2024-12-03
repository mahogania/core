import { SerialAndBatchEntryWhereInput } from "./SerialAndBatchEntryWhereInput";
import { SerialAndBatchEntryOrderByInput } from "./SerialAndBatchEntryOrderByInput";

export type SerialAndBatchEntryFindManyArgs = {
  where?: SerialAndBatchEntryWhereInput;
  orderBy?: Array<SerialAndBatchEntryOrderByInput>;
  skip?: number;
  take?: number;
};
