import * as graphql from "@nestjs/graphql";
import { BlanketOrderItemResolverBase } from "./base/blanketOrderItem.resolver.base";
import { BlanketOrderItem } from "./base/BlanketOrderItem";
import { BlanketOrderItemService } from "./blanketOrderItem.service";

@graphql.Resolver(() => BlanketOrderItem)
export class BlanketOrderItemResolver extends BlanketOrderItemResolverBase {
  constructor(protected readonly service: BlanketOrderItemService) {
    super(service);
  }
}
