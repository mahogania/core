import * as graphql from "@nestjs/graphql";
import { ProductionPlanItemReferenceResolverBase } from "./base/productionPlanItemReference.resolver.base";
import { ProductionPlanItemReference } from "./base/ProductionPlanItemReference";
import { ProductionPlanItemReferenceService } from "./productionPlanItemReference.service";

@graphql.Resolver(() => ProductionPlanItemReference)
export class ProductionPlanItemReferenceResolver extends ProductionPlanItemReferenceResolverBase {
  constructor(protected readonly service: ProductionPlanItemReferenceService) {
    super(service);
  }
}
