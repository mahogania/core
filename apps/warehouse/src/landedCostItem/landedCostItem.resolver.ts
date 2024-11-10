import * as graphql from "@nestjs/graphql";
import { LandedCostItemResolverBase } from "./base/landedCostItem.resolver.base";
import { LandedCostItem } from "./base/LandedCostItem";
import { LandedCostItemService } from "./landedCostItem.service";

@graphql.Resolver(() => LandedCostItem)
export class LandedCostItemResolver extends LandedCostItemResolverBase {
  constructor(protected readonly service: LandedCostItemService) {
    super(service);
  }
}
