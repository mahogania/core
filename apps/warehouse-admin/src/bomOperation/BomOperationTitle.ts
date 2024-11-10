import { BomOperation as TBomOperation } from "../api/bomOperation/BomOperation";

export const BOMOPERATION_TITLE_FIELD = "name";

export const BomOperationTitle = (record: TBomOperation): string => {
  return record.name?.toString() || String(record.id);
};
