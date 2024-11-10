import * as graphql from "@nestjs/graphql";
import { ItemGroupResolverBase } from "./base/itemGroup.resolver.base";
import { ItemGroup } from "./base/ItemGroup";
import { ItemGroupService } from "./itemGroup.service";

@graphql.Resolver(() => ItemGroup)
export class ItemGroupResolver extends ItemGroupResolverBase {
  constructor(protected readonly service: ItemGroupService) {
    super(service);
  }
}
