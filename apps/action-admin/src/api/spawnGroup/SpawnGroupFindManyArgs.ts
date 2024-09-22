import { SpawnGroupWhereInput } from "./SpawnGroupWhereInput";
import { SpawnGroupOrderByInput } from "./SpawnGroupOrderByInput";

export type SpawnGroupFindManyArgs = {
  where?: SpawnGroupWhereInput;
  orderBy?: Array<SpawnGroupOrderByInput>;
  skip?: number;
  take?: number;
};
