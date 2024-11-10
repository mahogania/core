import { InstanceSpawnGroupsWhereInput } from "./InstanceSpawnGroupsWhereInput";
import { InstanceSpawnGroupsOrderByInput } from "./InstanceSpawnGroupsOrderByInput";

export type InstanceSpawnGroupsFindManyArgs = {
  where?: InstanceSpawnGroupsWhereInput;
  orderBy?: Array<InstanceSpawnGroupsOrderByInput>;
  skip?: number;
  take?: number;
};
