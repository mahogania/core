import * as graphql from "@nestjs/graphql";
import { PurchaseOrderItemResolverBase } from "./base/purchaseOrderItem.resolver.base";
import { PurchaseOrderItem } from "./base/PurchaseOrderItem";
import { PurchaseOrderItemService } from "./purchaseOrderItem.service";

@graphql.Resolver(() => PurchaseOrderItem)
export class PurchaseOrderItemResolver extends PurchaseOrderItemResolverBase {
  constructor(protected readonly service: PurchaseOrderItemService) {
    super(service);
  }
}
