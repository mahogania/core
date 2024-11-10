import * as graphql from "@nestjs/graphql";
import { ApplicableOnAccountResolverBase } from "./base/applicableOnAccount.resolver.base";
import { ApplicableOnAccount } from "./base/ApplicableOnAccount";
import { ApplicableOnAccountService } from "./applicableOnAccount.service";

@graphql.Resolver(() => ApplicableOnAccount)
export class ApplicableOnAccountResolver extends ApplicableOnAccountResolverBase {
  constructor(protected readonly service: ApplicableOnAccountService) {
    super(service);
  }
}
