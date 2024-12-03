import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LedgerHealthMonitorCompanyService } from "./ledgerHealthMonitorCompany.service";
import { LedgerHealthMonitorCompanyControllerBase } from "./base/ledgerHealthMonitorCompany.controller.base";

@swagger.ApiTags("ledgerHealthMonitorCompanies")
@common.Controller("ledgerHealthMonitorCompanies")
export class LedgerHealthMonitorCompanyController extends LedgerHealthMonitorCompanyControllerBase {
  constructor(protected readonly service: LedgerHealthMonitorCompanyService) {
    super(service);
  }
}
