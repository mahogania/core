import * as graphql from "@nestjs/graphql";
import { ProductionPlanResolverBase } from "./base/productionPlan.resolver.base";
import { ProductionPlan } from "./base/ProductionPlan";
import { ProductionPlanService } from "./productionPlan.service";

@graphql.Resolver(() => ProductionPlan)
export class ProductionPlanResolver extends ProductionPlanResolverBase {
  constructor(protected readonly service: ProductionPlanService) {
    super(service);
  }
}
