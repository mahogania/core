import * as graphql from "@nestjs/graphql";
import { BankGuaranteeResolverBase } from "./base/bankGuarantee.resolver.base";
import { BankGuarantee } from "./base/BankGuarantee";
import { BankGuaranteeService } from "./bankGuarantee.service";

@graphql.Resolver(() => BankGuarantee)
export class BankGuaranteeResolver extends BankGuaranteeResolverBase {
  constructor(protected readonly service: BankGuaranteeService) {
    super(service);
  }
}
