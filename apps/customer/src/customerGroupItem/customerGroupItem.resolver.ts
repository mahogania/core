import * as graphql from "@nestjs/graphql";
import { CustomerGroupItemResolverBase } from "./base/customerGroupItem.resolver.base";
import { CustomerGroupItem } from "./base/CustomerGroupItem";
import { CustomerGroupItemService } from "./customerGroupItem.service";

@graphql.Resolver(() => CustomerGroupItem)
export class CustomerGroupItemResolver extends CustomerGroupItemResolverBase {
  constructor(protected readonly service: CustomerGroupItemService) {
    super(service);
  }
}
