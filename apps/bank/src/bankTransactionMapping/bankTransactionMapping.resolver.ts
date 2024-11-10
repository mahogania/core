import * as graphql from "@nestjs/graphql";
import { BankTransactionMappingResolverBase } from "./base/bankTransactionMapping.resolver.base";
import { BankTransactionMapping } from "./base/BankTransactionMapping";
import { BankTransactionMappingService } from "./bankTransactionMapping.service";

@graphql.Resolver(() => BankTransactionMapping)
export class BankTransactionMappingResolver extends BankTransactionMappingResolverBase {
  constructor(protected readonly service: BankTransactionMappingService) {
    super(service);
  }
}
