import { EmailRule as TEmailRule } from "../api/emailRule/EmailRule";

export const EMAILRULE_TITLE_FIELD = "name";

export const EmailRuleTitle = (record: TEmailRule): string => {
  return record.name?.toString() || String(record.id);
};
