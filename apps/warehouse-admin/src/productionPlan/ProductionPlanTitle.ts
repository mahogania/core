import { ProductionPlan as TProductionPlan } from "../api/productionPlan/ProductionPlan";

export const PRODUCTIONPLAN_TITLE_FIELD = "name";

export const ProductionPlanTitle = (record: TProductionPlan): string => {
  return record.name?.toString() || String(record.id);
};
