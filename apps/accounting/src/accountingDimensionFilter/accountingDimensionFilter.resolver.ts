import * as graphql from "@nestjs/graphql";
import { AccountingDimensionFilterResolverBase } from "./base/accountingDimensionFilter.resolver.base";
import { AccountingDimensionFilter } from "./base/AccountingDimensionFilter";
import { AccountingDimensionFilterService } from "./accountingDimensionFilter.service";

@graphql.Resolver(() => AccountingDimensionFilter)
export class AccountingDimensionFilterResolver extends AccountingDimensionFilterResolverBase {
  constructor(protected readonly service: AccountingDimensionFilterService) {
    super(service);
  }
}
