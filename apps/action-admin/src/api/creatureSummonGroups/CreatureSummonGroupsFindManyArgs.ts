import { CreatureSummonGroupsWhereInput } from "./CreatureSummonGroupsWhereInput";
import { CreatureSummonGroupsOrderByInput } from "./CreatureSummonGroupsOrderByInput";

export type CreatureSummonGroupsFindManyArgs = {
  where?: CreatureSummonGroupsWhereInput;
  orderBy?: Array<CreatureSummonGroupsOrderByInput>;
  skip?: number;
  take?: number;
};
