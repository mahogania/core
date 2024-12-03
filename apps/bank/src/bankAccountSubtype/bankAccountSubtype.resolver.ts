import * as graphql from "@nestjs/graphql";
import { BankAccountSubtypeResolverBase } from "./base/bankAccountSubtype.resolver.base";
import { BankAccountSubtype } from "./base/BankAccountSubtype";
import { BankAccountSubtypeService } from "./bankAccountSubtype.service";

@graphql.Resolver(() => BankAccountSubtype)
export class BankAccountSubtypeResolver extends BankAccountSubtypeResolverBase {
  constructor(protected readonly service: BankAccountSubtypeService) {
    super(service);
  }
}
