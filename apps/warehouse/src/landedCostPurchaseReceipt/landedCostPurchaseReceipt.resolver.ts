import * as graphql from "@nestjs/graphql";
import { LandedCostPurchaseReceiptResolverBase } from "./base/landedCostPurchaseReceipt.resolver.base";
import { LandedCostPurchaseReceipt } from "./base/LandedCostPurchaseReceipt";
import { LandedCostPurchaseReceiptService } from "./landedCostPurchaseReceipt.service";

@graphql.Resolver(() => LandedCostPurchaseReceipt)
export class LandedCostPurchaseReceiptResolver extends LandedCostPurchaseReceiptResolverBase {
  constructor(protected readonly service: LandedCostPurchaseReceiptService) {
    super(service);
  }
}
