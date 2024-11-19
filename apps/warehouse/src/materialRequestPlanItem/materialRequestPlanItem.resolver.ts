import * as graphql from "@nestjs/graphql";
import { MaterialRequestPlanItemResolverBase } from "./base/materialRequestPlanItem.resolver.base";
import { MaterialRequestPlanItem } from "./base/MaterialRequestPlanItem";
import { MaterialRequestPlanItemService } from "./materialRequestPlanItem.service";

@graphql.Resolver(() => MaterialRequestPlanItem)
export class MaterialRequestPlanItemResolver extends MaterialRequestPlanItemResolverBase {
  constructor(protected readonly service: MaterialRequestPlanItemService) {
    super(service);
  }
}
