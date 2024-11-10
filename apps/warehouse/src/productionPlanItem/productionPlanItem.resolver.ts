import * as graphql from "@nestjs/graphql";
import { ProductionPlanItemResolverBase } from "./base/productionPlanItem.resolver.base";
import { ProductionPlanItem } from "./base/ProductionPlanItem";
import { ProductionPlanItemService } from "./productionPlanItem.service";

@graphql.Resolver(() => ProductionPlanItem)
export class ProductionPlanItemResolver extends ProductionPlanItemResolverBase {
  constructor(protected readonly service: ProductionPlanItemService) {
    super(service);
  }
}
