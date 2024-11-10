import { AssignmentRuleUser as TAssignmentRuleUser } from "../api/assignmentRuleUser/AssignmentRuleUser";

export const ASSIGNMENTRULEUSER_TITLE_FIELD = "name";

export const AssignmentRuleUserTitle = (
  record: TAssignmentRuleUser
): string => {
  return record.name?.toString() || String(record.id);
};
