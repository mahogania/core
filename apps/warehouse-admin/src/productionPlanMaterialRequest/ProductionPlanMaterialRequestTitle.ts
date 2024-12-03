import { ProductionPlanMaterialRequest as TProductionPlanMaterialRequest } from "../api/productionPlanMaterialRequest/ProductionPlanMaterialRequest";

export const PRODUCTIONPLANMATERIALREQUEST_TITLE_FIELD = "name";

export const ProductionPlanMaterialRequestTitle = (
  record: TProductionPlanMaterialRequest
): string => {
  return record.name?.toString() || String(record.id);
};
