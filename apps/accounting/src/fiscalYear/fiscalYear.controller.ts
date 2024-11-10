import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FiscalYearService } from "./fiscalYear.service";
import { FiscalYearControllerBase } from "./base/fiscalYear.controller.base";

@swagger.ApiTags("fiscalYears")
@common.Controller("fiscalYears")
export class FiscalYearController extends FiscalYearControllerBase {
  constructor(protected readonly service: FiscalYearService) {
    super(service);
  }
}
