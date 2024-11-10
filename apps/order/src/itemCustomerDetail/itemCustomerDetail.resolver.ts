import * as graphql from "@nestjs/graphql";
import { ItemCustomerDetailResolverBase } from "./base/itemCustomerDetail.resolver.base";
import { ItemCustomerDetail } from "./base/ItemCustomerDetail";
import { ItemCustomerDetailService } from "./itemCustomerDetail.service";

@graphql.Resolver(() => ItemCustomerDetail)
export class ItemCustomerDetailResolver extends ItemCustomerDetailResolverBase {
  constructor(protected readonly service: ItemCustomerDetailService) {
    super(service);
  }
}
