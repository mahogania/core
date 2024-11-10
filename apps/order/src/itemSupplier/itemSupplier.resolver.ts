import * as graphql from "@nestjs/graphql";
import { ItemSupplierResolverBase } from "./base/itemSupplier.resolver.base";
import { ItemSupplier } from "./base/ItemSupplier";
import { ItemSupplierService } from "./itemSupplier.service";

@graphql.Resolver(() => ItemSupplier)
export class ItemSupplierResolver extends ItemSupplierResolverBase {
  constructor(protected readonly service: ItemSupplierService) {
    super(service);
  }
}
