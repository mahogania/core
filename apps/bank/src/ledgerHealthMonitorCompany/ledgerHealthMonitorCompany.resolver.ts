import * as graphql from "@nestjs/graphql";
import { LedgerHealthMonitorCompanyResolverBase } from "./base/ledgerHealthMonitorCompany.resolver.base";
import { LedgerHealthMonitorCompany } from "./base/LedgerHealthMonitorCompany";
import { LedgerHealthMonitorCompanyService } from "./ledgerHealthMonitorCompany.service";

@graphql.Resolver(() => LedgerHealthMonitorCompany)
export class LedgerHealthMonitorCompanyResolver extends LedgerHealthMonitorCompanyResolverBase {
  constructor(protected readonly service: LedgerHealthMonitorCompanyService) {
    super(service);
  }
}
