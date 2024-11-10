import { BomUpdateLog as TBomUpdateLog } from "../api/bomUpdateLog/BomUpdateLog";

export const BOMUPDATELOG_TITLE_FIELD = "name";

export const BomUpdateLogTitle = (record: TBomUpdateLog): string => {
  return record.name?.toString() || String(record.id);
};
