import { SortOrder } from "../../util/SortOrder";

export type AssignmentRuleOrderByInput = {
  assignCondition?: SortOrder;
  closeCondition?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  documentType?: SortOrder;
  dueDateBasedOn?: SortOrder;
  fieldField?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  lastUser?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  priority?: SortOrder;
  rule?: SortOrder;
  unassignCondition?: SortOrder;
  updatedAt?: SortOrder;
};
