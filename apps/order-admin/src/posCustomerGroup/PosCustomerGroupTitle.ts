import { PosCustomerGroup as TPosCustomerGroup } from "../api/posCustomerGroup/PosCustomerGroup";

export const POSCUSTOMERGROUP_TITLE_FIELD = "name";

export const PosCustomerGroupTitle = (record: TPosCustomerGroup): string => {
  return record.name?.toString() || String(record.id);
};
