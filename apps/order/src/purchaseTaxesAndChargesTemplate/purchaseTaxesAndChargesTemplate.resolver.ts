import * as graphql from "@nestjs/graphql";
import { PurchaseTaxesAndChargesTemplateResolverBase } from "./base/purchaseTaxesAndChargesTemplate.resolver.base";
import { PurchaseTaxesAndChargesTemplate } from "./base/PurchaseTaxesAndChargesTemplate";
import { PurchaseTaxesAndChargesTemplateService } from "./purchaseTaxesAndChargesTemplate.service";

@graphql.Resolver(() => PurchaseTaxesAndChargesTemplate)
export class PurchaseTaxesAndChargesTemplateResolver extends PurchaseTaxesAndChargesTemplateResolverBase {
  constructor(
    protected readonly service: PurchaseTaxesAndChargesTemplateService
  ) {
    super(service);
  }
}
