import * as graphql from "@nestjs/graphql";
import { ProductionPlanMaterialRequestWarehouseResolverBase } from "./base/productionPlanMaterialRequestWarehouse.resolver.base";
import { ProductionPlanMaterialRequestWarehouse } from "./base/ProductionPlanMaterialRequestWarehouse";
import { ProductionPlanMaterialRequestWarehouseService } from "./productionPlanMaterialRequestWarehouse.service";

@graphql.Resolver(() => ProductionPlanMaterialRequestWarehouse)
export class ProductionPlanMaterialRequestWarehouseResolver extends ProductionPlanMaterialRequestWarehouseResolverBase {
  constructor(
    protected readonly service: ProductionPlanMaterialRequestWarehouseService
  ) {
    super(service);
  }
}
