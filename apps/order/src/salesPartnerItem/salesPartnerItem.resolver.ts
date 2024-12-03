import * as graphql from "@nestjs/graphql";
import { SalesPartnerItemResolverBase } from "./base/salesPartnerItem.resolver.base";
import { SalesPartnerItem } from "./base/SalesPartnerItem";
import { SalesPartnerItemService } from "./salesPartnerItem.service";

@graphql.Resolver(() => SalesPartnerItem)
export class SalesPartnerItemResolver extends SalesPartnerItemResolverBase {
  constructor(protected readonly service: SalesPartnerItemService) {
    super(service);
  }
}
