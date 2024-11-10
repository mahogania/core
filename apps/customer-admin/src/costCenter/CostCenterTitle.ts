import { CostCenter as TCostCenter } from "../api/costCenter/CostCenter";

export const COSTCENTER_TITLE_FIELD = "costCenterName";

export const CostCenterTitle = (record: TCostCenter): string => {
  return record.costCenterName?.toString() || String(record.id);
};
