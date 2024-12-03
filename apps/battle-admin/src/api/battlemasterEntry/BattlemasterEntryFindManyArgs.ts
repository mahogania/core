import { BattlemasterEntryWhereInput } from "./BattlemasterEntryWhereInput";
import { BattlemasterEntryOrderByInput } from "./BattlemasterEntryOrderByInput";

export type BattlemasterEntryFindManyArgs = {
  where?: BattlemasterEntryWhereInput;
  orderBy?: Array<BattlemasterEntryOrderByInput>;
  skip?: number;
  take?: number;
};
