import * as graphql from "@nestjs/graphql";
import { FiscalYearCompanyResolverBase } from "./base/fiscalYearCompany.resolver.base";
import { FiscalYearCompany } from "./base/FiscalYearCompany";
import { FiscalYearCompanyService } from "./fiscalYearCompany.service";

@graphql.Resolver(() => FiscalYearCompany)
export class FiscalYearCompanyResolver extends FiscalYearCompanyResolverBase {
  constructor(protected readonly service: FiscalYearCompanyService) {
    super(service);
  }
}
