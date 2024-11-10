import { EmailGroup as TEmailGroup } from "../api/emailGroup/EmailGroup";

export const EMAILGROUP_TITLE_FIELD = "name";

export const EmailGroupTitle = (record: TEmailGroup): string => {
  return record.name?.toString() || String(record.id);
};
