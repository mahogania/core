import { ProductionPlanSalesOrder as TProductionPlanSalesOrder } from "../api/productionPlanSalesOrder/ProductionPlanSalesOrder";

export const PRODUCTIONPLANSALESORDER_TITLE_FIELD = "name";

export const ProductionPlanSalesOrderTitle = (
  record: TProductionPlanSalesOrder
): string => {
  return record.name?.toString() || String(record.id);
};
