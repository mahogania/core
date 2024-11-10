import * as graphql from "@nestjs/graphql";
import { ItemTaxTemplateDetailResolverBase } from "./base/itemTaxTemplateDetail.resolver.base";
import { ItemTaxTemplateDetail } from "./base/ItemTaxTemplateDetail";
import { ItemTaxTemplateDetailService } from "./itemTaxTemplateDetail.service";

@graphql.Resolver(() => ItemTaxTemplateDetail)
export class ItemTaxTemplateDetailResolver extends ItemTaxTemplateDetailResolverBase {
  constructor(protected readonly service: ItemTaxTemplateDetailService) {
    super(service);
  }
}
