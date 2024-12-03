import { PosOpeningEntryWhereInput } from "./PosOpeningEntryWhereInput";
import { PosOpeningEntryOrderByInput } from "./PosOpeningEntryOrderByInput";

export type PosOpeningEntryFindManyArgs = {
  where?: PosOpeningEntryWhereInput;
  orderBy?: Array<PosOpeningEntryOrderByInput>;
  skip?: number;
  take?: number;
};
