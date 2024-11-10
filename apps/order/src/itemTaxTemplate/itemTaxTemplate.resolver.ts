import * as graphql from "@nestjs/graphql";
import { ItemTaxTemplateResolverBase } from "./base/itemTaxTemplate.resolver.base";
import { ItemTaxTemplate } from "./base/ItemTaxTemplate";
import { ItemTaxTemplateService } from "./itemTaxTemplate.service";

@graphql.Resolver(() => ItemTaxTemplate)
export class ItemTaxTemplateResolver extends ItemTaxTemplateResolverBase {
  constructor(protected readonly service: ItemTaxTemplateService) {
    super(service);
  }
}
