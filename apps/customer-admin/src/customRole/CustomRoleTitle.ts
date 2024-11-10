import { CustomRole as TCustomRole } from "../api/customRole/CustomRole";

export const CUSTOMROLE_TITLE_FIELD = "name";

export const CustomRoleTitle = (record: TCustomRole): string => {
  return record.name?.toString() || String(record.id);
};
