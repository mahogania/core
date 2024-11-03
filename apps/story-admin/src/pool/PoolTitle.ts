import { Pool as TPool } from "../api/pool/Pool";

export const POOL_TITLE_FIELD = "id";

export const PoolTitle = (record: TPool): string => {
  return record.id?.toString() || String(record.id);
};
