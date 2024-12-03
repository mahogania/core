import * as graphql from "@nestjs/graphql";
import { AccountingDimensionResolverBase } from "./base/accountingDimension.resolver.base";
import { AccountingDimension } from "./base/AccountingDimension";
import { AccountingDimensionService } from "./accountingDimension.service";

@graphql.Resolver(() => AccountingDimension)
export class AccountingDimensionResolver extends AccountingDimensionResolverBase {
  constructor(protected readonly service: AccountingDimensionService) {
    super(service);
  }
}
