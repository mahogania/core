import * as graphql from "@nestjs/graphql";
import { PackedItemResolverBase } from "./base/packedItem.resolver.base";
import { PackedItem } from "./base/PackedItem";
import { PackedItemService } from "./packedItem.service";

@graphql.Resolver(() => PackedItem)
export class PackedItemResolver extends PackedItemResolverBase {
  constructor(protected readonly service: PackedItemService) {
    super(service);
  }
}
