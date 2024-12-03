import { ProductionPlanItem as TProductionPlanItem } from "../api/productionPlanItem/ProductionPlanItem";

export const PRODUCTIONPLANITEM_TITLE_FIELD = "name";

export const ProductionPlanItemTitle = (
  record: TProductionPlanItem
): string => {
  return record.name?.toString() || String(record.id);
};
