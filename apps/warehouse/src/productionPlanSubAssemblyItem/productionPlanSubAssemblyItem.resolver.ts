import * as graphql from "@nestjs/graphql";
import { ProductionPlanSubAssemblyItemResolverBase } from "./base/productionPlanSubAssemblyItem.resolver.base";
import { ProductionPlanSubAssemblyItem } from "./base/ProductionPlanSubAssemblyItem";
import { ProductionPlanSubAssemblyItemService } from "./productionPlanSubAssemblyItem.service";

@graphql.Resolver(() => ProductionPlanSubAssemblyItem)
export class ProductionPlanSubAssemblyItemResolver extends ProductionPlanSubAssemblyItemResolverBase {
  constructor(
    protected readonly service: ProductionPlanSubAssemblyItemService
  ) {
    super(service);
  }
}
