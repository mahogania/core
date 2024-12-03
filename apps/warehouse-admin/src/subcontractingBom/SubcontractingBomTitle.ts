import { SubcontractingBom as TSubcontractingBom } from "../api/subcontractingBom/SubcontractingBom";

export const SUBCONTRACTINGBOM_TITLE_FIELD = "name";

export const SubcontractingBomTitle = (record: TSubcontractingBom): string => {
  return record.name?.toString() || String(record.id);
};
