import * as graphql from "@nestjs/graphql";
import { BankAccountTypeResolverBase } from "./base/bankAccountType.resolver.base";
import { BankAccountType } from "./base/BankAccountType";
import { BankAccountTypeService } from "./bankAccountType.service";

@graphql.Resolver(() => BankAccountType)
export class BankAccountTypeResolver extends BankAccountTypeResolverBase {
  constructor(protected readonly service: BankAccountTypeService) {
    super(service);
  }
}
