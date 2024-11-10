import * as graphql from "@nestjs/graphql";
import { CustomerGroupResolverBase } from "./base/customerGroup.resolver.base";
import { CustomerGroup } from "./base/CustomerGroup";
import { CustomerGroupService } from "./customerGroup.service";

@graphql.Resolver(() => CustomerGroup)
export class CustomerGroupResolver extends CustomerGroupResolverBase {
  constructor(protected readonly service: CustomerGroupService) {
    super(service);
  }
}
