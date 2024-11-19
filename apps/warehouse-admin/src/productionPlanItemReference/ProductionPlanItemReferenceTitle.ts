import { ProductionPlanItemReference as TProductionPlanItemReference } from "../api/productionPlanItemReference/ProductionPlanItemReference";

export const PRODUCTIONPLANITEMREFERENCE_TITLE_FIELD = "name";

export const ProductionPlanItemReferenceTitle = (
  record: TProductionPlanItemReference
): string => {
  return record.name?.toString() || String(record.id);
};
