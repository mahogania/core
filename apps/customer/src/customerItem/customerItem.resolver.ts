import * as graphql from "@nestjs/graphql";
import { CustomerItemResolverBase } from "./base/customerItem.resolver.base";
import { CustomerItem } from "./base/CustomerItem";
import { CustomerItemService } from "./customerItem.service";

@graphql.Resolver(() => CustomerItem)
export class CustomerItemResolver extends CustomerItemResolverBase {
  constructor(protected readonly service: CustomerItemService) {
    super(service);
  }
}
