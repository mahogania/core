import { PoolMember as TPoolMember } from "../api/poolMember/PoolMember";

export const POOLMEMBER_TITLE_FIELD = "id";

export const PoolMemberTitle = (record: TPoolMember): string => {
  return record.id?.toString() || String(record.id);
};
