import * as graphql from "@nestjs/graphql";
import { PickListItemResolverBase } from "./base/pickListItem.resolver.base";
import { PickListItem } from "./base/PickListItem";
import { PickListItemService } from "./pickListItem.service";

@graphql.Resolver(() => PickListItem)
export class PickListItemResolver extends PickListItemResolverBase {
  constructor(protected readonly service: PickListItemService) {
    super(service);
  }
}
