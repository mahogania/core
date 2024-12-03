import { CustomDocPerm as TCustomDocPerm } from "../api/customDocPerm/CustomDocPerm";

export const CUSTOMDOCPERM_TITLE_FIELD = "name";

export const CustomDocPermTitle = (record: TCustomDocPerm): string => {
  return record.name?.toString() || String(record.id);
};
