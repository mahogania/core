import * as graphql from "@nestjs/graphql";
import { PurchaseReceiptItemSuppliedResolverBase } from "./base/purchaseReceiptItemSupplied.resolver.base";
import { PurchaseReceiptItemSupplied } from "./base/PurchaseReceiptItemSupplied";
import { PurchaseReceiptItemSuppliedService } from "./purchaseReceiptItemSupplied.service";

@graphql.Resolver(() => PurchaseReceiptItemSupplied)
export class PurchaseReceiptItemSuppliedResolver extends PurchaseReceiptItemSuppliedResolverBase {
  constructor(protected readonly service: PurchaseReceiptItemSuppliedService) {
    super(service);
  }
}
