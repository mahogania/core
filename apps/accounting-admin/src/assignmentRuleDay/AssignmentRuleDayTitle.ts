import { AssignmentRuleDay as TAssignmentRuleDay } from "../api/assignmentRuleDay/AssignmentRuleDay";

export const ASSIGNMENTRULEDAY_TITLE_FIELD = "name";

export const AssignmentRuleDayTitle = (record: TAssignmentRuleDay): string => {
  return record.name?.toString() || String(record.id);
};
