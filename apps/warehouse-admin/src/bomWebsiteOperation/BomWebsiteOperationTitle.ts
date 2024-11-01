import { BomWebsiteOperation as TBomWebsiteOperation } from "../api/bomWebsiteOperation/BomWebsiteOperation";

export const BOMWEBSITEOPERATION_TITLE_FIELD = "name";

export const BomWebsiteOperationTitle = (
  record: TBomWebsiteOperation
): string => {
  return record.name?.toString() || String(record.id);
};
