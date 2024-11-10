import * as graphql from "@nestjs/graphql";
import { InventoryDimensionResolverBase } from "./base/inventoryDimension.resolver.base";
import { InventoryDimension } from "./base/InventoryDimension";
import { InventoryDimensionService } from "./inventoryDimension.service";

@graphql.Resolver(() => InventoryDimension)
export class InventoryDimensionResolver extends InventoryDimensionResolverBase {
  constructor(protected readonly service: InventoryDimensionService) {
    super(service);
  }
}
