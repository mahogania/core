import * as graphql from "@nestjs/graphql";
import { SubcontractingOrderServiceItemResolverBase } from "./base/subcontractingOrderServiceItem.resolver.base";
import { SubcontractingOrderServiceItem } from "./base/SubcontractingOrderServiceItem";
import { SubcontractingOrderServiceItemService } from "./subcontractingOrderServiceItem.service";

@graphql.Resolver(() => SubcontractingOrderServiceItem)
export class SubcontractingOrderServiceItemResolver extends SubcontractingOrderServiceItemResolverBase {
  constructor(
    protected readonly service: SubcontractingOrderServiceItemService
  ) {
    super(service);
  }
}
