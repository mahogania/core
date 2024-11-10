import { CostCenterAllocationPercentage as TCostCenterAllocationPercentage } from "../api/costCenterAllocationPercentage/CostCenterAllocationPercentage";

export const COSTCENTERALLOCATIONPERCENTAGE_TITLE_FIELD = "name";

export const CostCenterAllocationPercentageTitle = (
  record: TCostCenterAllocationPercentage
): string => {
  return record.name?.toString() || String(record.id);
};
