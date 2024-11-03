import * as graphql from "@nestjs/graphql";
import { BankClearanceDetailResolverBase } from "./base/bankClearanceDetail.resolver.base";
import { BankClearanceDetail } from "./base/BankClearanceDetail";
import { BankClearanceDetailService } from "./bankClearanceDetail.service";

@graphql.Resolver(() => BankClearanceDetail)
export class BankClearanceDetailResolver extends BankClearanceDetailResolverBase {
  constructor(protected readonly service: BankClearanceDetailService) {
    super(service);
  }
}
