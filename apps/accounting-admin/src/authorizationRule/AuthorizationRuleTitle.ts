import { AuthorizationRule as TAuthorizationRule } from "../api/authorizationRule/AuthorizationRule";

export const AUTHORIZATIONRULE_TITLE_FIELD = "masterName";

export const AuthorizationRuleTitle = (record: TAuthorizationRule): string => {
  return record.masterName?.toString() || String(record.id);
};
