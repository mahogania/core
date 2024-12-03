import * as graphql from "@nestjs/graphql";
import { FinanceBookResolverBase } from "./base/financeBook.resolver.base";
import { FinanceBook } from "./base/FinanceBook";
import { FinanceBookService } from "./financeBook.service";

@graphql.Resolver(() => FinanceBook)
export class FinanceBookResolver extends FinanceBookResolverBase {
  constructor(protected readonly service: FinanceBookService) {
    super(service);
  }
}
