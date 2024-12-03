import * as graphql from "@nestjs/graphql";
import { AccountingDimensionDetailResolverBase } from "./base/accountingDimensionDetail.resolver.base";
import { AccountingDimensionDetail } from "./base/AccountingDimensionDetail";
import { AccountingDimensionDetailService } from "./accountingDimensionDetail.service";

@graphql.Resolver(() => AccountingDimensionDetail)
export class AccountingDimensionDetailResolver extends AccountingDimensionDetailResolverBase {
  constructor(protected readonly service: AccountingDimensionDetailService) {
    super(service);
  }
}
