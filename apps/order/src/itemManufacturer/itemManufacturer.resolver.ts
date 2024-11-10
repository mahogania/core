import * as graphql from "@nestjs/graphql";
import { ItemManufacturerResolverBase } from "./base/itemManufacturer.resolver.base";
import { ItemManufacturer } from "./base/ItemManufacturer";
import { ItemManufacturerService } from "./itemManufacturer.service";

@graphql.Resolver(() => ItemManufacturer)
export class ItemManufacturerResolver extends ItemManufacturerResolverBase {
  constructor(protected readonly service: ItemManufacturerService) {
    super(service);
  }
}
