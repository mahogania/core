import { ProductionPlanSubAssemblyItem as TProductionPlanSubAssemblyItem } from "../api/productionPlanSubAssemblyItem/ProductionPlanSubAssemblyItem";

export const PRODUCTIONPLANSUBASSEMBLYITEM_TITLE_FIELD = "itemName";

export const ProductionPlanSubAssemblyItemTitle = (
  record: TProductionPlanSubAssemblyItem
): string => {
  return record.itemName?.toString() || String(record.id);
};
