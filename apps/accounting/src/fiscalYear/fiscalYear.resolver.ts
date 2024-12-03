import * as graphql from "@nestjs/graphql";
import { FiscalYearResolverBase } from "./base/fiscalYear.resolver.base";
import { FiscalYear } from "./base/FiscalYear";
import { FiscalYearService } from "./fiscalYear.service";

@graphql.Resolver(() => FiscalYear)
export class FiscalYearResolver extends FiscalYearResolverBase {
  constructor(protected readonly service: FiscalYearService) {
    super(service);
  }
}
