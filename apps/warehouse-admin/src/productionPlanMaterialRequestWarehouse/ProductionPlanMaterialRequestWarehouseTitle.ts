import { ProductionPlanMaterialRequestWarehouse as TProductionPlanMaterialRequestWarehouse } from "../api/productionPlanMaterialRequestWarehouse/ProductionPlanMaterialRequestWarehouse";

export const PRODUCTIONPLANMATERIALREQUESTWAREHOUSE_TITLE_FIELD = "name";

export const ProductionPlanMaterialRequestWarehouseTitle = (
  record: TProductionPlanMaterialRequestWarehouse
): string => {
  return record.name?.toString() || String(record.id);
};
