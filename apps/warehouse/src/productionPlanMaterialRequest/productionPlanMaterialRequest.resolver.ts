import * as graphql from "@nestjs/graphql";
import { ProductionPlanMaterialRequestResolverBase } from "./base/productionPlanMaterialRequest.resolver.base";
import { ProductionPlanMaterialRequest } from "./base/ProductionPlanMaterialRequest";
import { ProductionPlanMaterialRequestService } from "./productionPlanMaterialRequest.service";

@graphql.Resolver(() => ProductionPlanMaterialRequest)
export class ProductionPlanMaterialRequestResolver extends ProductionPlanMaterialRequestResolverBase {
  constructor(
    protected readonly service: ProductionPlanMaterialRequestService
  ) {
    super(service);
  }
}
