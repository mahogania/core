import { PoolMembers as TPoolMembers } from "../api/poolMembers/PoolMembers";

export const POOLMEMBERS_TITLE_FIELD = "id";

export const PoolMembersTitle = (record: TPoolMembers): string => {
  return record.id?.toString() || String(record.id);
};
