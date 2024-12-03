import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FiscalYearCompanyService } from "./fiscalYearCompany.service";
import { FiscalYearCompanyControllerBase } from "./base/fiscalYearCompany.controller.base";

@swagger.ApiTags("fiscalYearCompanies")
@common.Controller("fiscalYearCompanies")
export class FiscalYearCompanyController extends FiscalYearCompanyControllerBase {
  constructor(protected readonly service: FiscalYearCompanyService) {
    super(service);
  }
}
