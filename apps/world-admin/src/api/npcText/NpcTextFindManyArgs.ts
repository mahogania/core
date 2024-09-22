import { NpcTextWhereInput } from "./NpcTextWhereInput";
import { NpcTextOrderByInput } from "./NpcTextOrderByInput";

export type NpcTextFindManyArgs = {
  where?: NpcTextWhereInput;
  orderBy?: Array<NpcTextOrderByInput>;
  skip?: number;
  take?: number;
};
