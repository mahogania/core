import * as graphql from "@nestjs/graphql";
import { CustomerCreditLimitResolverBase } from "./base/customerCreditLimit.resolver.base";
import { CustomerCreditLimit } from "./base/CustomerCreditLimit";
import { CustomerCreditLimitService } from "./customerCreditLimit.service";

@graphql.Resolver(() => CustomerCreditLimit)
export class CustomerCreditLimitResolver extends CustomerCreditLimitResolverBase {
  constructor(protected readonly service: CustomerCreditLimitService) {
    super(service);
  }
}
