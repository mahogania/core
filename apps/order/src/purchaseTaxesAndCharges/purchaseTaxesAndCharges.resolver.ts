import * as graphql from "@nestjs/graphql";
import { PurchaseTaxesAndChargesResolverBase } from "./base/purchaseTaxesAndCharges.resolver.base";
import { PurchaseTaxesAndCharges } from "./base/PurchaseTaxesAndCharges";
import { PurchaseTaxesAndChargesService } from "./purchaseTaxesAndCharges.service";

@graphql.Resolver(() => PurchaseTaxesAndCharges)
export class PurchaseTaxesAndChargesResolver extends PurchaseTaxesAndChargesResolverBase {
  constructor(protected readonly service: PurchaseTaxesAndChargesService) {
    super(service);
  }
}
