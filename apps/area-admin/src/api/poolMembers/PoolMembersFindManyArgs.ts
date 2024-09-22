import { PoolMembersWhereInput } from "./PoolMembersWhereInput";
import { PoolMembersOrderByInput } from "./PoolMembersOrderByInput";

export type PoolMembersFindManyArgs = {
  where?: PoolMembersWhereInput;
  orderBy?: Array<PoolMembersOrderByInput>;
  skip?: number;
  take?: number;
};
