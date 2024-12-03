import * as graphql from "@nestjs/graphql";
import { SubcontractingOrderItemResolverBase } from "./base/subcontractingOrderItem.resolver.base";
import { SubcontractingOrderItem } from "./base/SubcontractingOrderItem";
import { SubcontractingOrderItemService } from "./subcontractingOrderItem.service";

@graphql.Resolver(() => SubcontractingOrderItem)
export class SubcontractingOrderItemResolver extends SubcontractingOrderItemResolverBase {
  constructor(protected readonly service: SubcontractingOrderItemService) {
    super(service);
  }
}
