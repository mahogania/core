import * as graphql from "@nestjs/graphql";
import { ItemReorderResolverBase } from "./base/itemReorder.resolver.base";
import { ItemReorder } from "./base/ItemReorder";
import { ItemReorderService } from "./itemReorder.service";

@graphql.Resolver(() => ItemReorder)
export class ItemReorderResolver extends ItemReorderResolverBase {
  constructor(protected readonly service: ItemReorderService) {
    super(service);
  }
}
