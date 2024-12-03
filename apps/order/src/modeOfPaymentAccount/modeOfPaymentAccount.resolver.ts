import * as graphql from "@nestjs/graphql";
import { ModeOfPaymentAccountResolverBase } from "./base/modeOfPaymentAccount.resolver.base";
import { ModeOfPaymentAccount } from "./base/ModeOfPaymentAccount";
import { ModeOfPaymentAccountService } from "./modeOfPaymentAccount.service";

@graphql.Resolver(() => ModeOfPaymentAccount)
export class ModeOfPaymentAccountResolver extends ModeOfPaymentAccountResolverBase {
  constructor(protected readonly service: ModeOfPaymentAccountService) {
    super(service);
  }
}
