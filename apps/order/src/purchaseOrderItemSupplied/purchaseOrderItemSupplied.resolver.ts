import * as graphql from "@nestjs/graphql";
import { PurchaseOrderItemSuppliedResolverBase } from "./base/purchaseOrderItemSupplied.resolver.base";
import { PurchaseOrderItemSupplied } from "./base/PurchaseOrderItemSupplied";
import { PurchaseOrderItemSuppliedService } from "./purchaseOrderItemSupplied.service";

@graphql.Resolver(() => PurchaseOrderItemSupplied)
export class PurchaseOrderItemSuppliedResolver extends PurchaseOrderItemSuppliedResolverBase {
  constructor(protected readonly service: PurchaseOrderItemSuppliedService) {
    super(service);
  }
}
