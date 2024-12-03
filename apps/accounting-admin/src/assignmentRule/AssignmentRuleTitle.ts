import { AssignmentRule as TAssignmentRule } from "../api/assignmentRule/AssignmentRule";

export const ASSIGNMENTRULE_TITLE_FIELD = "name";

export const AssignmentRuleTitle = (record: TAssignmentRule): string => {
  return record.name?.toString() || String(record.id);
};
