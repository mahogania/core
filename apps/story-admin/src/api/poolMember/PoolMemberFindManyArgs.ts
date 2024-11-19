import { PoolMemberWhereInput } from "./PoolMemberWhereInput";
import { PoolMemberOrderByInput } from "./PoolMemberOrderByInput";

export type PoolMemberFindManyArgs = {
  where?: PoolMemberWhereInput;
  orderBy?: Array<PoolMemberOrderByInput>;
  skip?: number;
  take?: number;
};
