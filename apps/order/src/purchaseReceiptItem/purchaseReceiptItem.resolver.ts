import * as graphql from "@nestjs/graphql";
import { PurchaseReceiptItemResolverBase } from "./base/purchaseReceiptItem.resolver.base";
import { PurchaseReceiptItem } from "./base/PurchaseReceiptItem";
import { PurchaseReceiptItemService } from "./purchaseReceiptItem.service";

@graphql.Resolver(() => PurchaseReceiptItem)
export class PurchaseReceiptItemResolver extends PurchaseReceiptItemResolverBase {
  constructor(protected readonly service: PurchaseReceiptItemService) {
    super(service);
  }
}
