import { AccessRequirement as TAccessRequirement } from "../api/accessRequirement/AccessRequirement";

export const ACCESSREQUIREMENT_TITLE_FIELD = "id";

export const AccessRequirementTitle = (record: TAccessRequirement): string => {
  return record.id?.toString() || String(record.id);
};
