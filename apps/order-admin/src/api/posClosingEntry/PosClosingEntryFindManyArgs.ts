import { PosClosingEntryWhereInput } from "./PosClosingEntryWhereInput";
import { PosClosingEntryOrderByInput } from "./PosClosingEntryOrderByInput";

export type PosClosingEntryFindManyArgs = {
  where?: PosClosingEntryWhereInput;
  orderBy?: Array<PosClosingEntryOrderByInput>;
  skip?: number;
  take?: number;
};
