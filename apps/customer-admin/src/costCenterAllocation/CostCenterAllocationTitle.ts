import { CostCenterAllocation as TCostCenterAllocation } from "../api/costCenterAllocation/CostCenterAllocation";

export const COSTCENTERALLOCATION_TITLE_FIELD = "name";

export const CostCenterAllocationTitle = (
  record: TCostCenterAllocation
): string => {
  return record.name?.toString() || String(record.id);
};
